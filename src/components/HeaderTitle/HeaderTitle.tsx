import DatePicker from '../../pages/Dashboard/DatePicker/DatePicker';

import styles from './headerTitle.module.scss';

interface IProps {
  title: string;
  isDate: boolean;
}

const HeaderTitle = ({ isDate, title }: IProps) => {
  return (
    <div className={styles.top}>
      <h2>{title}</h2>
      {isDate && (
        <div className={styles.datePicker}>
          <DatePicker />
        </div>
      )}
    </div>
  );
};

export default HeaderTitle;
