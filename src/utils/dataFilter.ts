import MIDEA_DATA from '../data/wanted_FE-media-channel-data-set.json';

// 채널
const facebookChannel = MIDEA_DATA.filter((item) => item.channel === 'facebook');
const naverChannel = MIDEA_DATA.filter((item) => item.channel === 'naver');
const googleChannel = MIDEA_DATA.filter((item) => item.channel === 'google');
const kakaoChannel = MIDEA_DATA.filter((item) => item.channel === 'kakao');

// 광고비 cost
const facebookCost = facebookChannel.reduce((prev, cur) => prev + cur.cost, 0);
const googleCost = googleChannel.reduce((prev, cur) => prev + cur.cost, 0);
const naverCost = naverChannel.reduce((prev, cur) => prev + cur.cost, 0);
const kakaoCost = kakaoChannel.reduce((prev, cur) => prev + cur.cost, 0);

// 매출
const facebookSales = facebookChannel.reduce((prev, cur) => {
  return prev + (cur.roas * cur.cost) / 100;
}, 0);
const googleSales = googleChannel.reduce((prev, cur) => {
  return prev + (cur.roas * cur.cost) / 100;
}, 0);
const naverSales = naverChannel.reduce((prev, cur) => {
  return prev + (cur.roas * cur.cost) / 100;
}, 0);
const kakaoSales = kakaoChannel.reduce((prev, cur) => {
  return prev + (cur.roas * cur.cost) / 100;
}, 0);

// ROAS
const facebookROAS = facebookChannel.reduce((prev, cur) => prev + cur.roas, 0);
const googleROAS = googleChannel.reduce((prev, cur) => prev + cur.roas, 0);
const naverROAS = naverChannel.reduce((prev, cur) => prev + cur.roas, 0);
const kakaoROAS = kakaoChannel.reduce((prev, cur) => prev + cur.roas, 0);

// 노출 수
const facebookImp = facebookChannel.reduce((prev, cur) => prev + cur.imp, 0);
const googleImp = googleChannel.reduce((prev, cur) => prev + cur.imp, 0);
const naverImp = naverChannel.reduce((prev, cur) => prev + cur.imp, 0);
const kakaoImp = kakaoChannel.reduce((prev, cur) => prev + cur.imp, 0);

// 클릭 수
const facebookClick = facebookChannel.reduce((prev, cur) => prev + cur.click, 0);
const googleClick = googleChannel.reduce((prev, cur) => prev + cur.click, 0);
const naverClick = naverChannel.reduce((prev, cur) => prev + cur.click, 0);
const kakaoClick = kakaoChannel.reduce((prev, cur) => prev + cur.click, 0);

// 클릭 률 CTR
const facebookCtr = facebookChannel.reduce((prev, cur) => prev + cur.ctr, 0);
const googleCtr = googleChannel.reduce((prev, cur) => prev + cur.ctr, 0);
const naverCtr = naverChannel.reduce((prev, cur) => prev + cur.ctr, 0);
const kakaoCtr = kakaoChannel.reduce((prev, cur) => prev + cur.ctr, 0);

// 클릭당 비율 CPC
const facebookCPC = facebookChannel.reduce((prev, cur) => prev + cur.cpc, 0);
const googleCPC = googleChannel.reduce((prev, cur) => prev + cur.cpc, 0);
const naverCPC = naverChannel.reduce((prev, cur) => prev + cur.cpc, 0);
const kakaoCPC = kakaoChannel.reduce((prev, cur) => prev + cur.cpc, 0);

// 전환수
const facebookTransform = facebookChannel.reduce((prev, cur) => prev + cur.cvr * cur.click, 0);
const googleTransform = googleChannel.reduce((prev, cur) => prev + cur.cvr * cur.click, 0);
const naverTransform = naverChannel.reduce((prev, cur) => prev + cur.cvr * cur.click, 0);
const kakaoTransform = kakaoChannel.reduce((prev, cur) => prev + cur.cvr * cur.click, 0);

export {
  facebookImp,
  googleImp,
  naverImp,
  kakaoImp,
  facebookSales,
  googleSales,
  naverSales,
  kakaoSales,
  facebookCost,
  googleCost,
  naverCost,
  kakaoCost,
  facebookROAS,
  googleROAS,
  naverROAS,
  kakaoROAS,
  facebookClick,
  googleClick,
  naverClick,
  kakaoClick,
  facebookCtr,
  googleCtr,
  naverCtr,
  kakaoCtr,
  facebookCPC,
  googleCPC,
  naverCPC,
  kakaoCPC,
  facebookTransform,
  googleTransform,
  naverTransform,
  kakaoTransform,
};
const sumCost = facebookCost + googleCost + naverCost + kakaoCost;
const sumSales = facebookSales + googleSales + naverSales + kakaoSales;
const sumROAS = facebookROAS + googleROAS + naverROAS + kakaoROAS;
const sumImp = facebookImp + googleImp + naverImp + kakaoImp;
const sumClick = facebookClick + googleClick + naverClick + kakaoClick;
const sumCtr = facebookCtr + googleCtr + naverCtr + kakaoCtr;
const sumCPC = facebookCPC + googleCPC + naverCPC + kakaoCPC;
const sumTransform = facebookTransform + googleTransform + naverTransform + kakaoTransform;

export { sumImp, sumSales, sumCost, sumROAS, sumClick, sumCtr, sumCPC, sumTransform };
