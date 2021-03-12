/* You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1. */

function findEvenIndex(arr) {
    let sumA;
    let sumB;
    for(let i = 0; i < arr.length; i++) {
      sumA = 0;
      sumB = 0;
      for(let j = 1; (i -j) >= 0; j++) {
        sumA += arr[i - j];
      }
      
      for(let k = 1; (i + k) < arr.length; k++) {
        sumB += arr[i + k];
      }
      
      if(sumA == sumB) return i;
    }
    return -1;
}