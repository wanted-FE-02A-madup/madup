import * as Data from './dataFilter';

export default function barChartData() {
  const naver = [
    {
      category: 1,
      percentage: (Data.naverCost / Data.sumCost) * 100,
      label: Math.floor(Data.naverCost).toLocaleString(),
    },
    {
      category: 2,
      percentage: (Data.naverSales / Data.sumSales) * 100,
      label: Math.floor(Data.naverSales).toLocaleString(),
    },
    { category: 3, percentage: (Data.naverImp / Data.sumImp) * 100, label: Math.floor(Data.naverImp).toLocaleString() },
    {
      category: 4,
      percentage: (Data.naverClick / Data.sumClick) * 100,
      label: Math.floor(Data.naverClick).toLocaleString(),
    },
    {
      category: 5,
      percentage: (Data.naverTransform / Data.sumTransform) * 100,
      label: Math.floor(Data.naverTransform).toLocaleString(),
    },
  ];
  const google = [
    {
      category: 1,
      percentage: (Data.googleCost / Data.sumCost) * 100,
      label: Math.floor(Data.googleCost).toLocaleString(),
    },
    {
      category: 2,
      percentage: (Data.googleSales / Data.sumSales) * 100,
      label: Math.floor(Data.googleSales).toLocaleString(),
    },
    {
      category: 3,
      percentage: (Data.googleImp / Data.sumImp) * 100,
      label: Math.floor(Data.googleImp).toLocaleString(),
    },
    {
      category: 4,
      percentage: (Data.googleClick / Data.sumClick) * 100,
      label: Math.floor(Data.googleClick).toLocaleString(),
    },
    {
      category: 5,
      percentage: (Data.googleTransform / Data.sumTransform) * 100,
      label: Math.floor(Data.googleTransform).toLocaleString(),
    },
  ];
  const kakao = [
    {
      category: 1,
      percentage: (Data.kakaoCost / Data.sumCost) * 100,
      label: Math.floor(Data.kakaoCost).toLocaleString(),
    },
    {
      category: 2,
      percentage: (Data.kakaoSales / Data.sumSales) * 100,
      label: Math.floor(Data.kakaoSales).toLocaleString(),
    },
    { category: 3, percentage: (Data.kakaoImp / Data.sumImp) * 100, label: Math.floor(Data.kakaoImp).toLocaleString() },
    {
      category: 4,
      percentage: (Data.kakaoClick / Data.sumClick) * 100,
      label: Math.floor(Data.kakaoClick).toLocaleString(),
    },
    {
      category: 5,
      percentage: (Data.kakaoTransform / Data.sumTransform) * 100,
      label: Math.floor(Data.kakaoTransform).toLocaleString(),
    },
  ];
  const facebook = [
    {
      category: 1,
      percentage: (Data.facebookCost / Data.sumCost) * 100,
      label: Math.floor(Data.facebookCost).toLocaleString(),
    },
    {
      category: 2,
      percentage: (Data.facebookSales / Data.sumSales) * 100,
      label: Math.floor(Data.facebookSales).toLocaleString(),
    },
    {
      category: 3,
      percentage: (Data.facebookImp / Data.sumImp) * 100,
      label: Math.floor(Data.facebookImp).toLocaleString(),
    },
    {
      category: 4,
      percentage: (Data.facebookClick / Data.sumClick) * 100,
      label: Math.floor(Data.facebookClick).toLocaleString(),
    },
    {
      category: 5,
      percentage: (Data.facebookTransform / Data.sumTransform) * 100,
      label: Math.floor(Data.facebookTransform).toLocaleString(),
    },
  ];
  return [google, naver, kakao, facebook];
}
