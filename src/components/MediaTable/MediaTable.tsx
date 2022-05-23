import styles from './mediaTable.module.scss';
import ContentsContainer from '../ContentsContainer/ContentsContainer';
import { useFetchData } from '../../hooks/useFetchData';
import MEDIA_DATA from '../../data/wanted_FE-media-channel-data-set.json';
import { useTableData } from '../../hooks/useTableData';

const MediaTable = () => {
  const fetchData = useFetchData(MEDIA_DATA);
  const facebookData = useTableData(MEDIA_DATA, 'facebook');
  const naverData = useTableData(MEDIA_DATA, 'naver');
  const googleData = useTableData(MEDIA_DATA, 'google');

  const { cost: fcost, sales: fsales, roas: froas, imp: fimp, click: fclick, ctr: fctr, cpc: fcpc } = facebookData;
  const { cost: ncost, sales: nsales, roas: nroas, imp: nimp, click: nclick, ctr: nctr, cpc: ncpc } = naverData;
  const { cost: gcost, sales: gsales, roas: groas, imp: gimp, click: gclick, ctr: gctr, cpc: gcpc } = googleData;

  const totalCost = fcost + ncost + gcost;
  const totalSales = fsales + nsales + gsales;
  const totalRoas = froas + nroas + groas;
  const totalImp = fimp + nimp + gimp;
  const totalClick = fclick + nclick + gclick;
  const totalCtr = fctr + nctr + gctr;
  const totalCpc = fcpc + ncpc + gcpc;

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
                <td>{fcost.toLocaleString()}</td>
                <td>{fsales.toLocaleString()}</td>
                <td>{froas.toLocaleString()}</td>
                <td>{fimp.toLocaleString()}</td>
                <td>{fclick.toLocaleString()}</td>
                <td>{fctr.toLocaleString()}</td>
                <td>{fcpc.toLocaleString()}</td>
              </tr>
              <tr className={styles.line}>
                <th>네이버</th>
                <td>{ncost.toLocaleString()}</td>
                <td>{nsales.toLocaleString()}</td>
                <td>{nroas.toLocaleString()}</td>
                <td>{nimp.toLocaleString()}</td>
                <td>{nclick.toLocaleString()}</td>
                <td>{nctr.toLocaleString()}</td>
                <td>{ncpc.toLocaleString()}</td>
              </tr>
              <tr className={styles.line}>
                <th>구글</th>
                <td>{gcost.toLocaleString()}</td>
                <td>{gsales.toLocaleString()}</td>
                <td>{groas.toLocaleString()}</td>
                <td>{gimp.toLocaleString()}</td>
                <td>{gclick.toLocaleString()}</td>
                <td>{gctr.toLocaleString()}</td>
                <td>{gcpc.toLocaleString()}</td>
              </tr>
              <tr className={styles.line}>
                <th className={styles.total}>총계</th>
                <td className={styles.total}>{totalCost.toLocaleString()}</td>
                <td className={styles.total}>{totalSales.toLocaleString()}</td>
                <td className={styles.total}>{totalRoas.toLocaleString()}</td>
                <td className={styles.total}>{totalImp.toLocaleString()}</td>
                <td className={styles.total}>{totalClick.toLocaleString()}</td>
                <td className={styles.total}>{totalCtr.toLocaleString()}</td>
                <td className={styles.total}>{totalCpc.toLocaleString()}</td>
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

export default MediaTable;
