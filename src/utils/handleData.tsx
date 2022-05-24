import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import TREND_DATA from '../data/wanted_FE_trend-data-set.json';

export default function handleData(date1: string, date2: string) {
  dayjs.extend(isBetween);
  const startDate = dayjs(date1).subtract(1, 'd');
  const endDate = dayjs(date2).add(1, 'd');
  const period = endDate.diff(startDate, 'd') - 1;
  const pastStartDate = startDate.subtract(period, 'd');
  const pastEndDate = startDate.add(1, 'd');

  const DAILY_TREND_DATA = TREND_DATA.report.daily;

  const filteredData = DAILY_TREND_DATA.filter((data) => dayjs(data.date).isBetween(startDate, endDate));
  const pastData = DAILY_TREND_DATA.filter((data) => dayjs(data.date).isBetween(pastStartDate, pastEndDate));

  const dataStructure = [
    { value: 0, category: 'ROAS' },
    { value: 0, category: '광고비' },
    { value: 0, category: '노출 수' },
    { value: 0, category: '클릭 수' },
    { value: 0, category: '전환 수' },
    { value: 0, category: '매출' },
  ];

  const prevDataStructure = [
    { value: 0, category: 'ROAS' },
    { value: 0, category: '광고비' },
    { value: 0, category: '노출 수' },
    { value: 0, category: '클릭 수' },
    { value: 0, category: '전환 수' },
    { value: 0, category: '매출' },
  ];

  const diff = [
    { value: 0, category: 'ROAS' },
    { value: 0, category: '광고비' },
    { value: 0, category: '노출 수' },
    { value: 0, category: '클릭 수' },
    { value: 0, category: '전환 수' },
    { value: 0, category: '매출' },
  ];

  filteredData.forEach((d) => {
    dataStructure.find((item) => item.category === '광고비')!.value += d.cost;
    dataStructure.find((item) => item.category === '노출 수')!.value += d.imp;
    dataStructure.find((item) => item.category === '클릭 수')!.value += d.click;
    dataStructure.find((item) => item.category === '전환 수')!.value += d.conv;
    dataStructure.find((item) => item.category === '매출')!.value += (d.roas * d.cost) / 100;
  });
  dataStructure[0].value = (dataStructure[5].value / dataStructure[1].value) * 100;

  pastData.forEach((d) => {
    prevDataStructure.find((item) => item.category === '광고비')!.value += d.cost;
    prevDataStructure.find((item) => item.category === '노출 수')!.value += d.imp;
    prevDataStructure.find((item) => item.category === '클릭 수')!.value += d.click;
    prevDataStructure.find((item) => item.category === '전환 수')!.value += d.conv;
    prevDataStructure.find((item) => item.category === '매출')!.value += (d.roas * d.cost) / 100;
  });
  prevDataStructure[0].value = (prevDataStructure[5].value / prevDataStructure[1].value) * 100;

  diff[0].value = dataStructure[0].value - prevDataStructure[0].value;
  diff[1].value = dataStructure[1].value - prevDataStructure[1].value;
  diff[2].value = dataStructure[2].value - prevDataStructure[2].value;
  diff[3].value = dataStructure[3].value - prevDataStructure[3].value;
  diff[4].value = dataStructure[4].value - prevDataStructure[4].value;
  diff[5].value = dataStructure[5].value - prevDataStructure[5].value;

  return { dataStructure, prevDataStructure, diff };
}
