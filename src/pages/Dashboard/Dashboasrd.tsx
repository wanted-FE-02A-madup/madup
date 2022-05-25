import ContentsContainer from '../../components/ContentsContainer/ContentsContainer';
import { useFetchData } from '../../hooks/useFetchData';
import MEDIA_DATA from '../../data/wanted_FE-media-channel-data-set.json';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';

import Loading from '../../components/Loading/Loading';
import TrendReport from './TrendReport/trendReport';
import LineChart from './LineChart/LineChart';
import BarChart from './BarChart';
import MediaTable from './MediaTable/MediaTable';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  const fetchData = useFetchData(MEDIA_DATA);
  return (
    <section className={styles.dashboardWrapper}>
      {fetchData.length !== 0 ? (
        <>
          <HeaderTitle isDate title='대시보드' />
          <ContentsContainer title='통합 광고 현황'>
            <TrendReport />
            <LineChart />
          </ContentsContainer>
          <ContentsContainer title='매체 현황'>
            <BarChart />
            <MediaTable />
          </ContentsContainer>
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Dashboard;
