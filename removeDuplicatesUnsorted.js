// Remove duplicates from an unsorted array in O(N) time

const removeDuplicatesUnsorted = arr => {
    const dict = {};

    for (let i = 0; i < arr.length; i++) {
        if (!dict[arr[i]]) {
            dict[arr[i]] = arr[i];
        }
    }
    return Object.values(dict);
}
const removeDuplicatesUnsortedTwo = arr => {
    const set = new Set(arr);
    return [...set];
}



console.log(removeDuplicatesUnsorted([3, 2, 9, 9, 9, 6, 3, 6, 8, 8, 5, 34, 1, 0, 0, 6, 3, 8, 1, 34, 4, 6, 6, 7, 8, 5, 4, 3,0]))

console.log(removeDuplicatesUnsortedTwo([3, 2, 9, 9, 9, 6, 3, 6, 8, 8, 5, 34, 1, 0, 0, 6, 3, 8, 1, 34, 4, 6, 6, 7, 8, 5, 4, 3,0]))