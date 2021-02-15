const kWeakestRows = function (mat, k) {
  const rowsBySoldierCount = mat.map((row, i) => {
    const soldiers = row.reduce((acc, curr) => acc + curr, 0);
    return [i, soldiers];
  });

  rowsBySoldierCount.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    else if (a[1] > b[1]) return 1;
    else {
      return a[0] - b[0];
    }
  });

  return rowsBySoldierCount.map(([idx, count]) => idx).slice(0, k);
};
