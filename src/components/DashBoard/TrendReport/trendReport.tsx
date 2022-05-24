import { useRecoilValue } from 'recoil';
import { endDateState, startDateState } from '../../../recoil/recoil';
import handleData from '../../../utils/handleData';
import numberToKorean from '../../../utils/numberToKorean';
import styles from './trendReport.module.scss';
import TREND_DATA from '../../../data/wanted_FE_trend-data-set.json';
import TrendReportItem from './TrendReportItem/trendReportItem';

const TrendReport = () => {
  const startDate = useRecoilValue(startDateState);
  const endDate = useRecoilValue(endDateState);

  const result = handleData(startDate, endDate, TREND_DATA);

  const roas = Math.round(Math.abs(result.currentDataStructure[0].value));
  const cost = numberToKorean(Math.floor(result.currentDataStructure[1].value));
  const imp = numberToKorean(Math.floor(result.currentDataStructure[2].value));
  const click = numberToKorean(result.currentDataStructure[3].value);
  const conv = numberToKorean(result.currentDataStructure[4].value);
  const revenue = numberToKorean(Math.floor(result.currentDataStructure[5].value));

  const diffRoas = Math.round(Math.abs(result.diff[0].value));
  const diffCost = numberToKorean(result.diff[1].value);
  const diffImp = numberToKorean(result.diff[2].value);
  const diffClick = numberToKorean(result.diff[3].value);
  const diffConv = numberToKorean(result.diff[4].value);
  const diffRevenue = numberToKorean(result.diff[5].value);

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
