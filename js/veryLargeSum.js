// Sum large numbers

bigNumberArray = [1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010, 1007514041, 1007548981, 1004402249]

const aVeryBigSum = array => {
    let placeholder = '';
    for (let i = 1; i < array.length; i++) {
        let firstNumberArray = array[i - 1].toString().split('');
        let secondNumberArray = array[i].toString().split('');
        if (firstNumberArray.length < secondNumberArray.length) {
            let temp;
            temp = firstNumberArray;
            firstNumberArray = secondNumberArray;
            secondNumberArray = temp;
        }
        if (placeholder !== '') {
            firstNumberArray = placeholder.split('');
            placeholder = '';
        }
        let carry = 0;
        for (let j = 0; j < firstNumberArray.length ; j++) {
            let numOne = parseInt(firstNumberArray[firstNumberArray.length - 1 - j]);
            let numTwo = parseInt(secondNumberArray[secondNumberArray.length - 1 - j]);
            numTwo = (numTwo) ? numTwo : 0;
            let sum = parseInt(carry) + numOne + numTwo;
            let sumString = sum.toString();
            let newDigit = sumString[sumString.length - 1];
            carry = sumString[sumString.length - 2];
            carry = (carry) ? carry : 0;
            placeholder = (j === firstNumberArray.length - 1) ? sumString + placeholder : newDigit + placeholder;
        }
    }      
    return parseInt(placeholder);
}

console.log(aVeryBigSum(bigNumberArray));