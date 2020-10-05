// Write the function getGrowth(), which accepts an arbitrary number of comma separated integers and returns the difference between each subsequent and previous number in the series, as a string.

// The function must return a string value where each "growth instance" is separated by a comma followed by a space character.

// Example 1:
// getGrowth(1, 2, 3)  // returns the string: "1 (+0, +0%), 2 (+1, +100%), 3 (+1, +50%)"
// In the above example the returned string says that:

// The first number: 1, is not higher or lower than the previous number (because it is the first number in the queue), therefore both the difference and the percent difference are zero.
// The second number: 2, is "+1". I.e. the difference between the second and the first number in the series.
// The third number: 3, is also "+1". I.e. the difference between the third and second number in the series.
// The format of the string must be on the following format: current (diff diffPercent)... and so on separated by ", " (a comma and a space).

// Where

// current is the current integer.
// diff is the difference between the current integer and the previous integer (if it is the first integer the previous integer is assumed to be zero).
// And diffPercent is the rounded percentual difference between the current integer and the previous integer.

const getGrowth = (...args) => {
  let string = "";
  let netGrowth = "";
  let percGrowth = "";
  for (let i = 0; i < args.length; i++) {
    if (i === 0) {
      netGrowth = "+0";
      percGrowth = "+0%";
    } else {
      let operator = "";
      let difference = args[i] - args[i - 1];
      difference < 0 ? (operator = "") : (operator = "+");
      netGrowth = operator + difference;
      percGrowth =
        operator + Math.round((difference / args[i - 1]) * 100) + "%";
    }
    string += `${args[i]} (${netGrowth}, ${percGrowth}), `;
  }
  finalString = string.slice(0, -2);
  return finalString;
};
