/**
 * NxM matrix
 * [
 *  [0, 1, 2],
 *  [2, 3, 4],
 *  [6, 1, 3]
 * ]
 *
 * [
 *  [1]
 * ]
 *
 * [
 *  [1, 2, 3, 4],
 *  [5, 6, 7, 8],
 *  [9, 10, 11, 12]
 * ]
 *
 * I: Matrix
 * O: Integer
 * C: Matrix must be at least 1x1
 *    Non-negative integers
 * E: None
 *
 * 1. Start point, total carrots
 * 2. Find the values at up, right, down, left
 *    Be careful about edges, in particular when the row is undefined
 *    Represent up, right, down, and left as objects with value, row, and col properties
 *    Only create an up or down if the current row minus 1 and plus 1 are valid, respectively
 *    Only create left or right if current col minus 1 and plus 1 are valid, respectively
 * 3. Put those spaces in an array
 * [
 *  {
 *    value: 3,
 *    row: 0,
 *    col: 2
 *  },
 *  {
 *    value: 8,
 *    row: 1,
 *    col: 3
 *  },
 *  {
 *    value: 11,
 *    row: 2,
 *    col: 2
 *  },
 *  {
 *    value: 6,
 *    row: 1,
 *    col: 1
 *  },
 *
 * ]
 * 4. Iterate over the array, and find the max value using reduce
 * 5. Add the max value to the total carrots, keep note of the row and col of the max value
 * {value: 11, row: 2, col: 2}
 * 6. Toggle that space to 0
 * 7. Call function again recursively, and add the result to total carrots
 */

/**
 * HELPER FUNCTION TO FIND CENTER
 * Scenarios:
 *  Even num of rows and columns (4 potential spaces)
 *  Even rows, odd columns (2 potential spaces)
 *  Even columns, odd rows (2 potential spaces)
 *  Odd rows, odd columns (1 potential space)
 * Empty array
 *  Based on the scenario, push objects into array with value, row, col
 * Iterate over possibilities, return object with max val
 */

const getNumberOfCarrots = (matrix, startPos=null) => {
  if (!startPos) {
    // Find initial starting position
    startPos = getMiddle(matrix);
  }

  let totalCarrots = startPos.value;

  let nextSpace = findNextSpace(matrix, startPos);

  // BASE CASE - rabbit sleeps
  if (nextSpace === 0) {
    return totalCarrots;
  }

  matrix[startPos.row][startPos.col] = 0;

  totalCarrots += getNumberOfCarrots(matrix, nextSpace);

  return totalCarrots;
};

function validateSpace(matrix, row, col) {
  if (row <= matrix.length - 1 && row >= 0 && col <= matrix[0].length - 1 && col >= 0) {
    return true;
  }
  return false;
}

// Find max
function findNextSpace(matrix, pos) {
  let directions = [];

  // Check up and down
  for (let rowDiff = -1; rowDiff <= 1; rowDiff += 2) {
    let newRow = pos.row + rowDiff;
    if (validateSpace(matrix, newRow, pos.col)) {
      directions.push({
        value: matrix[newRow][pos.col],
        row: newRow,
        col: pos.col
      });
    }
  }

  // Check left and right
  for (let colDiff = -1; colDiff <= 1; colDiff += 2) {
    let newCol = pos.col + colDiff;
    if (validateSpace(matrix, pos.row, newCol)) {
      directions.push({
        value: matrix[pos.row][newCol],
        row: pos.row,
        col: newCol
      });
    }
  }

  if (directions.length === 0) {
    return 0;
  }

  let next = directions.reduce((acc, curr) => {
    return curr.value > acc.value ? curr : acc;
  });

  return next.value !== 0 ? next : 0;
};

function getMiddle(matrix) {
  let evenRows = matrix.length % 2 === 0;
  let evenCols = matrix[0].length % 2 === 0;

  let possibleRows = evenRows ? [matrix.length / 2, (matrix.length / 2) - 1] : [Math.floor(matrix.length / 2)];
  let possibleCols = evenCols ? [matrix[0].length / 2, (matrix[0].length / 2) - 1] : [Math.floor(matrix[0].length / 2)];

  let startOptions = [];

  for (let i = 0; i < possibleRows.length; i++) {
    for (let j = 0; j < possibleCols.length; j++) {
      startOptions.push({
        value: matrix[possibleRows[i]][possibleCols[j]],
        row: possibleRows[i],
        col: possibleCols[j]
      });
    }
  }

  let start = startOptions.reduce((acc, curr) => {
    return curr.value > acc.value ? curr : acc;
  });

  return start;

};


let matrix = [
  [1, 2, 3, 4],
  [0, 1, 0, 5],
  [0, 4, 1, 6]
];

console.log(getNumberOfCarrots(matrix));

// Test Suite
const isEqual = (actual, expected, testName) => {
  if (actual === expected) {
    console.log(`Test ${testName} passed.`)
  } else {
    console.log(`Test ${testName} FAILED expected ${expected} but got ${actual}.`);
  }
};

// Case 1 - matrix with true center
let matrix1 = [
  [1, 2, 3, 4],
  [0, 1, 0, 0],
  [0, 4, 1, 5]
];

let actual = getNumberOfCarrots(matrix1);
let expected = 11;
isEqual(actual, expected, 'Returns correct number of carrots when matrix has true center');

