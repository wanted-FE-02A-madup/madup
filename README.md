# 매드업 기업과제- 2A조
팀원 : 안주환, 조윤지, 박혜민, 민경미, 지창근  
개발기간 : 22/05/23 ~ 22/05/25  
배포 : https://madup-team2a.netlify.app/

<br>

### 파일구조
```
src  
  ├─assets  
  │  └─svgs  
  ├─components
  │  ├─Aside
  │  ├─Button
  |  ├─ContentsContainer
  |  ├─Dropdown
  |  ├─Header    
  │  ├─HeaderTitle
  |  ├─Lading   
  │  └─Layout
  ├─data
  ├─hooks
  │  └─worker
  ├─pages
  │  ├─Dashboard
  |  |  ├─BarChart
  |  |  ├─DatePicker
  |  |  ├─LineChart
  |  |  ├─MediaTable
  |  |  └─TrendReport
  |  |     └─TrendReportItem
  │  └─Manage
  |     └─ManageItem
  ├─recoil
  ├─routes
  ├─styles
  │  ├─base
  │  ├─constants
  │  └─mixins
  ├─types
  └─utils
```
<br>

### 기술스택
- React

- TypeScript

- SCSS

<br>

### 라이브러리 
- recoil: 0.7.3-alpha.2: 전역 상태 관리
- victory: 36.4.0: 데이터 시각화
- dayjs: 1.11.2: 날짜 연산 편의
- classnames: 2.3.1: 조건부 스타일링
- lodash: 4.17.21: cloneDeep을 이용한 객체의 깊은 복사
- react-calendar: 3.7.0: date picker

<br>

### 기능

>### 공통
- loading
  - Fetch 타임을 만들어 로딩화면을 적용했습니다  

- 달력구현
  - react-calendar' 라이브러리를 이용해서 캘린더를 구현했습니다.
 데이터는 2월 1일 부터 4월 20일까지 존재하는 것을 감안해서 그 사이의 날짜들만 선택할 수 있도록 maxDate, minDate 속성을 이용해 제한을 두었습니다.
시작 날짜와 끝 날짜(range)를 선택할 수 있도록 value 속성의 값으로 state를 배열(startDate, endDate)로 넣었고,
selectRange 속성을 이용하였습니다.



>### 대시보드 

1. 통합광고 현황 lineChart  
Victory.js 라이브러리를 활용해서 line chart 를 구현했습니다.
달력으로 선택한 날짜의 데이터만 가져오도록 데이터를 가공하는 과정이 필요했는데,
x축에는 date, y 축에는 드롭다운 카테고리로 선택한 항목이 있어야 했습니다.
그래서 객체로 만들어서 드롭다운 카테고리가 선택될때 마다 그래프가 새로 그려지도록 만들었습니다.

2. 통합 광고 현황 집계 기능  
date picker를 통해 선택한 기간(최대 7일)동안의 ROAS, 광고비, 노출 수, 클릭수, 전환수, 매출을 집계하여 보여줍니다. 집계액의 우측에는 이용자가 선택한 기간과 날짜 수가 같은 직전 기간 동안의 각 항목을 함께 집계하여 증감액을 보여줍니다.
- 구현 방법
  - filter메서드와 day.js의 isBetween 기능을 사용하여 이용자가 선택한 기간 동안만의 데이터를 얻습니다.
  - 선택기간, 이전기간의 데이터를 집계한 후 이를 비교한 값을 함께 리턴합니다

3. barChart 
- Data를 분류하여 카테고리 별로 몇 퍼센트를 차지하는지 bar 형태의 그래프로 표현했습니다 
- 별도의 util 함수를 만든 뒤 각 미디어가 카테고리별로 얼마만큼 비중을 차지하는지 계산했습니다
- 차트 라이브러리는 Victory.js를 사용했습니다

```jsx
// barChartData 유틸 함수를 통해 각 매체별로 data를 가공한 뒤 반환
const [google, naver, facebook, kakao] = barChartData();

// Victory 차트를 사용하여 bar 차트를 생성 

<VictoryChart
    width={900}
    height={200}
    domainPadding={55}
    padding={{ top: -80, bottom: 0, left: 50, right: 50 }}
    theme={VictoryTheme.material}
    style={{ parent: { height: '80%', width: '100%' } }}
>
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
      barWidth={25}
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
```

>### 광고관리
- dropdown을 클릭시 status에 따라 해당 광고만 보여주도록 정렬했습니다.




