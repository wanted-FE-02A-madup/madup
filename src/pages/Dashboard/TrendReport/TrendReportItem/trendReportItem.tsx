import { DecIcon, IncIcon } from '../../../../assets';
import styles from '../trendReport.module.scss';

interface IProps {
  title: string;
  value: string;
  diffAbsValue: string;
  diffValue: number;
}

const TrendReportItem = ({ title, value, diffAbsValue, diffValue }: IProps) => {
  return (
    <div className={styles.box}>
      <div>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
      <div className={styles.diff}>
        {diffValue > 0 ? <IncIcon /> : <DecIcon />}
        {diffAbsValue}
      </div>
    </div>
  );
};

export default TrendReportItem;
