import { AlertCircle, Activity, AlertTriangle, ChevronRight } from 'lucide-react';

interface Badge {
  label: string;
  color: 'red' | 'orange' | 'gray';
}

interface MetricCardProps {
  icon: 'alert-circle' | 'activity' | 'alert-triangle';
  title: string;
  value: string;
  badges?: Badge[];
  change?: string;
  changeLabel?: string;
}

const iconMap = {
  'alert-circle': AlertCircle,
  'activity': Activity,
  'alert-triangle': AlertTriangle
};

export function MetricCard({ icon, title, value, badges, change, changeLabel }: MetricCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <Icon className="w-4 h-4" />
          <span>{title}</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="mb-3">
        <div className="text-gray-900">{value}</div>
      </div>

      {badges && (
        <div className="flex items-center gap-2 flex-wrap">
          {badges.map((badge, index) => (
            <span
              key={index}
              className={`px-2 py-1 rounded text-sm ${
                badge.color === 'red'
                  ? 'bg-red-50 text-red-600'
                  : badge.color === 'orange'
                  ? 'bg-orange-50 text-orange-600'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {badge.label}
            </span>
          ))}
        </div>
      )}

      {change && (
        <div className="text-sm text-gray-600">
          <span className="text-green-600">{change}</span> {changeLabel}
        </div>
      )}
    </div>
  );
}
