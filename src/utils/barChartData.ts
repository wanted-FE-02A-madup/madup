import * as Data from './dataFilter';

export default function barChartData() {
  const naver = [
    { category: 1, percentage: (Data.naverCost / Data.sumCost) * 100, label: Math.floor(Data.naverCost) },
    { category: 2, percentage: (Data.naverSales / Data.sumSales) * 100, label: Math.floor(Data.naverSales) },
    { category: 3, percentage: (Data.naverImp / Data.sumImp) * 100, label: Math.floor(Data.naverImp) },
    { category: 4, percentage: (Data.naverClick / Data.sumClick) * 100, label: Math.floor(Data.naverClick) },
    {
      category: 5,
      percentage: (Data.naverTransform / Data.sumTransform) * 100,
      label: Math.floor(Data.naverTransform),
    },
  ];
  const google = [
    { category: 1, percentage: (Data.googleCost / Data.sumCost) * 100, label: Math.floor(Data.googleCost) },
    { category: 2, percentage: (Data.googleSales / Data.sumSales) * 100, label: Math.floor(Data.googleSales) },
    { category: 3, percentage: (Data.googleImp / Data.sumImp) * 100, label: Math.floor(Data.googleImp) },
    { category: 4, percentage: (Data.googleClick / Data.sumClick) * 100, label: Math.floor(Data.googleClick) },
    {
      category: 5,
      percentage: (Data.googleTransform / Data.sumTransform) * 100,
      label: Math.floor(Data.googleTransform),
    },
  ];
  const kakao = [
    { category: 1, percentage: (Data.kakaoCost / Data.sumCost) * 100, label: Math.floor(Data.kakaoCost) },
    { category: 2, percentage: (Data.kakaoSales / Data.sumSales) * 100, label: Math.floor(Data.kakaoSales) },
    { category: 3, percentage: (Data.kakaoImp / Data.sumImp) * 100, label: Math.floor(Data.kakaoImp) },
    { category: 4, percentage: (Data.kakaoClick / Data.sumClick) * 100, label: Math.floor(Data.kakaoClick) },
    {
      category: 5,
      percentage: (Data.kakaoTransform / Data.sumTransform) * 100,
      label: Math.floor(Data.kakaoTransform),
    },
  ];
  const facebook = [
    { category: 1, percentage: (Data.facebookCost / Data.sumCost) * 100, label: Math.floor(Data.facebookCost) },
    { category: 2, percentage: (Data.facebookSales / Data.sumSales) * 100, label: Math.floor(Data.facebookSales) },
    { category: 3, percentage: (Data.facebookImp / Data.sumImp) * 100, label: Math.floor(Data.facebookImp) },
    { category: 4, percentage: (Data.facebookClick / Data.sumClick) * 100, label: Math.floor(Data.facebookClick) },
    {
      category: 5,
      percentage: (Data.facebookTransform / Data.sumTransform) * 100,
      label: Math.floor(Data.facebookTransform),
    },
  ];
  return [google, naver, kakao, facebook];
}
