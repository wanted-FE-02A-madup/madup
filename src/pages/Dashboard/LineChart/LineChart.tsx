import { useEffect } from 'react';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';
import { useRecoilValue, useRecoilState } from 'recoil';
import { ScalePropType } from 'victory-core';
import { COLORS } from './chartColorOption';

import {
  startDayState,
  endDayState,
  categoryState1,
  categoryState2,
  advertisingStatusState,
} from '../../../recoil/recoil';
import trandDataFilter from '../../../utils/trandDataFilter';
import numberToPlaceValue from '../../../utils/numberToPlaceValue';
import { convertData } from '../../../utils/lineChart';
import Dropdown from '../../../components/Dropdown/Dropdown';

import styles from './lineChart.module.scss';

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

const options = {
  width: 900,
  height: 240,
  padding: {
    left: 80,
    top: 40,
    right: 80,
    bottom: 30,
  },
  scale: { x: 'time' as ScalePropType },
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

  const { roas, cost, imp, click, conversions, sales } = convertData(data);

  const handleSelectedData = (category: string) => {
    const selectDataValue = {
      ROAS: roas,
      광고비: cost,
      노출수: imp,
      클릭수: click,
      전환수: conversions,
      매출: sales,
      없음: [],
    }[category];

    const maxValue = selectDataValue && Math.max(...selectDataValue!.map((item) => item.y));
    return { selectDataValue, maxValue };
  };

  const dataFormat = (t: number, category: string) => {
    const formatValue = {
      ROAS: '%',
      광고비: '원',
      노출수: '회',
      클릭수: '회',
      전환수: '회',
      매출: '원',
      없음: '',
    }[category];
    return `${numberToPlaceValue(Math.round(t))}${formatValue}`;
  };

  const tickVal = Array.from(new Array(data.length), (x, i) => i + 1);
  const newDateFormat: string[] = [];
  data.forEach((item) => {
    const sliceDate = item.date.split('-');
    newDateFormat.push(`${sliceDate[1]}월 ${sliceDate[2]}일`);
  });

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
        <VictoryChart
          domain={{ y: [0, 1] }}
          theme={VictoryTheme.material}
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
              axis: { stroke: 'transparent' },
              tickLabels: {
                fill: '#94A2AD',
                fontSize: 12,
                paddingTop: 20,
              },
              ticks: { stroke: 'transparent' },
            }}
            tickValues={tickVal}
            tickFormat={newDateFormat}
          />

          <VictoryAxis
            dependentAxis
            orientation='left'
            style={{
              axis: { stroke: 'transparent' },
              tickLabels: {
                fill: '#94A2AD',
                fontSize: 12,
                paddingTop: 20,
              },
              ticks: { stroke: 'transparent' },
            }}
            tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
            tickFormat={(t) => dataFormat(t * handleSelectedData(category1).maxValue!, category1)}
          />

          {category2 !== '없음' && (
            <VictoryAxis
              dependentAxis
              orientation='right'
              style={{
                axis: { stroke: 'transparent' },
                tickLabels: {
                  fill: '#94A2AD',
                  fontSize: 12,
                  paddingTop: 20,
                },
                ticks: { stroke: 'transparent' },
              }}
              tickValues={[0.2, 0.4, 0.6, 0.8, 1]}
              tickFormat={(t) => dataFormat(t * handleSelectedData(category2).maxValue!, category2)}
            />
          )}

          <VictoryLine
            style={{
              data: { stroke: COLORS.SKYBLUE },
              parent: { border: '1px solid #ccc' },
            }}
            data={handleSelectedData(category1).selectDataValue}
            y={(datum) => datum.y / handleSelectedData(category1).maxValue!}
          />

          <VictoryLine
            style={{
              data: { stroke: COLORS.LIGHTGREEN },
              parent: { border: '1px solid #ccc' },
            }}
            data={handleSelectedData(category2).selectDataValue}
            y={(datum) => datum.y / handleSelectedData(category2).maxValue!}
          />
        </VictoryChart>
      </section>
    </div>
  );
};

export default LineChart;
