const fibonaccis = n => {
  if (n === 1) return 0;
  else if (n === 2) return 1;
  else return fibonaccis(n - 2) + fibonaccis(n - 1);
};

console.log(fibonaccis(6));
console.log(fibonaccis(10));
