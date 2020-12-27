// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]


const longestRepetition = s => {
  if (s) {
    let array = s.split("");
    let char = array[0];
    let length = 1;
    let temp = 1;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[i + 1]) {
        temp++;
        if (temp > length) {
          length = temp;
          char = array[i];
        }
      } else {
        temp = 1;
      }
    }
    return [char, length];
  } else {
    return ["", 0];
  }
}


console.log(longestRepetition('aajjddijiikiljjjjjmnnsiodlllllllllplisejaajsfknknn'))