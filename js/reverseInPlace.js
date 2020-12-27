// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

// const reverseInPlace = arr => {
//     return arr.reduce((array, index) => {
//         array.unshift(index);
//         return array;
//     }, []);
// };

const reverseInPlace = arr => {
    for (let i = 0; i < arr.length/2; i++) {
        let value = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = value;
    }
    return arr;
};