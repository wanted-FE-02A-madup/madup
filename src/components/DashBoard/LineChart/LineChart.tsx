import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';
import { useRecoilValue, useRecoilState } from 'recoil';
import { ScalePropType } from 'victory-core';
import { COLORS } from './chartColorOption';
import { convertData, Data } from './utils';

import SelectBox from '../../SelectBox/SelectBox';

import styles from './lineChart.module.scss';
import {
  startDayState,
  endDayState,
  categoryState1,
  categoryState2,
  advertisingStatusState,
} from '../../../recoil/recoil';
import trandDataFilter from '../../../utils/trandDataFilter';
import { ITrend } from '../../../types/trend';
import Dropdown from '../../Dropdown/Dropdown';
import { useEffect } from 'react';

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

const dateRangeFunc = (paramDate: Date): string => {
  return `${paramDate.getFullYear()}-${paramDate.getMonth() + 1}-${paramDate.getDate()}`;
};

const LineChart = () => {
  const startDate = dateRangeFunc(useRecoilValue(startDayState));
  const endDate = dateRangeFunc(useRecoilValue(endDayState));
  const data = trandDataFilter(startDate, endDate);
  const [category1, setCategory1] = useRecoilState(categoryState1);
  const [category2, setCategory2] = useRecoilState(categoryState2);

  const baseDropdown = chartCategory.map((item) => item.name);
  const optionDropdown = chartCategory.filter((item) => item.name !== category1).map((item) => item.name);

  const [advertisingStatusTitle, setAdvertisingStatusTitle] = useRecoilState(advertisingStatusState);

  useEffect(() => {
    if (category1 === category2) {
      setCategory2('없음');
    }
  }, [category1, category2, setCategory2]);

  type Data = {
    x: string;
    y: number;
  };
  const { roas, cost, imp, click, conversions, sales } = convertData(data as ITrend[]);

  const handleSelectedData = (category: string): Array<Data> => {
    let dataArr: Data[] = [];

    if (category === 'ROAS') {
      dataArr = roas;
    }
    if (category === '광고비') {
      dataArr = cost;
    }
    if (category === '노출수') {
      dataArr = imp;
    }
    if (category === '클릭수') {
      dataArr = click;
    }
    if (category === '전환수') {
      dataArr = conversions;
    }
    if (category === '매출') {
      dataArr = sales;
    }
    return dataArr;
  };

  const options = {
    width: 900,
    height: 240,
    padding: {
      left: 0,
      top: 40,
      right: 60,
      bottom: 30,
    },
    scale: { x: 'time' as ScalePropType },
  };
  return (
    <div className={styles.lineChart}>
      <div className={styles.top}>
        <div className={styles.buttonWrap}>
          <SelectBox option={baseDropdown} title={category1} color='blue' onClick={setCategory1} />
          <SelectBox option={optionDropdown} title={category2} color='green' onClick={setCategory2} />
        </div>
        <Dropdown option={termCategory} title={advertisingStatusTitle} onClick={setAdvertisingStatusTitle} />
      </div>
      <section className={styles.chart}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={1}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension='x'
              labels={({ datum }) => `${datum.y}`}
              labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />}
            />
          }
          {...options}
        >
          <VictoryAxis
            style={{
              tickLabels: {
                fill: '#94A2AD',
                fontSize: 12,
              },
            }}
          />
          <VictoryAxis
            style={{
              axis: { stroke: 'transparent' },
              tickLabels: {
                fill: '#94A2AD',
                fontSize: 12,
                paddingTop: 20,
              },
              ticks: { stroke: 'transparent' },
            }}
          />
          <VictoryAxis
            style={{
              axis: { stroke: 'transparent' },
              tickLabels: {
                fill: '#94A2AD',
                fontSize: 12,
                paddingTop: 20,
              },
              ticks: { stroke: 'transparent' },
            }}
          />
          <VictoryLine
            style={{
              data: { stroke: COLORS.SKYBLUE },
              parent: { border: '1px solid #ccc' },
            }}
            data={handleSelectedData(category1)}
            x='x'
            y='y'
          />
          <VictoryLine
            style={{
              data: { stroke: COLORS.LIGHTGREEN },
              parent: { border: '1px solid #ccc' },
            }}
            data={handleSelectedData(category2)}
            x='x'
            y='y'
          />
        </VictoryChart>
      </section>
    </div>
  );
};

export default LineChart;
