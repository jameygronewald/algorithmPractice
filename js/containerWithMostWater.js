// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
// Example 3:

// Input: height = [4,3,2,1,4]
// Output: 16

/**
 * @param {number[]} height
 * @return {number}
 */

// BRUTE FORCE
// const maxArea = height => {
//   let max = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = 1; j < height.length; j++) {
//       const shorter = height[i] >= height[j] ? height[j] : height[i];
//       const width = j - i;

//       const area = shorter * width;
//       max = max >= area ? max : area;
//     }
//   }
//   return max;
// };

const maxArea = height => {
  let max = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const width = end - start;
    let shorter;
    if (height[end] >= height[start]) {
      shorter = height[start];
      start++;
    } else {
      shorter = height[end];
      end--;
    }

    const area = width * shorter;
    max = area > max ? area : max;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
