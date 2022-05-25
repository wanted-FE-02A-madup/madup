export const useUnitCutData = (calc1: number) => {
  return `${calc1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}만원`;
};
