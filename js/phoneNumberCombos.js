// # Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// # A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// # Example 1:

// # Input: digits = "23"
// # Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// # Example 2:

// # Input: digits = ""
// # Output: []
// # Example 3:

// # Input: digits = "2"
// # Output: ["a","b","c"]

const letterCombinations = digits => {
  if (!digits) return [];

  const dict = new Map()
    .set('2', ['a', 'b', 'c'])
    .set('3', ['d', 'e', 'f'])
    .set('4', ['g', 'h', 'i'])
    .set('5', ['j', 'k', 'l'])
    .set('6', ['m', 'n', 'o'])
    .set('7', ['p', 'q', 'r', 's'])
    .set('8', ['t', 'u', 'v'])
    .set('9', ['w', 'x', 'y', 'z']);

  let combos = [''];

  for (let digit of digits) {
    const newCombos = [];
    for (let combo of combos) {
      for (let char of dict.get(digit)) {
        newCombos.push(combo + char);
      }
    }
    combos = newCombos;
  }
  return combos;
};

console.log(letterCombinations('234'));
