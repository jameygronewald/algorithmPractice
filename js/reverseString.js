// Write code to return a new string with all of the characters in the string reversed.
// You may NOT use the built-in reverse method

const reverse = str => str.split("").reduce((string, letter) => letter + string, "");