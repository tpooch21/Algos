const checkAdjacentSpaces = (matrix, space) => {
  let adjacents = [];

  // Check up
  if (space.row - 1 >= 0 && matrix[space.row - 1][space.col] === 1) {
    matrix[space.row - 1][space.col] = 0;
    adjacents.push({row: space.row - 1, col: space.col});
  }

  // Check right
  if (space.col + 1 < matrix[0].length && matrix[space.row][space.col + 1] === 1) {
    matrix[space.row][space.col + 1] = 0;
    adjacents.push({row: space.row, col: space.col + 1});
  }

  // Check down
  if (space.row + 1 < matrix.length && matrix[space.row + 1][space.col] === 1) {
    matrix[space.row + 1][space.col] = 0;
    adjacents.push({row: space.row + 1, col: space.col});
  }

  // Check left
  if (space.col - 1 >= 0 && matrix[space.row][space.col - 1] === 1) {
    matrix[space.row][space.col - 1] = 0;
    adjacents.push({row: space.row, col: space.col - 1});
  }

  return adjacents;
};

const getSizeOfRiver = (matrix, space) => {
  let size = 1;

  let connections = checkAdjacentSpaces(matrix, space);

  // BASE CASE - no river beyond this point
  if (connections.size === 0) {
    return size;
  }

  connections.forEach(conn => {
    size += getSizeOfRiver(matrix, conn);
  });

  return size;
};

const getAllRiverSizes = (matrix) => {
  let riverSizes = []; // [2, 1, 5]

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
        riverSizes.push(getSizeOfRiver(matrix, {row: i, col: j}));
      }
    }
  }

  return riverSizes;
};

const matrix1 = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

console.log(getAllRiverSizes(matrix1));
// [25]

/**
 * [
 *  [0, 0, 0, 0, 0],
 *  [0, 0, 0, 0, 0],
 *  [0, 0, 0, 0, 1],
 *  [1, 0, 0, 0, 1],
 *  [1, 0, 0, 0, 0]
 * ]
 *
 * [8, 2, 3, 4]
 *
 * I: matrix
 * O: array of sizes
 * C: none
 * E: empty array
 *
 * checkAdjacentSpaces (grid, currSpace)
 *    check up, right, down, left for validity
 *    return an array of spaces that have 1s
 *
 * getSizeOfRiver (grid, currSpace)
 *    get adjacent spaces, which will return an array
 *    iterate over each space
 *    BASE CASE: no adjacent spaces returned
 *      return 1
 *    in each new exec context, start with rivCount at 1
 *    every time we have a new current space, toggle the space to a 0
 *
 * In main function body, iterate over matrix
 * If the space contains a 1, count the size of the river
 *    call getSizeOfRiver(matrix, curr)
 *    push the result to a riverSizes array
 * return riverSizes
 *
 * Space: O(1)
 * Time: O(hw)
 *
 *
 */