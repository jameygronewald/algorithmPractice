// Write code to create a function that accepts a string and returns an acronym for the given string

// const acronymBuilder = (str) => {
//     let arr = str.split(' ');
//     let acronymArray = arr.map(word => word[0].toUpperCase());
//     return acronymArray.join('');
// };

const acronymBuilder = str =>
  (acronym = str
    .split(" ")
    .reduce((acr, word) => acr + word[0].toUpperCase(), ""));