//Get the index of a random number contained in an array

const stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
const random_value = stuff[ Math.floor( Math.random() * 14 ) ];

let i = 0;
while (i < stuff.length) {
    if (stuff[i] === random_value) {
        console.log(`Random index is ${i}
Value is ${stuff[i]}`)
        return
    }
    i++
};

