import styles from './dashboard.module.scss';

import BarChart from '../../components/BarChart';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <BarChart />
    </div>
  );
};

export default Dashboard;
