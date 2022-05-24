import { VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';
import { useRecoilValue } from 'recoil';
import { ScalePropType } from 'victory-core';

// import { ITrend } from '../types/trend';
import { COLORS } from './chartColorOption';

import SelectBox from '../../SelectBox/SelectBox';

import styles from './lineChart.module.scss';
import { startDayState, endDayState } from '../../../recoil/recoil';
import trandDataFilter from '../../../utils/trandDataFilter';

const chartCategory = ['ROAS', '광고비', '노출수', '클릭수', '전환수', '매출'];
const termCategory = ['주간', '일간'];

const dateRangeFunc = (paramDate: Date): string => {
  return `${paramDate.getFullYear()}-${paramDate.getMonth()}-${paramDate.getDate()}`;
};

const LineChart = () => {
  const startDate = dateRangeFunc(useRecoilValue(startDayState));
  const endDate = dateRangeFunc(useRecoilValue(endDayState));
  const data = trandDataFilter(startDate, endDate);

  const { imp, click, cost, conv, convValue, ctr, cvr, cpc, cpa, roas, date } = convertData(data as ChartDataItem[]);

  const options = {
    width: 1194,
    height: 320,
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
      <div className={styles.graph}>
        {/* <section className={styles.chart}>
          <div className={styles.centering}>
            <VictoryChart
              theme={VictoryTheme.material}
              containerComponent={
                <VictoryVoronoiContainer
                  voronoiDimension='x'
                  labels={({ datum }) => `${datum.childName}: ${datum.y}`}
                  labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{ fill: 'white' }} />}
                />
              }
              {...options}
            >
              <VictoryLine
                name='confirmed'
                style={{
                  data: { stroke: COLORS.YELLOW },
                  parent: { border: '1px solid #ccc' },
                }}
                data={confirmed}
              />
              <VictoryLine
                name='critical'
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
                }}
                style={{
                  data: { stroke: COLORS.ORANGE },
                  parent: { border: '1px solid #ccc' },
                }}
                data={critical}
              />
            </VictoryChart>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default LineChart;
