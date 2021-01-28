// Write a function that takes a num argument and returns the path to that number by starting at 1 and adding 5 or multiplying by 3; if there is no such number, the function returns null;

const findSolution = (num) => {
  const search = (currentValue, history) => {
    if (currentValue === num) return history;
    else if (currentValue > num) return null;
    else {
      return (
        search(currentValue + 5, `(${history} + 5)`) ||
        search(currentValue * 3, `(${history} * 3)`)
      );
    }
  };
  return search(1, "1");
};

console.log(findSolution(15));
