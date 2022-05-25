import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import TREND_DATA from '../data/wanted_FE_trend-data-set.json';
import { ITrend } from '../types/trend';

export default function trandDataFilter(date1: string, date2: string) {
  dayjs.extend(isBetween);
  const startDate = dayjs(date1).subtract(1, 'd');
  const endDate = dayjs(date2).add(1, 'd');
  // const period = endDate.diff(startDate, 'd') - 1;
  // const pastStartDate = startDate.subtract(period, 'd');
  // const pastEndDate = startDate.add(1, 'd');

  const DAILY_TREND_DATA = TREND_DATA.report.daily;

  const filteredData = DAILY_TREND_DATA.filter((data) => dayjs(data.date).isBetween(startDate, endDate));
  // const pastData = DAILY_TREND_DATA.filter((data) => dayjs(data.date).isBetween(pastStartDate, pastEndDate));

  // console.log(filteredData);
  return filteredData;
}
