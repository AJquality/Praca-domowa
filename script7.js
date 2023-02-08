function reduceExample2() {
  const numbers = [15.5, 2.3, 1.1, 4.7];
  const number = numbers.reduce(getSum, 0);

  function getSum(total, num) {
    return total + Math.round(num);
  }
}
