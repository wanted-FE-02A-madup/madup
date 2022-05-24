import { atom } from 'recoil';

export const optionTitleState = atom<string>({
  key: 'optionTitleState',
  default: '전체 광고',
});

export const startDateState = atom({
  key: 'startDateState',
  default: new Date(2022, 2, 3),
});

export const endDateState = atom({
  key: 'endDateState',
  default: new Date(2022, 2, 7),
});
