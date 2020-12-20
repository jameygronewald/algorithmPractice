// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const isValid = s => {
    s = s.replace(/[a-zA-Z0-9\s]/g, '');

    if (s[0] !== '(' && s[0] !== '[' && s[0] !== '{') {
        return false   
    }
    
    const array = s.split('');
    let i = 1;
    while (i < array.length) {
        if ((array[i] === ')' && array[i - 1] === '(') || (array[i] === ']' && array[i - 1] === '[') || (array[i] === '}' && array[i - 1] === '{')) {
            array.splice(i - 1, 2);
            i--;
        } else {
            i++;
        }
    }
    return array.length === 0
};

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
console.log(isValid('{123[hello]     }'))
