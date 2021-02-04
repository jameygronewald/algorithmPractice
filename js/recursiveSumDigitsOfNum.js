// Write a recursive function that sums the digits of a natural number

const sumDigits = (num) => {
  if (num < 10) return num;

  const lastDigit = num % 10;
  const restOfDigits = Math.floor(num / 10);
  return sumDigits(restOfDigits) + lastDigit;
};

console.log(sumDigits(5848294));
console.log(sumDigits(1234));
