// 7x7 matrix

var rand10 = function() {
  let matrix = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 1, 2, 3, 4],
      [5, 6, 7, 8, 9, 10, 1],
      [2, 3, 4, 5, 6, 7, 8],
      [9, 10, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
  ];
  let res = 0;
  while (res === 0) {
      let row = rand7() - 1;
      let col = rand7() - 1;
      res = matrix[row][col];
  }
  return res;
};