// Given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const findShortest = str =>
  str
    .split(' ')
    .reduce(
      (shortest, word) => (word.length > shortest ? shortest : word.length),
      Infinity
    );

// tests
console.log(findShortest('four letter words describe naughty things')); //4
console.log(
  findShortest('bitcoin may take over the world maybe who knows perhaps')
); //3
console.log(
  findShortest(
    'AS it turns out random test cases are easier than writing out basic ones'
  )
); // 2
console.log(findShortest('A one and a two and a gazillion words to count')); //1
