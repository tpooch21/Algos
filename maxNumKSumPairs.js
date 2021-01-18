const maxOperations = function (nums, k) {
  const pairs = {};
  let operationsCount = 0;
  nums.forEach((num) => {
    if (num < k) {
      const pair = k - num;
      if (pairs[pair]) {
        operationsCount++;
        pairs[pair]--;
      } else {
        pairs[num] = (pairs[num] || 0) + 1;
      }
    }
  });

  return operationsCount;
};
