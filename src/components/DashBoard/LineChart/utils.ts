import { ITrend } from '../types/trend';

type Data = {
  x: Date;
  y: number;
};

export const convertData = (data: ITrend[]) => {
  const imp: Data[] = [];
  const click: Data[] = [];
  const cost: Data[] = [];
  const conv: Data[] = [];
  const convValue: Data[] = [];
  const ctr: Data[] = [];
  const cvr: Data[] = [];
  const cpc: Data[] = [];
  const cpa: Data[] = [];
  const roas: Data[] = [];
  const date: Data[] = [];

  data.forEach((d) => {
    confirmed.push({
      x: parseDate(d.date),
      y: d.confirmed,
    })
    critical.push({
      x: parseDate(d.date),
      y: d.critical,
    })
    death.push({
      x: parseDate(d.date),
      y: d.death,
    })
    negative.push({
      x: parseDate(d.date),
      y: d.negative,
    })
    released.push({
      x: parseDate(d.date),
      y: d.released,
    })
    tested.push({
      x: parseDate(d.date),
      y: d.tested,
    })
  })

  return {
    confirmed,
    critical,
    death,
    negative,
    released,
    tested,
  }
}
