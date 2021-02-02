const flatten = (arrayOfArrays) =>
  arrayOfArrays.reduce((flattened, array) => flattened.concat(array), []);

console.log(
  flatten([
    [1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
  ])
);
