const minEatingSpeed = function (piles, H) {
  let max = Math.max(...piles);
  let min = 0;

  if (H === piles.length) return max;

  while (min < max) {
    const rate = Math.floor((min + max) / 2);
    let hours = piles.reduce((acc, curr) => acc + Math.ceil(curr / rate), 0);

    if (hours > H) {
      min = rate + 1;
    } else {
      max = rate;
    }
  }

  return min;
};
