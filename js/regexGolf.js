// in as few characters as possible. Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a given pattern, and only that pattern.

// For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned. When your expression works, see whether you can make it any smaller.

const verify = (num, regexp, yes, no) => {
  // Ignore unfinished exercises
  if (regexp.source == '...') return;
  for (let str of yes) {
    if (!regexp.test(str)) {
      return console.log(`Failure to match '${str}'`);
    }
  }
  for (let str of no) {
    if (regexp.test(str)) {
      return console.log(`Unexpected match for '${str}'`);
    }
  }
  return console.log(num, 'Success!');
};

/* *** FILL IN THE REGULAR EXPRESSIONS *** */

// car and cat
verify(1, /ca[rt]/, ['my car', 'bad cats'], ['camper', 'high art']);

// pop and prop
verify(2, /pr?op/, ['pop culture', 'mad props'], ['plop', 'prrrop']);

// ferret, ferry, and ferrari
verify(3, /ferr[a,e,y].*/, ['ferret', 'ferry', 'ferrari'], ['ferrum', 'transfer A']);

// Any word ending in ious
verify(
  4,
  /ious\b/,
  ['how delicious', 'spacious room'],
  ['ruinous', 'consciousness']
);

// A whitespace character followed by a period, comma, colon, or semicolon
verify(5, /\s[.,:;]/, ['bad punctuation .'], ['escape the period']);

// A word longer than six letters
verify(
  6,
  /\w{7}/,
  ['Siebentausenddreihundertzweiundzwanzig'],
  ['no', 'three small words']
);

// A word without the letter e (or E)
verify(
  7,
  /\b[^\We]+\b/i,
  ['red platypus', 'wobbling nest'],
  ['earth bed', 'learning ape', 'BEET']
);
