export const useUnitCutData = (calc1: any) => {
  return `${calc1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}만원`;
};
