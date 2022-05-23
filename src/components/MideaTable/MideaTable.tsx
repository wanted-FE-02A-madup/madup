import React from 'react';
import styles from './mideaTable.module.scss';
import * as Data from '../../utils/dataFilter';
import ContentsContainer from '../ContentsContainer/ContentsContainer';
import { useFetchData } from '../../hooks/useFetchData';
import MIDEA_DATA from '../../data/wanted_FE-media-channel-data-set.json';

const MideaTable = () => {
  const fetchData = useFetchData(MIDEA_DATA);

  return (
    <ContentsContainer>
      {fetchData.length !== 0 ? (
        <div className={styles.scroll}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.line}>
                <td />
                <td className={styles.head}>광고비</td>
                <td className={styles.head}>매출</td>
                <td className={styles.head}>ROAS</td>
                <td className={styles.head}>노출수</td>
                <td className={styles.head}>클릭 수</td>
                <td className={styles.head}>클릭률(CTR)</td>
                <td className={styles.head}>클릭당비용(CPC)</td>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.line}>
                <th>페이스북</th>
                <td>{Data.facebookCost.toLocaleString()}</td>
                <td>{Math.floor(Data.facebookSales).toLocaleString()}</td>
                <td>{Math.floor(Data.facebookROAS).toLocaleString()}</td>
                <td>{Data.facebookImp.toLocaleString()}</td>
                <td>{Data.facebookClick.toLocaleString()}</td>
                <td>{Math.floor(Data.facebookCtr).toLocaleString()}</td>
                <td>{Math.floor(Data.facebookCPC).toLocaleString()}</td>
              </tr>
              <tr className={styles.line}>
                <th>네이버</th>
                <td>{Data.naverCost.toLocaleString()}</td>
                <td>{Math.floor(Data.naverSales).toLocaleString()}</td>
                <td>{Math.floor(Data.naverROAS).toLocaleString()}</td>
                <td>{Data.naverImp.toLocaleString()}</td>
                <td>{Data.naverClick.toLocaleString()}</td>
                <td>{Math.floor(Data.naverCtr).toLocaleString()}</td>
                <td>{Math.floor(Data.naverCPC).toLocaleString()}</td>
              </tr>
              <tr className={styles.line}>
                <th>구글</th>
                <td>{Data.googleCost.toLocaleString()}</td>
                <td>{Math.floor(Data.googleSales).toLocaleString()}</td>
                <td>{Math.floor(Data.googleROAS).toLocaleString()}</td>
                <td>{Data.googleImp.toLocaleString()}</td>
                <td>{Data.googleClick.toLocaleString()}</td>
                <td>{Math.floor(Data.googleCtr).toLocaleString()}</td>
                <td>{Math.floor(Data.googleCPC).toLocaleString()}</td>
              </tr>
              <tr className={styles.line}>
                <th>총계</th>
                <td>{Data.sumCost.toLocaleString()}</td>
                <td>{Math.floor(Data.sumSales).toLocaleString()}</td>
                <td>{Math.floor(Data.sumROAS).toLocaleString()}</td>
                <td>{Data.sumImp.toLocaleString()}</td>
                <td>{Data.sumClick.toLocaleString()}</td>
                <td>{Math.floor(Data.sumCtr).toLocaleString()}</td>
                <td>{Math.floor(Data.sumCPC).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </ContentsContainer>
  );
};

export default MideaTable;
