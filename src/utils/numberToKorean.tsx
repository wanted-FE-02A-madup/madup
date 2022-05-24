import getNumber from './getNumber';

export default function numberToKorean(number: number) {
  const inputNumber = Math.abs(number);
  const unitWords = ['', '만', '억', '조', '경'];
  const splitUnit = 10000;
  const splitCount = unitWords.length;
  const resultArray = [];
  let resultString = '';

  if (inputNumber < 10000) return getNumber(inputNumber);
  if (inputNumber >= 100000000) {
    resultString = String((inputNumber / 100000000).toFixed(1)) + unitWords[2];
    return resultString;
  }

  for (let i = 1; i < splitCount; i += 1) {
    let unitResult = (inputNumber % splitUnit ** (i + 1)) / splitUnit ** i;
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  for (let i = 0; i < resultArray.length; i += 1) {
    if (resultArray[i]) resultString = String(getNumber(resultArray[i])) + unitWords[i] + resultString;
  }

  return resultString;
}
