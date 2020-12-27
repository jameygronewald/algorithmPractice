// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

// const titleCase = str => {
//     let i = 0;
//     let arr = str.split('');
//     let newArray = [];
//     while (i < arr.length) {
//         if (arr[i - 1] === ' ' || arr[i - 1] === undefined) {
//             newArray.push(arr[i].toUpperCase());
//             i++;
//         }
//         else {
//             newArray.push(arr[i]);
//             i++;
//         }
//     }
//     return newArray.join('');
// };

const titleCase = str => {
    return str.split(' ')    
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
};