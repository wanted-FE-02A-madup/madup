import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme, VictoryTooltip } from 'victory';

import styles from './barChart.module.scss';
import barChartData from '../../../utils/barChartData';

const colorScale = ['#AC8AF8', '#85DA47', '#f9e000', '#4FADF7'];

const BarChart = () => {
  const [google, naver, facebook, kakao] = barChartData();

  return (
    <div className={styles.barChart}>
      <VictoryChart
        width={900}
        height={200}
        domainPadding={55}
        padding={{ top: -80, bottom: 0, left: 50, right: 50 }}
        theme={VictoryTheme.material}
        style={{ parent: { height: '80%', width: '100%' } }}
      >
        <VictoryAxis
          style={{
            tickLabels: {
              fill: '#94A2AD',
              fontSize: 14,
            },
          }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']}
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
          tickValues={[20, 40, 60, 80, 100]}
        />
        <VictoryStack
          colorScale={colorScale}
          style={{
            data: { stroke: 'white', strokeWidth: 1 },
          }}
        >
          <VictoryBar
            style={{
              data: { stroke: 'transparent' },
            }}
            barWidth={20}
            data={google}
            x='category'
            y='percentage'
            labelComponent={
              <VictoryTooltip
                style={{ fill: 'white' }}
                flyoutWidth={100}
                flyoutHeight={40}
                flyoutStyle={{ fill: '#3A474E' }}
              />
            }
          />
          <VictoryBar
            labelComponent={
              <VictoryTooltip
                style={{ fill: 'white' }}
                flyoutWidth={100}
                flyoutHeight={40}
                flyoutStyle={{ fill: '#3A474E' }}
              />
            }
            barWidth={20}
            data={naver}
            x='category'
            y='percentage'
          />
          <VictoryBar
            labelComponent={
              <VictoryTooltip
                style={{ fill: 'white' }}
                flyoutWidth={100}
                flyoutHeight={40}
                flyoutStyle={{ fill: '#3A474E' }}
              />
            }
            barWidth={20}
            data={facebook}
            x='category'
            y='percentage'
          />
          <VictoryBar
            labelComponent={
              <VictoryTooltip
                style={{ fill: 'white' }}
                flyoutWidth={100}
                flyoutHeight={40}
                flyoutStyle={{ fill: '#3A474E' }}
              />
            }
            cornerRadius={{ top: 5, bottom: 0 }}
            barWidth={20}
            data={kakao}
            x='category'
            y='percentage'
          />
        </VictoryStack>
      </VictoryChart>
      <div className={styles.labelWrapper}>
        <p className={styles.label}>페이스북</p>
        <p className={styles.label}>네이버</p>
        <p className={styles.label}>구글</p>
        <p className={styles.label}>카카오</p>
      </div>
    </div>
  );
};

export default BarChart;
