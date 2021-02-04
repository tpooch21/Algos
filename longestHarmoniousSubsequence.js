/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time, O(n) space
const findLHS = function (nums) {
  const numCounts = new Map();
  let maxHS = 0;
  for (let num of nums) {
    numCounts.set(num, (numCounts.get(num) || 0) + 1);
  }

  for (const [num, count] of numCounts) {
    if (numCounts.has(num + 1)) {
      const hsTotal = numCounts.get(num) + numCounts.get(num + 1);
      maxHS = Math.max(maxHS, hsTotal);
    }
  }

  return maxHS;
};
