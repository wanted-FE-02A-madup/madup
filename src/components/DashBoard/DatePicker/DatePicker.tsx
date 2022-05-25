import { cx } from '../../../styles';
import { useState } from 'react';

import Calendar from 'react-calendar';

import { ArrowDown } from '../../../assets/index';
import './calendar.scss';
import styles from './datePicker.module.scss';
import { endDayState, startDayState } from '../../../recoil/recoil';
import { useRecoilState } from 'recoil';

const dateRange = [new Date('2022-02-01'), new Date('2022-04-20')];

const dateRangeFunc = (paramDate: Date): String => {
  return `${paramDate.getFullYear()}년 ${paramDate.getMonth() + 1}월 ${paramDate.getDate()}일`;
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
    const rangeDiff = range[1].getDate() - range[0].getDate();
    if (rangeDiff > 6 || range[0].getMonth() !== range[1].getMonth()) {
      range[1].setDate(range[0].getDate() + 6);
      range[1].setMonth(range[0].getMonth());
      setEndDate(range[1]);
    } else {
      setEndDate(range[1]);
    }
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
        minDate={dateRange[0]}
        maxDate={dateRange[1]}
        view='month'
        selectRange
      />
    </div>
  );
};
export default DatePicker;
