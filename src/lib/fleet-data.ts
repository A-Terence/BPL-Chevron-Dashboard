export type Severity = 'HIGH' | 'MEDIUM' | 'LOW';

export interface FleetAnomaly {
  id: string;
  regNo: string;
  transporter: string;
  assetName: string;
  status: 'Parked' | 'Idle' | 'Moving';
  lastEventTime: string | null;
  panic: boolean;
  severity: Severity;
  reason: string;
  eventTypeIds?: number[];
}

export interface FleetDataResponse {
  generatedAt: string;
  items: FleetAnomaly[];
}

export interface FleetMetrics {
  generatedAt?: string;
  totalAssets: number;
  movingAssets: number;
  high: number;
  medium: number;
  low: number;
}

export interface FleetDataState {
  anomalies: FleetAnomaly[];
  metrics: FleetMetrics;
  loading: boolean;
  error?: string;
}

const defaultMetrics: FleetMetrics = {
  totalAssets: 0,
  movingAssets: 0,
  high: 0,
  medium: 0,
  low: 0,
};

const normalizeAnomaly = (item: Partial<FleetAnomaly> & { id?: string }) => {
  const panic = item.panic ?? false;
  const severity = item.severity ?? (panic ? 'HIGH' : 'LOW');
  const reason =
    item.reason ?? (panic ? 'PANIC (Armed)' : item.lastEventTime ? 'Event Activity' : 'No recent events');
  return {
    id: item.id ?? 'unknown',
    regNo: item.regNo ?? 'N/A',
    transporter: item.transporter ?? 'Chevron Nigeria',
    assetName: item.assetName ?? 'Unknown Vehicle',
    status: item.status ?? 'Idle',
    lastEventTime: item.lastEventTime ?? (item as { date?: string }).date ?? null,
    panic,
    severity,
    reason,
    eventTypeIds: item.eventTypeIds ?? [],
  } as FleetAnomaly;
};

const computeMetrics = (items: FleetAnomaly[]): FleetMetrics => {
  return items.reduce(
    (acc, anomaly) => {
      acc.totalAssets += 1;
      if (anomaly.status === 'Moving') acc.movingAssets += 1;
      if (anomaly.severity === 'HIGH') acc.high += 1;
      if (anomaly.severity === 'MEDIUM') acc.medium += 1;
      if (anomaly.severity === 'LOW') acc.low += 1;
      return acc;
    },
    { ...defaultMetrics }
  );
};

export const fetchFleetData = async (): Promise<FleetDataState> => {
  try {
    const response = await fetch('/data.json');
    if (!response.ok) throw new Error('Failed to load data.json');
    const payload = (await response.json()) as FleetDataResponse | FleetAnomaly[];
    const items = Array.isArray(payload)
      ? (payload as Partial<FleetAnomaly>[])
      : ((payload as FleetDataResponse).items as Partial<FleetAnomaly>[]) ?? [];
    const normalized = items.map((item) => normalizeAnomaly(item));
    return {
      anomalies: normalized,
      metrics: computeMetrics(normalized),
      loading: false,
    };
  } catch (error) {
    return {
      anomalies: [],
      metrics: { ...defaultMetrics },
      loading: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};
