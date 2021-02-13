const shortestPathBinaryMatrix = function (grid) {
  if (grid[0][0] || grid[grid.length - 1][grid[0].length - 1]) return -1;

  const directions = [
    [1, 1],
    [1, 0],
    [0, 1],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  const queue = [];
  queue.push([0, 0, 1]);

  grid[0][0] = 1;

  while (queue.length) {
    const [r, c, steps] = queue.shift();

    if (r === grid.length - 1 && c === grid[0].length - 1) {
      return steps;
    }

    directions.forEach(([rChange, cChange]) => {
      const nextRow = r + rChange;
      const nextCol = c + cChange;

      if (
        nextRow >= 0 &&
        nextRow < grid.length &&
        nextCol >= 0 &&
        nextCol < grid[0].length &&
        !grid[nextRow][nextCol]
      ) {
        grid[nextRow][nextCol] = 1;
        queue.push([nextRow, nextCol, steps + 1]);
      }
    });
  }

  return -1;
};
