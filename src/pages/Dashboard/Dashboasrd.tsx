import styles from './dashboard.module.scss';
import BarChart from '../../components/BarChart';
import MediaTable from '../../components/MediaTable/MediaTable';
import ContentsContainer from '../../components/ContentsContainer/ContentsContainer';
import { useFetchData } from '../../hooks/useFetchData';
import MEDIA_DATA from '../../data/wanted_FE-media-channel-data-set.json';

const Dashboard = () => {
  const fetchData = useFetchData(MEDIA_DATA);
  return (
    <ContentsContainer>
      {fetchData.length !== 0 ? (
        <>
          <BarChart />
          <MediaTable />
        </>
      ) : (
        <div>loading...</div>
      )}
    </ContentsContainer>
  );
};

export default Dashboard;
