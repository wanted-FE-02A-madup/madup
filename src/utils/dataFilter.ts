import MIDEA_DATA from '../data/wanted_FE-media-channel-data-set.json';

// 채널
const facebookChannel = MIDEA_DATA.filter((item) => item.channel === 'facebook');
const naverChannel = MIDEA_DATA.filter((item) => item.channel === 'naver');
const googleChannel = MIDEA_DATA.filter((item) => item.channel === 'google');

// 광고비 cost
const facebookCost = facebookChannel.reduce((prev, cur) => prev + cur.cost, 0);
const googleCost = googleChannel.reduce((prev, cur) => prev + cur.cost, 0);
const naverCost = naverChannel.reduce((prev, cur) => prev + cur.cost, 0);

// 매출
const facebookSales = facebookChannel.reduce((prev, cur) => prev + (cur.roas * cur.cost) / 100, 0);
const googleSales = googleChannel.reduce((prev, cur) => prev + (cur.roas * cur.cost) / 100, 0);
const naverSales = naverChannel.reduce((prev, cur) => prev + (cur.roas * cur.cost) / 100, 0);

// ROAS
const facebookROAS = facebookChannel.reduce((prev, cur) => prev + cur.roas, 0);
const googleROAS = googleChannel.reduce((prev, cur) => prev + cur.roas, 0);
const naverROAS = naverChannel.reduce((prev, cur) => prev + cur.roas, 0);

// 노출 수
const facebookImp = facebookChannel.reduce((prev, cur) => prev + cur.imp, 0);
const googleImp = googleChannel.reduce((prev, cur) => prev + cur.imp, 0);
const naverImp = naverChannel.reduce((prev, cur) => prev + cur.imp, 0);

// 클릭 수
const facebookClick = facebookChannel.reduce((prev, cur) => prev + cur.click, 0);
const googleClick = googleChannel.reduce((prev, cur) => prev + cur.click, 0);
const naverClick = naverChannel.reduce((prev, cur) => prev + cur.click, 0);

// 클릭 률 CTR
const facebookCtr = facebookChannel.reduce((prev, cur) => prev + cur.ctr, 0);
const googleCtr = googleChannel.reduce((prev, cur) => prev + cur.ctr, 0);
const naverCtr = naverChannel.reduce((prev, cur) => prev + cur.ctr, 0);

// 클릭당 비율 CPC
const facebookCPC = facebookChannel.reduce((prev, cur) => prev + cur.cpc, 0);
const googleCPC = googleChannel.reduce((prev, cur) => prev + cur.cpc, 0);
const naverCPC = naverChannel.reduce((prev, cur) => prev + cur.cpc, 0);

export {
  facebookImp,
  googleImp,
  naverImp,
  facebookSales,
  googleSales,
  naverSales,
  facebookCost,
  googleCost,
  naverCost,
  facebookROAS,
  googleROAS,
  naverROAS,
  facebookClick,
  googleClick,
  naverClick,
  facebookCtr,
  googleCtr,
  naverCtr,
  facebookCPC,
  googleCPC,
  naverCPC,
};

const sumCost = facebookCost + googleCost + naverCost;
const sumSales = facebookSales + googleSales + naverSales;
const sumROAS = facebookROAS + googleROAS + naverROAS;
const sumImp = facebookImp + googleImp + naverImp;
const sumClick = facebookClick + googleClick + naverClick;
const sumCtr = facebookCtr + googleCtr + naverCtr;
const sumCPC = facebookCPC + googleCPC + naverCPC;

export { sumImp, sumSales, sumCost, sumROAS, sumClick, sumCtr, sumCPC };
