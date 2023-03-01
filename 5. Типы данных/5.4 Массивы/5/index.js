const getMaxSubSum = (arr) => {
  let maxSum = 0;
  let sum = 0;

  for (let num of arr) {
    sum += num;
    maxSum = maxSum < sum ? sum : maxSum;

    if (num < 0) {
      sum = 0;
    }
  }
  return maxSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
