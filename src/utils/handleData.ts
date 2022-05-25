import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { ITrendData } from '../types/trend';
import _ from 'lodash';

export default function handleData(date1: Date, date2: Date, dataSet: ITrendData) {
  dayjs.extend(isBetween);
  const startDate = dayjs(date1).subtract(1, 'd');
  const endDate = dayjs(date2);
  const period = endDate.diff(startDate, 'd');
  const pastStartDate = startDate.subtract(period, 'd');
  const pastEndDate = startDate.add(1, 'd');

  const DAILY_TREND_DATA = dataSet.report.daily;

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

  const currentDataStructure = _.cloneDeep(dataStructure);
  const prevDataStructure = _.cloneDeep(dataStructure);
  const diff = _.cloneDeep(dataStructure);

  filteredData.forEach((d) => {
    currentDataStructure.find((item) => item.category === '광고비')!.value += d.cost;
    currentDataStructure.find((item) => item.category === '노출 수')!.value += d.imp;
    currentDataStructure.find((item) => item.category === '클릭 수')!.value += d.click;
    currentDataStructure.find((item) => item.category === '전환 수')!.value += d.conv;
    currentDataStructure.find((item) => item.category === '매출')!.value += (d.roas * d.cost) / 100;
  });

  pastData.forEach((d) => {
    prevDataStructure.find((item) => item.category === '광고비')!.value += d.cost;
    prevDataStructure.find((item) => item.category === '노출 수')!.value += d.imp;
    prevDataStructure.find((item) => item.category === '클릭 수')!.value += d.click;
    prevDataStructure.find((item) => item.category === '전환 수')!.value += d.conv;
    prevDataStructure.find((item) => item.category === '매출')!.value += (d.roas * d.cost) / 100;
  });

  for (let i = 1; i < 6; i += 1) {
    diff[i].value = currentDataStructure[i].value - prevDataStructure[i].value;
  }
  if (!prevDataStructure[0].value) {
    diff[0].value = currentDataStructure[0].value;
  }

  currentDataStructure[0].value = (currentDataStructure[5].value / currentDataStructure[1].value) * 100;
  prevDataStructure[0].value = (prevDataStructure[5].value / prevDataStructure[1].value) * 100;
  diff[0].value = prevDataStructure[0].value
    ? ((currentDataStructure[0].value - prevDataStructure[0].value) / prevDataStructure[0].value) * 100
    : 100;

  return { currentDataStructure, prevDataStructure, diff };
}
