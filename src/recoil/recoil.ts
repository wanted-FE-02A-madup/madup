import { atom } from 'recoil';

export const optionTitleState = atom<string>({
  key: 'optionTitleState',
  default: '전체 광고',
});

export const startDayState = atom<Date>({
  key: 'startDayState',
  default: new Date(2022, 2, 1),
});

export const endDayState = atom<Date>({
  key: 'endDayState',
  default: new Date(2022, 2, 7),
});
