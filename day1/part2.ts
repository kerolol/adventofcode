import input from './input';

const numbersFormatted = input.split('\n').map(Number);

const getTripletToEqualSum = (array: Array<number>, size: number, sum: number) => {
  let lp, rp;
  
  array = [].slice.call(array).sort((a: number, b: number) => a - b);
  
  for (let i = 0; i < size - 2; i++) {
    lp = i + i;
    rp = size - 1;
    
    while (lp < rp) {
      if (array[i] + array[lp] + array[rp] === sum) {
        return [array[i], array[lp], array[rp]];
      } else if (array[i] + array[lp] + array[rp] < sum) {
        lp++;
      } else {
        rp--;
      }
    }
  }
  
  return 0;
};

const triplet = getTripletToEqualSum(numbersFormatted, numbersFormatted.length, 2020);

console.log(triplet, triplet[0] + triplet[1] + triplet[2], triplet[0] * triplet[1] * triplet[2]);