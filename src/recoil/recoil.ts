import { atom } from 'recoil';

export const optionTitleState = atom<string>({
  key: 'optionTitleState',
  default: '전체 광고',
});
