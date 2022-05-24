import getNumber from './getNumber';

export default function numberToKorean(number: number) {
  const inputNumber = Math.abs(number);
  const unitWords = ['', '만', '억', '조', '경'];
  const splitUnit = 10_000;
  const splitCount = unitWords.length;
  const resultArray = [];
  let resultString = '';

  if (inputNumber < 10_000) return getNumber(inputNumber);
  if (inputNumber < 100_000) return String((inputNumber / 10_000).toFixed(1)) + unitWords[1];
  if (inputNumber >= 100_000_000) {
    resultString = String((inputNumber / 100_000_000).toFixed(1)) + unitWords[2];
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
