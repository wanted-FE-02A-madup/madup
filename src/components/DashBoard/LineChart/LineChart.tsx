import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';
import { useRecoilValue, useRecoilState } from 'recoil';
import { ScalePropType } from 'victory-core';
import { COLORS } from './chartColorOption';
import { convertData } from './utils';

import SelectBox from '../../SelectBox/SelectBox';

import styles from './lineChart.module.scss';
import { startDayState, endDayState, categoryState1, categoryState2 } from '../../../recoil/recoil';
import trandDataFilter from '../../../utils/trandDataFilter';
import { ITrend } from '../../../types/trend';

const chartCategory = ['ROAS', '광고비', '노출수', '클릭수', '전환수', '매출'];
const termCategory = ['주간', '일간'];

const dateRangeFunc = (paramDate: Date): string => {
  return `${paramDate.getFullYear()}-${paramDate.getMonth()}-${paramDate.getDate()}`;
};

const LineChart = () => {
  const startDate = dateRangeFunc(useRecoilValue(startDayState));
  const endDate = dateRangeFunc(useRecoilValue(endDayState));
  const data = trandDataFilter(startDate, endDate);
  const [category1, setCategory1] = useRecoilState(categoryState1);
  const [category2, setCategory2] = useRecoilState(categoryState2);

  const { imp, click, cost, conv, convValue, ctr, cvr, cpc, cpa, roas } = convertData(data as ITrend[]);

  const options = {
    width: 900,
    height: 240,
    padding: {
      left: 0,
      top: 0,
      right: 60,
      bottom: 30,
    },
    scale: { x: 'time' as ScalePropType },
  };
  return (
    <div className={styles.lineChart}>
      <div className={styles.top}>
        <div className={styles.buttonWrap}>
          <SelectBox option={chartCategory} color='blue' />
          <SelectBox option={chartCategory} color='green' />
        </div>
        <SelectBox option={termCategory} />
      </div>
      <section className={styles.chart}>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={1}
          containerComponent={
            <VictoryVoronoiContainer
              voronoiDimension='x'
              labels={({ datum }) => `${datum.childName}: ${datum.y}`}
              labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />}
            />
          }
          {...options}
        >
          {/* <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} /> */}
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
            dependentAxis
            tickFormat={(x) => `${x}%`}
            tickValues={[21, 61, 101, 141, 181, 221]}
          />
          <VictoryLine
            name='imp'
            style={{
              data: { stroke: COLORS.SKYBLUE },
              parent: { border: '1px solid #ccc' },
            }}
            data={imp}
            x='x'
            y='y'
          />
          <VictoryLine
            name='cost'
            // animate={{
            //   duration: 2000,
            //   onLoad: { duration: 1000 },
            // }}
            style={{
              data: { stroke: COLORS.LIGHTGREEN },
              parent: { border: '1px solid #ccc' },
            }}
            data={cost}
            x='x'
            y='y'
          />
        </VictoryChart>
      </section>
    </div>
  );
};

export default LineChart;
