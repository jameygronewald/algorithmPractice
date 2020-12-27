const zigZag = (s, numRows) => {
  if (s.length < 3 || numRows === 1) return s;

  let matrix = [];

  for (let i = 0; i < numRows; i++) {
    matrix[i] = [s[i]];
  }

  let flipper = numRows - 1;
  let diag = true;
  let currArray = numRows - 2;
  for (let i = numRows; i < s.length; i++) {
    if (i % flipper === 0) diag = !diag;
    matrix[currArray].push(s[i]);
    diag === true ? currArray-- : currArray++;
  }
  return matrix.reduce((arr, smallArr) => arr.concat(smallArr), []).join("");
};

// SIMPLIFIED
const zigZagTwo = (s, numRows) => {
  if (s.length < 3 || numRows === 1) return s;

  let strings = [];

  strings[0] = s[0];

  let flipper = numRows - 1;
  let diag = false;
  let stringToChange = 1;

  for (let i = 1; i < s.length; i++) {
    if (i % flipper === 0) diag = !diag;

    strings[stringToChange] = strings[stringToChange]
      ? (strings[stringToChange] += s[i])
      : s[i];

    diag === true ? stringToChange-- : stringToChange++;
  }
  return strings.join("");
};

console.log(zigZag("PAYPALISHIRING", 3));

console.log(zigZag("PAYPALISHIRING", 4));
