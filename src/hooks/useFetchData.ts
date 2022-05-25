import { useEffect, useState } from 'react';

let interval: NodeJS.Timeout;

export const useFetchData = <T>(jsonFile: T[]): T[] => {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    interval = setTimeout(() => {
      setData(jsonFile);
    }, 1000);
    return () => clearTimeout(interval);
  }, [jsonFile]);
  return data;
};
