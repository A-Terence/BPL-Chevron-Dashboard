import { useEffect, useState } from 'react';
import { fetchFleetData, type FleetDataState } from './fleet-data';

export const useFleetData = () => {
  const [state, setState] = useState<FleetDataState>({
    anomalies: [],
    metrics: {
      totalAssets: 0,
      movingAssets: 0,
      high: 0,
      medium: 0,
      low: 0,
    },
    loading: true,
  });

  useEffect(() => {
    let active = true;
    fetchFleetData().then((data) => {
      if (active) {
        setState({ ...data, loading: false });
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return state;
};
