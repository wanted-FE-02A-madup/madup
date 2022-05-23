import DatePicker from '../../components/DatePicker/DatePicker';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.top}>
        <h2>대시보드</h2>
        <div className={styles.datePicker}>
          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
