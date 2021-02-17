// Description:
// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.
// Input: s = "patrcJiaSv" indices = [8, 3, 9, 6, 5, 0, 7, 1, 4, 2]
// Output: "JavaScript"

// SOLUTION I GAVE IN INTERVIEW
// const shuffleString = (string, indices) => {
//   let output = '';
//   const map = new Map();

//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];
//     const key = indices[i];
//     map.set(key, char);
//   }

//   for (let i = 0; i < string.length; i++) {
//     output += map.get(i);
//   }
//   return output;
// };

// Simpler solution w/single loop and w/o Map
const shuffleString = (string, indices) => {
  let output = '';

  for (let i = 0; i < string.length; i++) {
    const indexToAppend = indices.indexOf(i);
    output += string[indexToAppend];
  }
  return output;
};

console.log(shuffleString('patrcJiaSv', [8, 3, 9, 6, 5, 0, 7, 1, 4, 2]));
