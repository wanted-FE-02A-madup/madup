import { IMidea } from '../types/midea';

export const useTableData = (array: IMidea[], channel: string) => {
  const channelList = array.filter((item) => item.channel === channel);
  const costNum = channelList.reduce((prev, cur) => prev + cur.cost, 0);
  const salesNum = channelList.reduce((prev, cur) => prev + (cur.roas * cur.cost) / 100, 0);
  const roasNum = channelList.reduce((prev, cur) => prev + cur.roas, 0);
  const impNum = channelList.reduce((prev, cur) => prev + cur.imp, 0);
  const clickNum = channelList.reduce((prev, cur) => prev + cur.click, 0);
  const ctrNum = channelList.reduce((prev, cur) => prev + cur.ctr, 0);
  const cpcNum = channelList.reduce((prev, cur) => prev + cur.cpc, 0);

  const cost = Math.floor(costNum);
  const sales = Math.floor(salesNum);
  const roas = Math.floor(roasNum);
  const imp = Math.floor(impNum);
  const click = Math.floor(clickNum);
  const ctr = Math.floor(ctrNum);
  const cpc = Math.floor(cpcNum);

  return { cost, sales, roas, imp, click, ctr, cpc };
};
