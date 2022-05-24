import { useEffect, useState } from 'react';
import { IAdListItem } from '../types/adList';
import { IMidea } from '../types/midea';

let interval: NodeJS.Timeout;
type jsonFile = IMidea | IAdListItem;

export const useFetchData = <T extends jsonFile>(jsonFile: T[]): T[] => {
  const [data, setData] = useState<T[]>([]);
  useEffect(() => {
    interval = setTimeout(() => {
      setData(jsonFile);
    }, 3000);
    return () => clearTimeout(interval);
  }, [jsonFile]);
  return data;
};
