/**
 * @param {number} num
 * @return {string}
 */

const intToRoman = num => {
  return makeRoman(parseInt(num), '');
};

const makeRoman = (num, romanString) => {
  let map = new Map()
    .set(1, 'I')
    .set(4, 'IV')
    .set(5, 'V')
    .set(9, 'IX')
    .set(10, 'X')
    .set(40, 'XL')
    .set(50, 'L')
    .set(90, 'XC')
    .set(100, 'C')
    .set(400, 'CD')
    .set(500, 'D')
    .set(900, 'CM')
    .set(1000, 'M');

  if (map.has(num)) return map.get(num);

  const powerOfTen = num.toString().length - 1;
  const divisor = Math.pow(10, powerOfTen);
  let remainder = num % divisor;
  let base = num - remainder;

  if (base === num) {
    remainder = divisor;
    base = num - remainder;
  }

  romanString +=
    makeRoman(base, romanString) + makeRoman(remainder, romanString);
  return romanString;
};

console.log(intToRoman(1994));
console.log(intToRoman(800));
console.log(intToRoman(3));
