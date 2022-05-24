// import styles from './dashboard.module.scss';
import BarChart from '../../components/DashBoard/BarChart';
import MediaTable from '../../components/DashBoard/MediaTable/MediaTable';
import ContentsContainer from '../../components/ContentsContainer/ContentsContainer';
import { useFetchData } from '../../hooks/useFetchData';
import MEDIA_DATA from '../../data/wanted_FE-media-channel-data-set.json';
import TrendReport from '../../components/DashBoard/TrendReport/trendReport';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import Aa from '../../components/DashBoard/AA/Aa';

const Dashboard = () => {
  const fetchData = useFetchData(MEDIA_DATA);
  return (
    <>
      <HeaderTitle isDate title='대시보드' />
      <ContentsContainer title='통합 광고 현황'>
        <TrendReport />
        <Aa />
      </ContentsContainer>
      <ContentsContainer title='매체 현황'>
        {fetchData.length !== 0 ? (
          <>
            <BarChart />
            <MediaTable />
          </>
        ) : (
          <div>loading...</div>
        )}
      </ContentsContainer>
    </>
  );
};

export default Dashboard;
