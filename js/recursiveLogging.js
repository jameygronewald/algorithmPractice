const printStaircase = numOfStairs => {
  if (numOfStairs === 1) return console.log('#');

  printStaircase(numOfStairs - 1);
  let level = '#'.repeat(numOfStairs);
  console.log(level);
};

printStaircase(10);
