// ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. The last digit can be either on the range 0 to 9 or the letter 'X' used to indicate a value of 10.

// For an ISBN-10 to be valid, the sum of the digits multiplied by their position has to equal zero modulo 11. For example, the ISBN-10: 1112223339 is valid because:

// (((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) %

const validISBN10 = isbn => {
  if (isbn.length < 10) {
    return false;
  }
  const array = isbn.split("");
  let total = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let value = array[i] * (i + 1);
    total += value;
  }
  if (array[9] === "X") {
    let value = 100;
    total += value;
  } else {
    let value = array[9] * 10;
    total += value;
  }
  return total % 11 == 0 ? true : false;
};

console.log(validISBN10("1112223339"))