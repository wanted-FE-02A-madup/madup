import { useRecoilValue } from 'recoil';
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';

import { categoryState1, categoryState2, endDayState, startDayState } from '../../../recoil/recoil';
import numberToPlaceValue from '../../../utils/numberToPlaceValue';
import { convertData } from '../../../utils/lineChart';
import { COLORS, options } from './chartStylesOption';
import trandDataFilter from '../../../utils/trandDataFilter';

const dateRangeFunc = (paramDate: Date): string => {
  return `${paramDate.getFullYear()}-${paramDate.getMonth() + 1}-${paramDate.getDate()}`;
};

const Chart = () => {
  const category1 = useRecoilValue(categoryState1);
  const category2 = useRecoilValue(categoryState2);
  const startDate = dateRangeFunc(useRecoilValue(startDayState));
  const endDate = dateRangeFunc(useRecoilValue(endDayState));
  const data = trandDataFilter(startDate, endDate);

  const tickVal = Array.from(new Array(data.length), (x, i) => i + 1);
  const newDateFormat: string[] = [];

  data.forEach((item) => {
    const sliceDate = item.date.split('-');
    newDateFormat.push(`${sliceDate[1]}월 ${sliceDate[2]}일`);
  });

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

  return (
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
  );
};

export default Chart;
