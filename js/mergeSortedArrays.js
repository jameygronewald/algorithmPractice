// Write code to merge two sorted arrays into a new sorted array

const mergeSortedArrays = (arr1, arr2) => {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  let newArray = [];
  let j = 0;
  for (let i = 0; i < arr1.length; i++) {
    while (j < arr2.length) {
      if (arr2[j] > arr1[i]) {
        newArray.push(arr1[i]);
        break;
      } else if (arr2[j] === arr1[i]) {
        newArray.push(arr2[i]);
        newArray.push(arr1[j]);
        j++;
        break;
      } else {
        newArray.push(arr2[j]);
        j++;
      }
    }
    if (j >= arr2.length) {
      newArray = [...newArray, ...arr1.slice(i)];
      return newArray;
    }
  }
  if (arr2[j]) {
    newArray = [...newArray, ...arr2.slice(j)];
    return newArray;
  }
  return newArray;
};

console.log(mergeSortedArrays([12, 13, 20, 51], [8, 14, 40, 41, 43, 50]));
console.log(
  mergeSortedArrays(
    [1, 5, 23, 63, 143, 213, 634, 4443, 19840],
    [8, 14, 40, 41, 43, 50]
  )
);
