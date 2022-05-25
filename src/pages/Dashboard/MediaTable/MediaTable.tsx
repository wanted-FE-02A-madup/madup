import MEDIA_DATA from '../../../data/wanted_FE-media-channel-data-set.json';

import { useTableData } from '../../../hooks/useTableData';
import { useTotalData } from '../../../hooks/useTotalData';

import styles from './mediaTable.module.scss';

const TABLEDATA = ['광고비', '매출', 'ROAS', '노출수', '클릭 수', '클릭률(CTR)', '클릭당비용(CPC)'];

const MediaTable = () => {
  const facebookData = useTableData(MEDIA_DATA, 'facebook');
  const naverData = useTableData(MEDIA_DATA, 'naver');
  const googleData = useTableData(MEDIA_DATA, 'google');
  const kakaoData = useTableData(MEDIA_DATA, 'kakao');
  const tableDatas = [facebookData, naverData, googleData, kakaoData];
  const totalData = useTotalData(tableDatas);

  const { totalClick, totalCost, totalSales, totalRoas, totalImp, totalCtr, totalCpc } = totalData;

  return (
    <div className={styles.scroll}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.line}>
            <td />
            {TABLEDATA.map((item) => (
              <td className={styles.head} key={item}>
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableDatas.map((item, key) => (
            <tr className={styles.line} key={`table-data-${key + item.cost}`}>
              <th>{item.channelValue}</th>
              <td>{item.cost.toLocaleString()}</td>
              <td>{item.sales.toLocaleString()}</td>
              <td>{item.roas.toLocaleString()}</td>
              <td>{item.imp.toLocaleString()}</td>
              <td>{item.click.toLocaleString()}</td>
              <td>{item.ctr.toLocaleString()}</td>
              <td>{item.cpc.toLocaleString()}</td>
            </tr>
          ))}
          <tr className={styles.line}>
            <th className={styles.total}>총계</th>
            <td className={styles.total}>{totalCost}</td>
            <td className={styles.total}>{totalSales}</td>
            <td className={styles.total}>{totalRoas}</td>
            <td className={styles.total}>{totalImp}</td>
            <td className={styles.total}>{totalClick}</td>
            <td className={styles.total}>{totalCtr}</td>
            <td className={styles.total}>{totalCpc}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MediaTable;
