import { useState, useEffect, useRef } from 'react';
import { Search, SlidersHorizontal, AlertTriangle, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';

interface Anomaly {
  id: string;
  regNo: string;
  transporter: string;
  assetName: string;
  status: 'Parked' | 'Idle' | 'Moving';
  date: string;
  panic: boolean;
}

const ITEMS_PER_PAGE = 50;

export default function FleetAnomalies() {
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [refreshError, setRefreshError] = useState<string | null>(null);
  const speechQueueRef = useRef<Anomaly[]>([]);

  const loadData = async (active?: { current: boolean }) => {
    try {
      const res = await fetch('/data.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to load data.json');
      const data = (await res.json()) as Anomaly[];
      if (active && !active.current) return;
      setAnomalies(data);
      setLoading(false);
    } catch (err) {
      if (active && !active.current) return;
      console.error('Error loading data.json:', err);
      setLoading(false);
    }
  };

  // Load JSON data from public/data.json (poll every 10s)
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
    if (panicVehicles.length > 0 && audioEnabled && !isSpeaking) {
      const nextPanic = panicVehicles[0];
      speakPanicAlert(nextPanic);
    }
  }, [anomalies, audioEnabled, isSpeaking]);

  const speakPanicAlert = (vehicle: Anomaly) => {
    if (!audioEnabled || !('speechSynthesis' in window)) return;

    setIsSpeaking(true);
    speechQueueRef.current.push(vehicle);

    const speakNext = () => {
      const nextVehicle = speechQueueRef.current.shift();
      if (!nextVehicle) {
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(
        `Emergency! Vehicle ${nextVehicle.assetName} requires your immediate attention.`
      );

      utterance.rate = 1.2;
      utterance.pitch = 1.3;
      utterance.volume = 1.0;
      utterance.lang = 'en-US';

      utterance.onend = () => {
        setTimeout(speakNext, 1000);
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        speechQueueRef.current = [];
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    };

    speakNext();
  };

  const sortedAnomalies = [...anomalies].sort((a, b) => {
    if (a.panic && !b.panic) return -1;
    if (!a.panic && b.panic) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredAnomalies = sortedAnomalies.filter(anomaly =>
    anomaly.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    anomaly.assetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    anomaly.transporter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredAnomalies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageItems = filteredAnomalies.slice(startIndex, endIndex);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handleAcknowledge = (anomalyId: string) => {
    setAnomalies(prev => prev.map(anomaly => 
      anomaly.id === anomalyId 
        ? { ...anomaly, panic: false }
        : anomaly
    ));
  };

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    if (!audioEnabled) {
      window.speechSynthesis.resume();
    } else {
      window.speechSynthesis.pause();
    }
  };



  const handleRefresh = async () => {
    setRefreshing(true);
    setRefreshError(null);
    try {
      const res = await fetch('/api/refresh', { method: 'POST' });
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
      case 'Parked': return { bg: 'var(--cd-status-parked-bg)', text: 'var(--cd-status-parked-text)', border: 'var(--cd-status-parked-border)' };
      case 'Idle': return { bg: 'var(--cd-status-idle-bg)', text: 'var(--cd-status-idle-text)', border: 'var(--cd-status-idle-border)' };
      case 'Moving': return { bg: 'var(--cd-status-moving-bg)', text: 'var(--cd-status-moving-text)', border: 'var(--cd-status-moving-border)' };
      default: return { bg: 'var(--cd-status-parked-bg)', text: 'var(--cd-status-parked-text)', border: 'var(--cd-status-parked-border)' };
    }
  };

  if (loading) {
    return (
      <div className="fleet-dashboard" style={{ padding: '20px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', color: 'var(--cd-text-muted)' }}>Loading fleet anomalies...</div>
      </div>
    );
  }

  const panicCount = filteredAnomalies.filter(v => v.panic).length;

  return (
    <div className="fleet-dashboard" style={{ padding: '20px', minHeight: '100vh', fontFamily: 'var(--cd-font-body)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '22px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontFamily: 'var(--cd-font-display)', fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--cd-text)' }}>
              Chevron Fleet Pulse
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--cd-text-muted)', fontSize: '13px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: 'var(--cd-accent)', boxShadow: '0 0 0 4px var(--cd-accent-soft)' }}></span>
                Live telemetry - auto-refresh every 10s
              </span>
            </div>
          </div>
        </div>
        {panicCount > 0 && (
          <div style={{
            backgroundColor: 'var(--cd-danger-bg)',
            border: '1px solid var(--cd-danger-border)',
            borderRadius: '8px',
            padding: '16px 20px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 10px 24px rgba(200, 16, 46, 0.2)',
            animation: 'flash 1s infinite'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <AlertTriangle 
                style={{ 
                  width: '20px', 
                  height: '20px', 
                  color: 'var(--cd-danger)',
                  animation: 'pulse 2s infinite'
                }} 
              />
              <div>
                <div style={{ fontWeight: '600', color: 'var(--cd-danger)', fontSize: '16px' }}>
                  🚨 {panicCount} Active Panic Alert{panicCount > 1 ? 's' : ''}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--cd-danger-soft)' }}>
                  Priority vehicles appear at the top • {isSpeaking ? '🔊 Speaking Now' : 'Ready'}
                </div>
              </div>
            </div>
            <button
              onClick={toggleAudio}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                backgroundColor: audioEnabled ? 'var(--cd-danger)' : 'var(--cd-surface-2)',
                color: audioEnabled ? '#fff' : 'var(--cd-text-muted)',
                borderRadius: '6px',
                border: '1px solid var(--cd-danger-border)',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              <Volume2 style={{ width: '16px', height: '16px' }} />
              {audioEnabled ? 'Mute Alerts' : 'Enable Voice'}
            </button>
          </div>
        )}

        <div style={{ 
          backgroundColor: 'var(--cd-surface)', 
          borderRadius: '14px', 
          border: '1px solid var(--cd-border)', 
          overflow: 'hidden', 
          boxShadow: 'var(--cd-card-shadow)' 
        }}>
          <div style={{ padding: '24px', borderBottom: '1px solid var(--cd-border)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: 'var(--cd-text)', marginBottom: '4px', fontFamily: 'var(--cd-font-display)' }}>
              Fleet Status ({filteredAnomalies.length} vehicles)
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--cd-text-muted)' }}>
              Chevron Nigeria fleet - Showing {startIndex + 1}-{Math.min(endIndex, filteredAnomalies.length)} of {filteredAnomalies.length}
            </p>
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
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid var(--cd-border)', borderRadius: '10px', backgroundColor: 'var(--cd-surface)', cursor: 'pointer', fontSize: '14px', color: 'var(--cd-text)' }}>
              <SlidersHorizontal style={{ width: '16px', height: '16px', color: 'var(--cd-text-muted)' }} />
              <span style={{ color: 'var(--cd-text)' }}>Filters</span>
            </button>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                border: '1px solid var(--cd-border)',
                borderRadius: '10px',
                backgroundColor: refreshing ? 'var(--cd-surface-2)' : 'var(--cd-surface)',
                cursor: refreshing ? 'not-allowed' : 'pointer',
                fontSize: '14px',
                color: refreshing ? 'var(--cd-text-soft)' : 'var(--cd-text)'
              }}
            >
              {refreshing ? 'Refreshing...' : 'Refresh Now'}
            </button>
            {refreshError && (
              <div style={{ fontSize: '12px', color: 'var(--cd-danger)' }}>{refreshError}</div>
            )}
          </div>

          <div style={{ padding: '24px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1.5fr 2.5fr 1.2fr 1.5fr 1fr', 
              gap: '16px', 
              padding: '12px 16px', 
              marginBottom: '12px', 
              fontSize: '12px', 
              fontWeight: '500', 
              color: 'var(--cd-text-muted)', 
              textTransform: 'uppercase',
              borderBottom: '1px solid var(--cd-border)'
            }}>
              <div>Reg. No.</div>
              <div>Transporter</div>
              <div>Asset Name</div>
              <div>Status</div>
              <div>Date</div>
              <div>Action</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {currentPageItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--cd-text-soft)' }}>
                  {searchTerm ? 'No vehicles match your search' : 'No vehicles found in data.json'}
                </div>
              ) : (
                currentPageItems.map((anomaly) => {
                  const colors = getStatusColor(anomaly.status);
                  const isPanic = anomaly.panic;
                  
                  return (
                    <div
                      key={anomaly.id}
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1.5fr 2.5fr 1.2fr 1.5fr 1fr', 
                        gap: '16px', 
                        alignItems: 'center', 
                        padding: '16px', 
                        backgroundColor: isPanic ? 'var(--cd-danger-bg)' : 'var(--cd-surface)', 
                        borderRadius: '8px', 
                        border: `1px solid ${isPanic ? 'var(--cd-danger-border)' : 'var(--cd-border)'}`, 
                        boxShadow: isPanic ? '0 6px 16px rgba(200, 16, 46, 0.28)' : 'var(--cd-soft-shadow)',
                        transition: 'all 0.3s ease-in-out',
                        position: 'relative',
                        animation: isPanic ? 'flash 0.8s infinite' : 'none'
                      }}
                    >
                      {isPanic && (
                        <div style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '12px',
                          backgroundColor: 'var(--cd-danger)',
                          color: '#fff',
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          boxShadow: '0 2px 8px rgba(200, 16, 46, 0.4)',
                          animation: 'pulse 1.5s infinite'
                        }}>
                          !
                        </div>
                      )}
                      
                      <div style={{ fontSize: '14px', fontWeight: '600', color: isPanic ? 'var(--cd-danger)' : 'var(--cd-text)' }}>
                        {anomaly.regNo}
                      </div>
                      
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        fontSize: '14px', 
                        fontWeight: '500',
                        color: isPanic ? 'var(--cd-danger)' : 'var(--cd-accent-2)'
                      }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isPanic ? 'var(--cd-danger)' : 'var(--cd-accent-2)' }}></span>
                        {anomaly.transporter}
                      </div>
                      
                      <div style={{ fontSize: '14px', color: isPanic ? 'var(--cd-danger)' : 'var(--cd-text)' }}>{anomaly.assetName}</div>
                      
                      <div>
                        <span style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '6px', 
                          padding: '4px 12px', 
                          borderRadius: '9999px', 
                          fontSize: '12px', 
                          fontWeight: '500',
                          backgroundColor: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`
                        }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: colors.text }}></span>
                          {anomaly.status}
                        </span>
                      </div>
                      
                      <div style={{ fontSize: '14px', color: isPanic ? 'var(--cd-danger)' : 'var(--cd-text-muted)' }}>{anomaly.date}</div>
                      
                      <div>
                        {isPanic ? (
                          <button 
                            onClick={() => handleAcknowledge(anomaly.id)}
                            style={{ 
                              padding: '8px 16px', 
                              backgroundColor: 'var(--cd-danger)', 
                              color: '#fff', 
                              fontSize: '13px', 
                              fontWeight: '600', 
                              borderRadius: '6px', 
                              border: '1px solid var(--cd-danger-border)',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                marginTop: '24px',
                paddingTop: '24px',
                borderTop: '1px solid var(--cd-border)'
              }}>
                <div style={{ fontSize: '14px', color: 'var(--cd-text-muted)' }}>
                  Page {currentPage} of {totalPages}
                </div>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 12px',
                      backgroundColor: currentPage === 1 ? 'var(--cd-surface-2)' : 'var(--cd-surface)',
                      border: '1px solid var(--cd-border)',
                      borderRadius: '6px',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                      fontSize: '14px',
                      color: currentPage === 1 ? 'var(--cd-text-soft)' : 'var(--cd-text)'
                    }}
                  >
                    <ChevronLeft style={{ width: '16px', height: '16px' }} />
                    Previous
                  </button>
                  
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 12px',
                      backgroundColor: currentPage === totalPages ? 'var(--cd-surface-2)' : 'var(--cd-surface)',
                      border: '1px solid var(--cd-border)',
                      borderRadius: '6px',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                      fontSize: '14px',
                      color: currentPage === totalPages ? 'var(--cd-text-soft)' : 'var(--cd-text)'
                    }}
                  >
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
