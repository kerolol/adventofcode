import input from './input';

const numbersFormatted = input.split('\n').map(Number);

const getArrayPairToEqualSum = (array: Array<number>, size: number, sum: number) => {
  array = array.sort((a: number, b: number) => a - b);
  
  let lp = 0;
  let rp = size - 1;
  
  while (lp < rp) {
    if (array[lp] + array[rp] === sum) {
      return [array[lp], array[rp]];
    } else if (array[lp] + array[rp] < sum) {
      lp++;
    } else {
      rp--;
    }
  }
  
  return 0;
};

const pair = getArrayPairToEqualSum(numbersFormatted, numbersFormatted.length, 2020);

console.log(pair[0] * pair[1]);