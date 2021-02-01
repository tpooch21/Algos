/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < nums[r]) r = mid;
    else l = mid + 1;
  }

  return nums[l];
};

/*
  I: sorted array of ints, rotated between 1 and n times
  O: minimum element
  C: ints unique, at least one el
  E: none

  [4, 5, 6, 7, 0, 1, 2]


  [5, 6, 7, 1, 2, 3, 4]

  if mid is greater than end
    start = mid + 1
  if mid is less than or equal to start
    end = mid
  else
    return start

  [11, 13, 15, 17]
  start = 11
  end = 17
  mid = 13
*/
