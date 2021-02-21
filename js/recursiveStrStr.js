// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:
// Input: haystack = "", needle = ""
// Output: 0

// Constraints:
// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;

  return compareStrings(haystack, needle, (returnIndex = 0));
};

const compareStrings = (string, needle, returnIndex) => {
  const start = needle[0];
  let i = string.indexOf(start);

  if (i === -1) return -1;
  else returnIndex += i;

  const stringToCompare = string.slice(i, i + needle.length);

  if (stringToCompare === needle) return returnIndex;
  else returnIndex++;

  return compareStrings(string.slice(i + 1), needle, returnIndex);
};

console.log(strStr('hello', 'll'));
console.log(strStr('Mississippi', 'ipp'));
console.log(strStr('Mississippi', 'ippp'));
console.log(
  strStr('aafeiwoafwaaaaf;eowjfwoia;fjwo;jao;aaaf;ejoabcdef', 'abcdef')
);
