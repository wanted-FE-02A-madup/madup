import { cx } from '../../../styles';
import { useState } from 'react';

import Calendar from 'react-calendar';

import { ArrowDown } from '../../../assets/index';
import 'react-calendar/dist/Calendar.css';
import styles from './datePicker.module.scss';
import { endDayState, startDayState } from '../../../recoil/recoil';
import { useRecoilState } from 'recoil';

const dateLange = [new Date(2022, 2, 1), new Date(2022, 3, 20)];

const dateRangeFunc = (paramDate: Date): String => {
  return `${paramDate.getFullYear()}년 ${paramDate.getMonth()}월 ${paramDate.getDate()}일`;
};

const DatePicker = () => {
  const [startDate, setStartDate] = useRecoilState(startDayState);
  const [endDate, setEndDate] = useRecoilState(endDayState);

  const [calendar, setCalendar] = useState(false);

  const handleCalendarToggle = () => {
    setCalendar(!calendar);
  };

  const handleDate = (range: Array<Date>): void => {
    setStartDate(range[0]);
    setEndDate(range[1]);
    setCalendar(!calendar);
  };

  return (
    <div className={styles.datePicker}>
      <button type='button' onClick={handleCalendarToggle}>
        {`${dateRangeFunc(startDate)} ~ ${dateRangeFunc(endDate)}`}
        <ArrowDown className={cx(styles.arrow, { [styles.reverse]: calendar })} />
      </button>
      <Calendar
        className={cx(styles.calendar, { [styles.active]: calendar })}
        onChange={handleDate}
        value={[startDate, endDate]}
        defaultActiveStartDate={startDate}
        minDate={dateLange[0]}
        maxDate={dateLange[1]}
        view='month'
        selectRange
      />
    </div>
  );
};
export default DatePicker;
