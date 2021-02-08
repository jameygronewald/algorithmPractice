// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  let pal = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > i; j--) {
      if (pal.length >= j - i) {
        break;
      } else if (
        s.split('').slice(i, j).join('') ===
        s.split('').slice(i, j).reverse().join('')
      ) {
        pal = s.slice(i, j);
        break;
      }
    }
  }
  if (pal.length === 0 && s.length > 0) pal = s[0];
  return pal;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('fjeracecarfoeaefwa'));
console.log(longestPalindrome('fewa'));
