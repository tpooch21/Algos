const subarraySum = function (nums, k) {
  const prefixes = new Map();
  prefixes.set(0, 1);

  let runningSum = 0;
  return nums.reduce((acc, curr) => {
    runningSum += curr;
    if (prefixes.has(runningSum - k)) {
      acc += prefixes.get(runningSum - k);
    }
    prefixes.set(runningSum, (prefixes.get(runningSum) || 0) + 1);
    return acc;
  }, 0);
};

/*

  [1, 1, 6, -6, 2, 3, 1, 2, 1], 7
  nested for loops
  find sum as we go, increase count for every sum that hits k

  O(n) time and space:
    keep track of prefix sums in map
    for each current el, add to running sum, check if sum - k exists in map
      if it does, increase result total by count stored at sum - k in map
      either way, add sum - k to map, keep track of counts
*/
