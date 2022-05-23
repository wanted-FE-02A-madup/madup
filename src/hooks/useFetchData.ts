import { useEffect, useState } from 'react';
import { IMidea } from '../types/midea';
import { IAdListItem } from '../types/type';

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
