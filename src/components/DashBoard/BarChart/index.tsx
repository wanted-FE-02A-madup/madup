import styles from './barChart.module.scss';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryStack, VictoryTheme } from 'victory';
import * as Data from '../../../utils/dataFilter';

const colorScale = ['#AC8AF8', '#85DA47', '#4FADF7', '#f9e000'];

const naver = [
  { category: 1, percentage: (Data.naverCost / Data.sumCost) * 100 },
  { category: 2, percentage: (Data.naverSales / Data.sumSales) * 100 },
  { category: 3, percentage: (Data.naverImp / Data.sumImp) * 100 },
  { category: 4, percentage: (Data.naverClick / Data.sumClick) * 100 },
  { category: 5, percentage: (Data.naverTransform / Data.sumTransform) * 100 },
];

const google = [
  { category: 1, percentage: (Data.googleCost / Data.sumCost) * 100 },
  { category: 2, percentage: (Data.googleSales / Data.sumSales) * 100 },
  { category: 3, percentage: (Data.googleImp / Data.sumImp) * 100 },
  { category: 4, percentage: (Data.googleClick / Data.sumClick) * 100 },
  { category: 5, percentage: (Data.googleTransform / Data.sumTransform) * 100 },
];

const facebook = [
  { category: 1, percentage: (Data.facebookCost / Data.sumCost) * 100 },
  { category: 2, percentage: (Data.facebookSales / Data.sumSales) * 100 },
  { category: 3, percentage: (Data.facebookImp / Data.sumImp) * 100 },
  { category: 4, percentage: (Data.facebookClick / Data.sumClick) * 100 },
  { category: 5, percentage: (Data.facebookTransform / Data.sumTransform) * 100 },
];

const kakao = [
  { category: 1, percentage: (Data.kakaoCost / Data.sumCost) * 100 },
  { category: 2, percentage: (Data.kakaoSales / Data.sumSales) * 100 },
  { category: 3, percentage: (Data.kakaoImp / Data.sumImp) * 100 },
  { category: 4, percentage: (Data.kakaoClick / Data.sumClick) * 100 },
  { category: 5, percentage: (Data.kakaoTransform / Data.sumTransform) * 100 },
];

const BarChart = () => {
  return (
    <div className={styles.barChart}>
      <VictoryChart
        width={900}
        height={200}
        domainPadding={55}
        padding={{ top: -40, bottom: 40, left: 50, right: 50 }}
        theme={VictoryTheme.material}
        style={{ parent: { height: '80%', width: '100%' } }}
      >
        <VictoryAxis
          style={{
            tickLabels: {
              fill: '#94A2AD',
              fontSize: 8,
            },
            // axis: { stroke: 'transparent' },
          }}
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']}
        />
        <VictoryAxis
          style={{
            axis: { stroke: 'transparent' },
            tickLabels: {
              fill: '#94A2AD',
              fontSize: 8,
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
          />
          <VictoryBar barWidth={20} data={naver} x='category' y='percentage' />
          <VictoryBar barWidth={20} data={facebook} x='category' y='percentage' />
          <VictoryBar cornerRadius={{ top: 5, bottom: 0 }} barWidth={20} data={kakao} x='category' y='percentage' />
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
