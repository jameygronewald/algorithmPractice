const lengthOfLongestSubstring = (s) => {
    if (s.length < 1) return 0;
    if (s.length === 1) return 1;
    if (s.length === 2 && s[0] !== s[1]) return 2;
    const arr = s.split("");
    let longest = 1;
    let i = 0;
    while (i < arr.length) {
      let iterator = 1;
      let tempArr = [arr[i]];
      for (let j = i + 1; j < arr.length; j++) {
        const indexToCheck = tempArr.indexOf(arr[j]);
        if (indexToCheck === -1) {
          tempArr.push(arr[j]);
          longest = tempArr.length > longest ? tempArr.length : longest;
        } else {
            iterator += indexToCheck;
            break;
        }
      }
      i += iterator;
    }
    return longest;
  };
  
  console.log(lengthOfLongestSubstring("abcabcbb"));