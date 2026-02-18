import { SignedIn, SignedOut, SignIn, useClerk } from "@clerk/clerk-react";
import { useEffect, useState } from 'react';
import { Bell, Settings, Moon, Sun, Power } from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import AnomaliesTable from './components/AnomaliesTable';

function DashboardContent() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { signOut } = useClerk();

  useEffect(() => {
    const saved = window.localStorage.getItem('cd-theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = saved ?? (prefersDark ? 'dark' : 'light');
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('cd-theme', theme);
  }, [theme]);

  return (
    <div className="fleet-page min-h-screen">
      <div className="fleet-shell p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="h-6 w-6 flex-shrink-0 flex items-center justify-center">
                <img src="/cnl-logo.png" alt="CNL Logo" />
              </div>
              <div>
                <h1 className="text-gray-900 mb-1" style={{ color: 'var(--cd-text)' }}>CNL Dashboard</h1>
                <p className="text-gray-600" style={{ color: 'var(--cd-text-muted)' }}>
                  Track and manage your team, fleet and operations.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button
                className="cd-iconbtn p-2 rounded-lg transition-colors"
                onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-gray-600" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </button>

              <button className="cd-iconbtn p-2 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>

              <button className="cd-iconbtn p-2 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>

              {/* Logout button with text */}
              <button
                className="cd-iconbtn p-2 rounded-lg transition-colors"
                onClick={() => signOut()}
                aria-label="Log out"
              >
                <Power className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="metric-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              icon="alert-circle"
              title="Anomalies Detected"
              value="2"
              badges={[
                { label: '2 High', color: 'red' },
                { label: '1 Medium', color: 'orange' },
                { label: '1 Low', color: 'gray' },
              ]}
            />
            <MetricCard
              icon="activity"
              title="Assets Online Tracking"
              value="263"
              change="+6"
              changeLabel=" Yesterday"
            />
            <MetricCard
              icon="alert-triangle"
              title="Assets Moving"
              value="5"
              change="+2"
              changeLabel=" Yesterday"
            />
          </div>

          {/* Anomalies Table */}
          <AnomaliesTable />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <SignedOut>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <SignIn routing="hash" />
        </div>
      </SignedOut>

      <SignedIn>
        <DashboardContent />
      </SignedIn>
    </>
  );
}
