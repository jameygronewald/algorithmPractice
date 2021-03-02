// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// const validatePIN = pin => {
//     const pinRegex = /^(\d{4}|\d{6})$/;
//     return pinRegex.test(pin);
// };

const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);

console.log(validatePIN('1234')); //true
console.log(validatePIN('103456')); //true
console.log(validatePIN('1')); //false
console.log(validatePIN('12345')); //false
console.log(validatePIN('22@%4#5$')); //false
console.log(validatePIN('1.22')); //false
console.log(validatePIN('a365')); //false
