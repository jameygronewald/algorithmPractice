// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

const lookAndSay = n => {
    let numArray = n.toString().split('');
    let i = 0;
    let accumulator = 1;
    let newArray = [];
    while (i < numArray.length) {
        if (numArray[i] === numArray[i + 1]) {
            accumulator++;
        } else {
            newArray.push(accumulator, numArray[i]);
            accumulator = 1;
        };
        i++;
    };
    return parseInt(newArray.join(''));
};

console.log(lookAndSay(11222555333332));
console.log(lookAndSay(8777336667488900000));