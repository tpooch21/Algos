const diagonalSort = function (mat) {
  if (mat.length === 1 || mat[0].length === 1) {
    return mat;
  }

  const result = mat.map((row) => Array(row.length).fill(0));

  for (let i = 0; i < mat.length; i++) {
    const endCol = i === 0 ? mat[0].length : 1;
    for (let j = 0; j < endCol; j++) {
      const sorted = extractAndSort(i, j, mat);
      addToResult(i, j, result, sorted);
    }
  }

  return result;
};

const extractAndSort = (r, c, matrix) => {
  const nums = [];
  while (r < matrix.length && c < matrix[0].length) {
    nums.push(matrix[r][c]);
    r++;
    c++;
  }
  return nums.sort((a, b) => a - b);
};

const addToResult = (r, c, matrix, nums) => {
  let idx = 0;
  while (idx < nums.length) {
    matrix[r][c] = nums[idx];
    r++;
    c++;
    idx++;
  }
};

/*
  sort each diagonal, return resulting matrix
  I: n x m matrix
  O: n x m matrix with each diagonal sorted

  walk through the entire top row
  for all subsequent rows, only use col 0 as starting point

  output matrix filled with 0's

  helper(r, c, matrix)
    walk through diagonal
    push all nums into array
    return array

  helper to toggle (r, c, empty, els)
    while loop that increase r, c, and el index
    toggle current el onto current space in matrix
*/
