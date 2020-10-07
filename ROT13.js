// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


const rot13 = message => {
    let newArray = [];
    let array = message.split('');
    let upperString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerString = 'abcdefghijklmnopqrstuvwxyz';
    let upperArray = upperString.split('');
    let lowerArray = lowerString.split('');
    for (let i = 0; i < array.length; i++) {
      let index = lowerArray.indexOf(array[i]);
      if (index < 0) {
        index = upperArray.indexOf(array[i]);
        if (index < 0) {
          newArray.push(array[i])
        } else {
          index += 13;
          if (index > 25) {
            index -= 26
          };
          newArray.push(upperString.charAt(index));
        }
      } else {
        index += 13;
        if (index > 25) {
          index -= 26
        }
        newArray.push(lowerString.charAt(index));
      }
    }
    return newArray.join('');
  }

  console.log(rot13('Hello my name is Jamey Gronewald and I\'m 28 years old.'))