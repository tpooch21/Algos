const rotateMatrix = (matrix) => {
  if (matrix.length === 0) return matrix;

  let startCol = 0;
  let endCol = matrix[0].length - 1;
  let endRow = ~~((matrix.length - 1) / 2);

  for (let i = 0; i <= endRow; i++) {
    for (let j = startCol; j < endCol; j++) {
      swapSpots(i, j, matrix);
    }
    startCol++;
    endCol--;
  }

  return matrix;
};

const swapSpots = (r, c, matrix) => {
  const n = matrix.length - 1;

  const [r2, c2] = [c, n - r];
  const [r3, c3] = [c2, n - r2];
  const [r4, c4] = [c3, n - r3];

  const val2 = matrix[r2][c2];
  const val3 = matrix[r3][c3];
  const val4 = matrix[r4][c4];

  matrix[r2][c2] = matrix[r][c];
  matrix[r3][c3] = val2;
  matrix[r4][c4] = val3;
  matrix[r][c] = val4;
};

const inputMatrix = [
  [1, 2, 3, 10, 17],
  [4, 5, 6, 11, 18],
  [7, 8, 9, 12, 19],
  [13, 14, 15, 16, 20],
  [21, 22, 23, 24, 25],
];

console.log(rotateMatrix(inputMatrix));
