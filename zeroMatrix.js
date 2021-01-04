const zeroOutMatrix = (matrix) => {
  if (matrix.length === 0 || matrix[0].length === 0) return matrix;

  let firstCol = false;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
    }

    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // Exclude first row and col, those are to be handled separately
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0 && (matrix[0][j] === 0 || matrix[i][0] === 0))
        matrix[i][j] = 0;
    }
  }

  if (matrix[0][0] === 0) {
    toggleFirstRow(matrix);
  }

  if (firstCol) {
    toggleFirstCol(matrix);
  }

  return matrix;
};

const toggleFirstCol = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][0] = 0;
  }
};

const toggleFirstRow = (matrix) => {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[0][j] = 0;
  }
};

const matrix = [
  [1, 8, 3, 10],
  [4, 7, 6, 11],
  [0, 8, 4, 12],
  [13, 0, 15, 16],
];

console.log(zeroOutMatrix(matrix));
