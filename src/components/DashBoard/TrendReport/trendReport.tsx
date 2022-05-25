import { useRecoilValue } from 'recoil';

import handleData from '../../../utils/handleData';
import numberToPlaceValue from '../../../utils/numberToPlaceValue';

import { endDayState, startDayState } from '../../../recoil/recoil';

import TREND_DATA from '../../../data/wanted_FE_trend-data-set.json';

import TrendReportItem from './TrendReportItem/trendReportItem';

import styles from './trendReport.module.scss';

const TrendReport = () => {
  const startDate = useRecoilValue(startDayState);
  const endDate = useRecoilValue(endDayState);

  const result = handleData(startDate, endDate, TREND_DATA);

  const roas = Math.round(Math.abs(result.currentDataStructure[0].value));
  const cost = numberToPlaceValue(Math.floor(result.currentDataStructure[1].value));
  const imp = numberToPlaceValue(Math.floor(result.currentDataStructure[2].value));
  const click = numberToPlaceValue(result.currentDataStructure[3].value);
  const conv = numberToPlaceValue(result.currentDataStructure[4].value);
  const revenue = numberToPlaceValue(Math.floor(result.currentDataStructure[5].value));

  const diffRoas = Math.round(Math.abs(result.diff[0].value));
  const diffCost = numberToPlaceValue(result.diff[1].value);
  const diffImp = numberToPlaceValue(result.diff[2].value);
  const diffClick = numberToPlaceValue(result.diff[3].value);
  const diffConv = numberToPlaceValue(result.diff[4].value);
  const diffRevenue = numberToPlaceValue(result.diff[5].value);

  return (
    <div className={styles.trendReport}>
      <TrendReportItem title='ROAS' value={`${roas}%`} diffValue={result.diff[0].value} diffAbsValue={`${diffRoas}%`} />
      <TrendReportItem
        title='광고비'
        value={`${cost} 원`}
        diffValue={result.diff[1].value}
        diffAbsValue={`${diffCost} 원`}
      />
      <TrendReportItem
        title='노출 수'
        value={`${imp} 회`}
        diffValue={result.diff[2].value}
        diffAbsValue={`${diffImp} 회`}
      />
      <TrendReportItem
        title='클릭수'
        value={`${click} 회`}
        diffValue={result.diff[3].value}
        diffAbsValue={`${diffClick} 회`}
      />
      <TrendReportItem
        title='전환 수'
        value={`${conv} 회`}
        diffValue={result.diff[4].value}
        diffAbsValue={`${diffConv} 회`}
      />
      <TrendReportItem
        title='매출'
        value={`${revenue} 원`}
        diffValue={result.diff[5].value}
        diffAbsValue={`${diffRevenue} 원`}
      />
    </div>
  );
};

export default TrendReport;
