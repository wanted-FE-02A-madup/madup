export interface ITrendData {
  report: Report;
}

interface Report {
  daily: Daily[];
}

interface Daily {
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
