import { ITrend } from '../../../types/trend';

type Data = {
  x: string;
  y: number;
};

export const convertData = (data: ITrend[]) => {
  const roas: Data[] = [];
  const cost: Data[] = [];
  const imp: Data[] = [];
  const click: Data[] = [];
  const conversions: Data[] = [];
  const sales: Data[] = [];

  data.forEach((d) => {
    roas.push({
      x: d.date,
      y: d.roas,
    });
    cost.push({
      x: d.date,
      y: d.cost,
    });
    imp.push({
      x: d.date,
      y: d.imp,
    });
    click.push({
      x: d.date,
      y: d.click,
    });
    conversions.push({
      x: d.date,
      y: d.cvr * d.cvr,
    });
    sales.push({
      x: d.date,
      y: (d.roas * d.cost) / 100,
    });
  });

  return {
    roas,
    cost,
    imp,
    click,
    conversions,
    sales,
  };
};
