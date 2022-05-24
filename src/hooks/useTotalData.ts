interface IParams {
  cost: number;
  sales: number;
  roas: number;
  imp: number;
  click: number;
  ctr: number;
  cpc: number;
}

export const useTotalData = (arr: IParams[]) => {
  const totalClickData = arr.reduce((prev, curr) => prev + curr.click, 0);
  const totalCostData = arr.reduce((prev, curr) => prev + curr.cost, 0);
  const totalSalesData = arr.reduce((prev, curr) => prev + curr.sales, 0);
  const totalRoasData = arr.reduce((prev, curr) => prev + curr.roas, 0);
  const totalImpData = arr.reduce((prev, curr) => prev + curr.imp, 0);
  const totalCtrData = arr.reduce((prev, curr) => prev + curr.ctr, 0);
  const totalCpcData = arr.reduce((prev, curr) => prev + curr.cpc, 0);

  const totalClick = totalClickData.toLocaleString();
  const totalCost = totalCostData.toLocaleString();
  const totalSales = totalSalesData.toLocaleString();
  const totalRoas = totalRoasData.toLocaleString();
  const totalImp = totalImpData.toLocaleString();
  const totalCtr = totalCtrData.toLocaleString();
  const totalCpc = totalCpcData.toLocaleString();

  return { totalClick, totalCost, totalSales, totalRoas, totalImp, totalCtr, totalCpc };
};
