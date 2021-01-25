/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  let res = nums[0];
  let l = 0;
  let r = 0;

  for (let i = 0; i < nums.length; i++) {
    l = (!l ? 1 : l) * nums[i];
    r = (!r ? 1 : r) * nums[nums.length - 1 - i];
    res = Math.max(res, l, r);
  }

  return res;
};

/*
  I: nums - array of ints
  O: int - product of largest product subarray
  E: single num, or no nums
      return 0 or first el

  BF
    use every val as a starting point
    find max product that can come from that starting point
    compare to overall max product
    O(n^2) time O(1) space


*/
