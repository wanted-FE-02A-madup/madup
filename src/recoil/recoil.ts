import { atom } from 'recoil';

export const manageState = atom<string>({
  key: 'manageState',
  default: '전체 광고',
});

export const asideState = atom<string>({
  key: 'asideState',
  default: '매드업',
});

export const isopenDropDown = atom<boolean>({
  key: 'isopenDropDown',
  default: false,
});

export const startDayState = atom<Date>({
  key: 'startDayState',
  default: new Date(2022, 2, 1),
});

export const endDayState = atom<Date>({
  key: 'endDayState',
  default: new Date(2022, 2, 7),
});

export const categoryState1 = atom<string>({
  key: 'categoryState1',
  default: 'roas',
});

export const categoryState2 = atom<string>({
  key: 'categoryState2',
  default: '',
});
