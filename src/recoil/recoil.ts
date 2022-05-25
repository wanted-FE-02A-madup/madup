import { atom } from 'recoil';

export const optionTitleState = atom<string>({
  key: 'optionTitleState',
  default: '전체 광고',
});

export const startDayState = atom<Date>({
  key: 'startDayState',
  default: new Date('2022-02-01'),
});

export const endDayState = atom<Date>({
  key: 'endDayState',
  default: new Date('2022-02-07'),
});

export const categoryState1 = atom<string>({
  key: 'categoryState1',
  default: 'roas',
});

export const categoryState2 = atom<string>({
  key: 'categoryState2',
  default: '',
});
