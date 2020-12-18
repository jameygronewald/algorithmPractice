// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

const permutations = string => {
    const array = [];
    if (string.length === 1) {
      array.push(string);
      return array;
    }
    for (let i = 0; i < string.length; i++) {
      let selectedChar = string[i];
      let remainingCharacters = string.slice(0, i) + string.slice(i + 1, string.length);
      
      if (string.indexOf(selectedChar) != i) {
        continue;
      }
      
      for (let perm of permutations(remainingCharacters)) {
        array.push(selectedChar + perm)
      }
      
    }
    
    return array
  }


console.log(permutations('a'));
console.log(permutations('ab'));
console.log(permutations('aabb'));
console.log(permutations('fjeis'));
console.log(permutations('aaaaaaaab'));
