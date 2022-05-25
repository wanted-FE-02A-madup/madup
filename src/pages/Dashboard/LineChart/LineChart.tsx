import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { categoryState1, categoryState2, advertisingStatusState } from '../../../recoil/recoil';

import Dropdown from '../../../components/Dropdown/Dropdown';

import styles from './lineChart.module.scss';
import Chart from './Chart';

interface IData {
  name: string;
  dataName: string;
}

const chartCategory: IData[] = [
  { name: 'ROAS', dataName: 'roas' },
  { name: '광고비', dataName: 'cost' },
  { name: '노출수', dataName: 'imp' },
  { name: '클릭수', dataName: 'click' },
  { name: '전환수', dataName: 'conversions' },
  { name: '매출', dataName: 'sales' },
];

const termCategory = ['주간', '일간'];

const LineChart = () => {
  const [category1, setCategory1] = useRecoilState(categoryState1);
  const [category2, setCategory2] = useRecoilState(categoryState2);
  const [advertisingStatusTitle, setAdvertisingStatusTitle] = useRecoilState(advertisingStatusState);

  const optionDropdown = chartCategory.filter((item) => item.name !== category1).map((item) => item.name);
  const baseDropdown = chartCategory.map((item) => item.name);

  useEffect(() => {
    if (category1 === category2) {
      setCategory2('없음');
    }
  }, [category1, category2, setCategory2]);

  return (
    <div className={styles.lineChart}>
      <div className={styles.top}>
        <div className={styles.buttonWrap}>
          <Dropdown option={baseDropdown} title={category1} color='blue' onClick={setCategory1} />
          <Dropdown option={optionDropdown} title={category2} color='green' onClick={setCategory2} />
        </div>
        <Dropdown option={termCategory} title={advertisingStatusTitle} onClick={setAdvertisingStatusTitle} />
      </div>
      <section className={styles.chart}>
        <Chart />
      </section>
    </div>
  );
};

export default LineChart;
