const lengthOfLongestSubstring = (s) => {
  if (s.length < 1) return 0;
  if (s.length === 1) return 1;
  if (s.length === 2 && s[0] !== s[1]) return 2;
  const arr = s.split("");
  let longest = 1;
  for (let i = 0; i < arr.length; i++) {
    let tempArr = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      if (!tempArr.includes(arr[j])) {
        tempArr.push(arr[j]);
        longest = tempArr.length > longest ? tempArr.length : longest;
      } else break;
    }
  }
  return longest;
};

console.log(lengthOfLongestSubstring("aab"));
