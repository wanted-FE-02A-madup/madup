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
      <section className={styles.adStatus}>
        <h3 className={styles.subTitle}>통합 광고 현황</h3>
        <div className={styles.chartBox}>
          <div className={styles.chart}>
            <button type='button'>Roas</button>
            <button type='button'>Roas</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
