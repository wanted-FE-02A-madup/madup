import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import TREND_DATA from '../data/wanted_FE_trend-data-set.json';

export default function trandDataFilter(date1: string, date2: string) {
  dayjs.extend(isBetween);
  const startDate = dayjs(date1).subtract(1, 'd');
  const endDate = dayjs(date2).add(1, 'd');

  const DAILY_TREND_DATA = TREND_DATA.report.daily;

  const filteredData = DAILY_TREND_DATA.filter((data) => dayjs(data.date).isBetween(startDate, endDate));

  return filteredData;
}
