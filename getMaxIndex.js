/**
 * Get the index of the max value of an array
 * [1, 2, 3] => 2
 * If multiple, return any of the indices at random
 * [1, 3, 2, 3, 3] => either 1, 3, or 4 at random
 *
 * multiple = 3
 * max = 3
 *
 *
 * [1, 3, 4]
 * 3
 *
 * I: Array of integers
 * O: Integer
 * C: None
 * E: None
 */

const getMaxIndex = (nums) => {
  let maxCounter = 1;
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxCounter = 1;
    } else if (nums[i] === max) {
      maxCounter++;
    }
  }

  let randomMax = Math.floor(Math.random() * (maxCounter) + 1);
  let maxTracker = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
      maxTracker++;
    }

    if (maxTracker === randomMax) {
      return i;
    }
  }
};

const testArr = [1, 3, 2, 3, 3];
console.log(getMaxIndex(testArr)); // 1, 3, or 4