export interface ITrendData {
  report: IReport;
}

export interface IReport {
  daily: ITrend[];
}

export interface ITrend {
  imp: number;
  click: number;
  cost: number;
  conv: number;
  convValue: number;
  ctr: number;
  cvr: number;
  cpc: number;
  cpa: number;
  roas: number;
  date: string;
}
