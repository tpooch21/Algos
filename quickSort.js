const quickSort = (array) => {
  if (array.length <= 1) return array;

  let pivot = array[array.length - 1];
  const leftSub = [];
  const rightSub = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= pivot) leftSub.push(array[i]);
    else rightSub.push(array[i]);
  }

  return [...quickSort(leftSub), pivot, ...quickSort(rightSub)];
};

console.log(quickSort([67, 23, 1, 45, 38, 12, 10, 16, 67]));
// [5, 2, 1, 3, 3, 4]
// [6, 8]

/**
 * pivot element
 * partition list into 2:
 *  greater than pivot
 *  less than pivot
 *
 * base case
 *  1 element, just return
 *
 * pick an element
 * iterate over array, add less than or equal to left, greater than to right
 * once we hit our base case and return, combine the two and return
 *
 * [5, 2, 1, 3, 6, 8, 3, 4, 5]
 * 4
 * [2, 1, 3, 3, 4] [5, 6, 8, 5]
 *
 * 4
 * [2, 1, 3, 3, 4]
 *
 * 5
 * [5, 5], [6, 8]
 *
 * 5
 * [] -> return []
 *
 *
 */
