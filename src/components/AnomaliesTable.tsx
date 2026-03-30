import { useState, useEffect, useRef } from 'react';
import { Search, AlertTriangle, Volume2, ChevronLeft, ChevronRight, WifiOff } from 'lucide-react';

interface Anomaly {
  id: string;
  regNo: string;
  transporter: string;
  assetName: string;
  status: 'Moving' | 'Idle' | 'Stationary' | 'Parked' | 'Inactive' | 'Offline';
  date: string;
  panic: boolean;
  address?: string;
}

type StatusFilter = 'All' | 'Moving' | 'Idle' | 'Stationary' | 'Parked' | 'Inactive' | 'Offline';

interface Props {
  statusFilter: StatusFilter;
  onFilterChange: (filter: StatusFilter) => void;
  authFetch: (url: string, options?: RequestInit) => Promise<Response>;
}

const ITEMS_PER_PAGE = 50;
const STALE_THRESHOLD_MS = 30_000;

export default function FleetAnomalies({ statusFilter, onFilterChange, authFetch }: Props) {
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshError, setRefreshError] = useState<string | null>(null);
  const [isStale, setIsStale] = useState(false);
  const acknowledgedIds = useRef<Set<string>>(new Set());
  const repeatIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const anomaliesRef = useRef<Anomaly[]>([]);

  useEffect(() => {
    anomaliesRef.current = anomalies;
  }, [anomalies]);

  useEffect(() => {
    const fetchAcknowledged = async () => {
      try {
        const res = await authFetch('/api/acknowledged');
        if (res.ok) {
          const ids: string[] = await res.json();
          ids.forEach(id => acknowledgedIds.current.add(id));
        }
      } catch {
        // ignore
      }
    };
    fetchAcknowledged();
  }, []);

  const loadData = async (active?: { current: boolean }) => {
    try {
      const res = await fetch('/data.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to load data.json');
      const data = (await res.json()) as Anomaly[];
      if (active && !active.current) return;

      const filtered = data.map(v =>
        acknowledgedIds.current.has(v.id) ? { ...v, panic: false } : v
      );

      setAnomalies(filtered);
      setLoading(false);
    } catch (err) {
      if (active && !active.current) return;
      console.error('Error loading data.json:', err);
      setLoading(false);
    }
  };

  // Check metadata for stale data
  useEffect(() => {
    const checkStale = async () => {
      try {
        const res = await fetch('/metadata.json', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data.lastUpdate) {
            const age = Date.now() - new Date(data.lastUpdate).getTime();
            setIsStale(age > STALE_THRESHOLD_MS);
          }
        }
      } catch {
        setIsStale(true);
      }
    };

    checkStale();
    const interval = setInterval(checkStale, 10_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const active = { current: true };
    loadData(active);
    const interval = setInterval(() => loadData(active), 10_000);
    return () => {
      active.current = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const panicVehicles = anomalies.filter(v => v.panic);

    if (panicVehicles.length > 0 && audioEnabled) {
      if (!repeatIntervalRef.current) {
        speakPanicAlert(panicVehicles[0]);
        repeatIntervalRef.current = setInterval(() => {
          const currentPanic = anomaliesRef.current.filter(v => v.panic);
          if (currentPanic.length > 0) {
            speakPanicAlert(currentPanic[0]);
          }
        }, 10000);
      }
    } else {
      if (repeatIntervalRef.current) {
        clearInterval(repeatIntervalRef.current);
        repeatIntervalRef.current = null;
      }
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [anomalies, audioEnabled]);

  useEffect(() => {
    return () => {
      if (repeatIntervalRef.current) clearInterval(repeatIntervalRef.current);
      window.speechSynthesis.cancel();
    };
  }, []);

  const speakPanicAlert = (vehicle: Anomaly) => {
    if (!audioEnabled || !('speechSynthesis' in window)) return;
    setIsSpeaking(true);
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      `Emergency! Vehicle ${vehicle.assetName} requires your immediate attention.`
    );
    utterance.rate = 1.2;
    utterance.pitch = 1.3;
    utterance.volume = 1.0;
    utterance.lang = 'en-US';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const handleAcknowledge = async (anomalyId: string) => {
    try {
      await authFetch('/api/acknowledged', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: anomalyId }),
      });
    } catch {
      // ignore
    }
    acknowledgedIds.current.add(anomalyId);
    setAnomalies(prev => prev.map(anomaly =>
      anomaly.id === anomalyId ? { ...anomaly, panic: false } : anomaly
    ));
  };

  const toggleAudio = () => {
    setAudioEnabled(prev => {
      if (prev) {
        window.speechSynthesis.cancel();
        if (repeatIntervalRef.current) {
          clearInterval(repeatIntervalRef.current);
          repeatIntervalRef.current = null;
        }
      }
      return !prev;
    });
  };

  const sortedAnomalies = [...anomalies].sort((a, b) => {
    if (a.panic && !b.panic) return -1;
    if (!a.panic && b.panic) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredAnomalies = sortedAnomalies.filter(anomaly => {
    const matchesSearch =
      anomaly.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anomaly.assetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      anomaly.transporter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || anomaly.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredAnomalies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageItems = filteredAnomalies.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const handleRefresh = async () => {
    setRefreshing(true);
    setRefreshError(null);
    try {
      const res = await authFetch('/api/refresh', { method: 'POST' });
      if (!res.ok) throw new Error('Refresh failed');
      await res.json();
      await loadData();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Refresh failed';
      setRefreshError(message);
    } finally {
      setRefreshing(false);
    }
  };

  const getStatusColor = (status: Anomaly['status']) => {
    switch (status) {
      case 'Moving':     return { bg: 'var(--cd-status-moving-bg)',     text: 'var(--cd-status-moving-text)',     border: 'var(--cd-status-moving-border)' };
      case 'Idle':       return { bg: 'var(--cd-status-idle-bg)',       text: 'var(--cd-status-idle-text)',       border: 'var(--cd-status-idle-border)' };
      case 'Stationary': return { bg: 'var(--cd-status-stationary-bg)', text: 'var(--cd-status-stationary-text)', border: 'var(--cd-status-stationary-border)' };
      case 'Parked':     return { bg: 'var(--cd-status-parked-bg)',     text: 'var(--cd-status-parked-text)',     border: 'var(--cd-status-parked-border)' };
      case 'Inactive':   return { bg: 'var(--cd-status-inactive-bg)',   text: 'var(--cd-status-inactive-text)',   border: 'var(--cd-status-inactive-border)' };
      case 'Offline':    return { bg: 'var(--cd-status-offline-bg)',    text: 'var(--cd-status-offline-text)',    border: 'var(--cd-status-offline-border)' };
      default:           return { bg: 'var(--cd-status-offline-bg)',    text: 'var(--cd-status-offline-text)',    border: 'var(--cd-status-offline-border)' };
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '20px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--cd-text-muted)' }}>Loading fleet data...</div>
      </div>
    );
  }

  const panicCount = anomalies.filter(v => v.panic).length;

  return (
    <div style={{ fontFamily: 'var(--cd-font-body)' }}>
      <div>

        {/* Reconnection Banner */}
        {isStale && (
          <div style={{ backgroundColor: '#fefce8', border: '1px solid #fde047', borderRadius: '8px', padding: '12px 20px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <WifiOff style={{ width: '18px', height: '18px', color: '#ca8a04', flexShrink: 0 }} />
            <span style={{ fontSize: '14px', color: '#854d0e', fontWeight: '500' }}>
              ⚠️ Connection interrupted — attempting to reconnect...
            </span>
          </div>
        )}

        {panicCount > 0 && (
          <div style={{ backgroundColor: 'var(--cd-danger-bg)', border: '1px solid var(--cd-danger-border)', borderRadius: '8px', padding: '16px 20px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 10px 24px rgba(200, 16, 46, 0.2)', animation: 'flash 1s infinite' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <AlertTriangle style={{ width: '20px', height: '20px', color: 'var(--cd-danger)', animation: 'pulse 2s infinite' }} />
              <div>
                <div style={{ fontWeight: '600', color: 'var(--cd-danger)', fontSize: '16px' }}>
                  🚨 {panicCount} Active Alert{panicCount > 1 ? 's' : ''}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--cd-danger-soft)' }}>
                  Priority vehicles appear at the top • {isSpeaking ? '🔊 Speaking Now' : 'Ready'}
                </div>
              </div>
            </div>
            <button
              onClick={toggleAudio}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: audioEnabled ? 'var(--cd-danger)' : 'var(--cd-surface-2)', color: audioEnabled ? '#fff' : 'var(--cd-text-muted)', borderRadius: '6px', border: '1px solid var(--cd-danger-border)', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}
            >
              <Volume2 style={{ width: '16px', height: '16px' }} />
              {audioEnabled ? 'Mute Alerts' : 'Enable Voice'}
            </button>
          </div>
        )}

        <div style={{ backgroundColor: 'var(--cd-surface)', borderRadius: '14px', border: '1px solid var(--cd-border)', overflow: 'hidden', boxShadow: 'var(--cd-card-shadow)' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid var(--cd-border)' }}>
            <h2 style={{ fontSize: '26px', fontWeight: '600', color: 'var(--cd-text)', marginBottom: '4px', fontFamily: 'var(--cd-font-display)' }}>
              Fleet Status ({anomalies.length} vehicles)
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--cd-text-muted)' }}>
              Chevron Nigeria fleet — Showing {filteredAnomalies.length === anomalies.length ? `${startIndex + 1}–${Math.min(endIndex, filteredAnomalies.length)} of ${filteredAnomalies.length}` : `${filteredAnomalies.length} of ${anomalies.length}`}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--cd-text-muted)', fontSize: '13px', marginTop: '10px', paddingLeft: '4px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: isStale ? '#ca8a04' : 'var(--cd-accent)', boxShadow: isStale ? '0 0 0 4px rgba(202,138,4,0.2)' : '0 0 0 4px var(--cd-accent-soft)' }}></span>
                {isStale ? 'Connection interrupted — reconnecting...' : 'Live telemetry — auto-refresh every 10s'}
              </span>
            </div>
          </div>

          <div style={{ padding: '16px', borderBottom: '1px solid var(--cd-border)', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: 'var(--cd-text-soft)' }} />
              <input
                type="text"
                placeholder="Search by reg no, asset, or transporter..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%', paddingLeft: '40px', paddingRight: '16px', paddingTop: '8px', paddingBottom: '8px', border: '1px solid var(--cd-border)', borderRadius: '10px', fontSize: '14px', outline: 'none', backgroundColor: 'var(--cd-surface-2)', color: 'var(--cd-text)' }}
              />
            </div>

            {statusFilter !== 'All' && (
              <button
                onClick={() => onFilterChange('All')}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '10px', border: '1px solid var(--cd-border)', backgroundColor: 'var(--cd-surface-2)', color: 'var(--cd-text-muted)', cursor: 'pointer', fontSize: '13px' }}
              >
                Clear filter: <strong>{statusFilter}</strong> ✕
              </button>
            )}

            <button
              onClick={handleRefresh}
              disabled={refreshing}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid var(--cd-border)', borderRadius: '10px', backgroundColor: refreshing ? 'var(--cd-surface-2)' : 'var(--cd-surface)', cursor: refreshing ? 'not-allowed' : 'pointer', fontSize: '14px', color: refreshing ? 'var(--cd-text-soft)' : 'var(--cd-text)' }}
            >
              {refreshing ? 'Refreshing...' : 'Refresh Now'}
            </button>
            {refreshError && (
              <div style={{ fontSize: '12px', color: 'var(--cd-danger)' }}>{refreshError}</div>
            )}
          </div>

          <div style={{ padding: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 2.5fr 1.2fr 1.5fr 1.5fr 1.2fr', gap: '16px', padding: '12px 16px', marginBottom: '12px', fontSize: '12px', fontWeight: '500', color: 'var(--cd-text-muted)', textTransform: 'uppercase', borderBottom: '1px solid var(--cd-border)' }}>
              <div>Reg. No.</div>
              <div>Transporter</div>
              <div>Asset Name</div>
              <div>Status</div>
              <div>Location</div>
              <div>Date</div>
              <div>Action</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentPageItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--cd-text-soft)' }}>
                  {searchTerm || statusFilter !== 'All' ? 'No vehicles match your search' : 'No vehicles found in data.json'}
                </div>
              ) : (
                currentPageItems.map((anomaly) => {
                  const colors = getStatusColor(anomaly.status);
                  const isPanic = anomaly.panic;
                  return (
                    <div
                      key={anomaly.id}
                      style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 2.5fr 1.2fr 1.5fr 1.5fr 1.2fr', gap: '16px', alignItems: 'center', padding: '16px', backgroundColor: isPanic ? 'var(--cd-danger-bg)' : 'var(--cd-surface)', borderRadius: '8px', border: `1px solid ${isPanic ? 'var(--cd-danger-border)' : 'var(--cd-border)'}`, boxShadow: isPanic ? '0 6px 16px rgba(200, 16, 46, 0.28)' : 'var(--cd-soft-shadow)', transition: 'all 0.3s ease-in-out', position: 'relative', animation: isPanic ? 'flash 0.8s infinite' : 'none' }}
                    >
                      {isPanic && (
                        <div style={{ position: 'absolute', top: '-8px', right: '12px', backgroundColor: 'var(--cd-danger)', color: '#fff', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(200, 16, 46, 0.4)', animation: 'pulse 1.5s infinite' }}>
                          !
                        </div>
                      )}
                      <div style={{ fontSize: '14px', fontWeight: '600', color: isPanic ? 'var(--cd-danger)' : 'var(--cd-text)' }}>{anomaly.regNo}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '500', color: isPanic ? 'var(--cd-danger)' : 'var(--cd-accent-2)' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isPanic ? 'var(--cd-danger)' : 'var(--cd-accent-2)' }}></span>
                        {anomaly.transporter}
                      </div>
                      <div style={{ fontSize: '14px', color: isPanic ? 'var(--cd-danger)' : 'var(--cd-text)' }}>{anomaly.assetName}</div>
                      <div>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '9999px', fontSize: '12px', fontWeight: '500', backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: colors.text }}></span>
                          {anomaly.status}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', minWidth: 0 }}>
                        <span
                          title={(anomaly as any).position?.address || 'Unknown'}
                          style={{ fontSize: '13px', color: isPanic ? 'var(--cd-danger)' : 'var(--cd-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', maxInlineSize: '160px' }}
                        >
                          {(anomaly as any).position?.address || 'Unknown'}
                        </span>
                        {(anomaly as any).position?.latitude && (
                          <a href={`https://www.google.com/maps?q=${(anomaly as any).position.latitude},${(anomaly as any).position.longitude}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open in Google Maps"
                            style={{ flexShrink: 0, color: '#0d9488', lineHeight: 1, textDecoration: 'none' }}>
                            📍
                          </a>
                        )}
                      </div>
                      <div style={{ fontSize: '14px', color: isPanic ? 'var(--cd-danger)' : 'var(--cd-text-muted)' }}>{anomaly.date}</div>
                      <div>
                        {isPanic ? (
                          <button
                            onClick={() => handleAcknowledge(anomaly.id)}
                            style={{ padding: '8px 16px', backgroundColor: 'var(--cd-danger)', color: '#fff', fontSize: '13px', fontWeight: '600', borderRadius: '6px', border: '1px solid var(--cd-danger-border)', cursor: 'pointer', transition: 'all 0.2s ease' }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cd-danger-strong)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--cd-danger)'}
                          >
                            ACKNOWLEDGE
                          </button>
                        ) : (
                          <span style={{ fontSize: '13px', color: 'var(--cd-text-soft)' }}>—</span>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {totalPages > 1 && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--cd-border)' }}>
                <div style={{ fontSize: '14px', color: 'var(--cd-text-muted)' }}>
                  Page {currentPage} of {totalPages}
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 12px', backgroundColor: currentPage === 1 ? 'var(--cd-surface-2)' : 'var(--cd-surface)', border: '1px solid var(--cd-border)', borderRadius: '6px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontSize: '14px', color: currentPage === 1 ? 'var(--cd-text-soft)' : 'var(--cd-text)' }}>
                    <ChevronLeft style={{ width: '16px', height: '16px' }} />
                    Previous
                  </button>
                  <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '8px 12px', backgroundColor: currentPage === totalPages ? 'var(--cd-surface-2)' : 'var(--cd-surface)', border: '1px solid var(--cd-border)', borderRadius: '6px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontSize: '14px', color: currentPage === totalPages ? 'var(--cd-text-soft)' : 'var(--cd-text)' }}>
                    Next
                    <ChevronRight style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}