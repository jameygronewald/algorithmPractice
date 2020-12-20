const isPalindrome = (str) => {
  str = str.toLowerCase();
  str = str.replace(/[\s]/g, "");
  if (str.length === 1) return true;

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("Taco cat"));
console.log(isPalindrome("Taco ct"));
console.log(isPalindrome("racecar"));
console.log(
  isPalindrome("574839 fewa jiop po  ij  a w e f 938   4 7          5")
);
