import { VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';
import { ScalePropType } from 'victory-core';

import { ChartDataItem } from 'types/trend';
import TRAND_DATA from '../../../data/wanted_FE_trend-data-set.json';
console.log(TRAND_DATA);

import { COLORS } from './chartColorOption';

import SelectBox from '../../SelectBox/SelectBox';

import styles from './lineChart.module.scss';

const LineChart = () => {
  const chartCategory = ['ROAS', '광고비', '노출수', '클릭수', '전환수', '매출'];
  const termCategory = ['주간', '일간'];

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
      {/* <div className={styles.graph}>
        <section className={styles.chart}>
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
              <VictoryLine
                name='death'
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1500 },
                }}
                style={{
                  data: { stroke: COLORS.RED },
                  parent: { border: '1px solid #ccc' },
                }}
                data={death}
              />
              <VictoryLine
                name='negative'
                animate={{
                  duration: 2000,
                  onLoad: { duration: 500 },
                }}
                style={{
                  data: { stroke: COLORS.BLUE },
                  parent: { border: '1px solid #ccc' },
                }}
                data={negative}
              />
              <VictoryLine
                name='released'
                animate={{
                  duration: 2000,
                  onLoad: { duration: 500 },
                }}
                style={{
                  data: { stroke: COLORS.GREEN },
                  parent: { border: '1px solid #ccc' },
                }}
                data={released}
              />
              <VictoryLine
                name='tested'
                animate={{
                  duration: 2000,
                  onLoad: { duration: 500 },
                }}
                style={{
                  data: { stroke: COLORS.TEAL },
                  parent: { border: '1px solid #ccc' },
                }}
                data={tested}
              />
            </VictoryChart>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default LineChart;
