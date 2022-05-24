import { ChangeEvent, useState } from 'react';
import { DecIcon, IncIcon } from '../../assets';
import handleData from '../../utils/handleData';
import numberToKorean from '../../utils/numberToKorean';
import styles from './trendReport.module.scss';

const TrendReport = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.currentTarget.value);
  };

  const handleChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.currentTarget.value);
  };

  const result = handleData(startDate, endDate);

  const roas = Math.round(Math.abs(result.dataStructure[0].value));
  const cost = numberToKorean(Math.floor(result.dataStructure[1].value));
  const imp = numberToKorean(Math.floor(result.dataStructure[2].value));
  const click = numberToKorean(result.dataStructure[3].value);
  const conv = numberToKorean(result.dataStructure[4].value);
  const revenue = numberToKorean(Math.floor(result.dataStructure[5].value));

  const diffRoas = Math.round(Math.abs(result.diff[0].value));
  const diffCost = numberToKorean(result.diff[1].value);
  const diffImp = numberToKorean(result.diff[2].value);
  const diffClick = numberToKorean(result.diff[3].value);
  const diffConv = numberToKorean(result.diff[4].value);
  const diffRevenue = numberToKorean(result.diff[5].value);

  return (
    <>
      <input type='date' onChange={handleChangeStartDate} />
      ~
      <input type='date' onChange={handleChangeEndDate} />
      <div className={styles.trendReport}>
        <div className={styles.box}>
          <div>
            <h3>ROAS</h3>
            <p>{roas}%</p>
          </div>
          <div className={styles.diff}>
            {result.diff[0].value > 0 ? <IncIcon /> : <DecIcon />}
            {diffRoas}%
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>광고비</h3>
            <p>{cost} 원</p>
          </div>
          <div className={styles.diff}>
            {result.diff[1].value > 0 ? <IncIcon /> : <DecIcon />}
            {diffCost} 원
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>노출 수</h3>
            <p>{imp} 회</p>
          </div>
          <div className={styles.diff}>
            {result.diff[2].value > 0 ? <IncIcon /> : <DecIcon />}
            {diffImp} 회
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>클릭수</h3>
            <p>{click} 회</p>
          </div>
          <div className={styles.diff}>
            {result.diff[3].value > 0 ? <IncIcon /> : <DecIcon />}
            {diffClick} 회
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>전환 수</h3>
            <p>{conv} 회</p>
          </div>
          <div className={styles.diff}>
            {result.diff[4].value > 0 ? <IncIcon /> : <DecIcon />}
            {diffConv} 회
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>매출</h3>
            <p>{revenue} 원</p>
          </div>
          <div className={styles.diff}>
            {result.diff[5].value > 0 ? <IncIcon /> : <DecIcon />}
            {diffRevenue} 원
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendReport;
