import { ITrend } from '../../../types/trend';

type Data = {
  x: string;
  y: number;
};

// const parseDate = (rawStr: number) => {
//   const str = rawStr.toString();
//   const y = Number(str.substring(0, 4));
//   const m = Number(str.substring(4, 6)) - 1;
//   const d = Number(str.substring(6, 8));
//   return new Date(y, m, d);
// };

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

  console.log(data);

  data.forEach((d) => {
    imp.push({
      x: d.date,
      y: d.imp,
    });
    click.push({
      x: d.date,
      y: d.click,
    });
    cost.push({
      x: d.date,
      y: d.cost,
    });
    conv.push({
      x: d.date,
      y: d.conv,
    });
    convValue.push({
      x: d.date,
      y: d.convValue,
    });
    ctr.push({
      x: d.date,
      y: d.ctr,
    });
    cvr.push({
      x: d.date,
      y: d.cvr,
    });
    cpc.push({
      x: d.date,
      y: d.cpc,
    });
    cpa.push({
      x: d.date,
      y: d.cpa,
    });
    roas.push({
      x: d.date,
      y: d.roas,
    });
  });

  return {
    imp,
    click,
    cost,
    conv,
    convValue,
    ctr,
    cvr,
    cpc,
    cpa,
    roas,
  };
};
