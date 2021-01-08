var search = function (nums, target) {
  let [l, r] = [0, nums.length - 1];

  while (l < r) {
    const mid = ~~((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[l] < nums[mid] && target >= nums[l] && target < nums[mid])
      r = mid - 1;
    else if (nums[l] > nums[mid] && (target < nums[mid] || target >= nums[l]))
      r = mid - 1;
    else l = mid + 1;
  }

  return nums[l] === target ? l : -1;
};

/**
 *   Binary search:
    [3, 4, 5, 6, 7, 0, 1, 2, 2.5], 0
    [7, 0, 1, 2, 2.5]

    when splitting into left and right, one or more slices will be sorted
    if one slice is found to contain the rotation point (not sorted)
      target value will be in there if it's greater than start or less than end

    continue on left if:
      start < mid and target falls within range
      start > mid and target is less than end or greater than start
 */
