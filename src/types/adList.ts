export interface IAdList {
  count: number;
  ads: IAdListItem[];
}

export interface IAdListItem {
  id: number;
  adType: string;
  title: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string | null;
  report: IAdListReport;
}

export interface IAdListReport {
  cost: number;
  convValue: number;
  roas: number;
}
