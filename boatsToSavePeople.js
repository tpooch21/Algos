/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);

  let [l, r] = [0, people.length - 1];
  let minBoats = 0;

  while (l < r) {
    if (people[l] + people[r] <= limit) {
      l++;
      r--;
    } else {
      r--;
    }
    minBoats++;
  }

  if (l === r) minBoats++;
  return minBoats;
};

/*
  I: array of ints (weights), int (limit)
  O: int (min number of boats)

  [1, 2, 3, 2], l = 4


  [1, 2, 2, 3, 4], 3
  if it works as a pair, move left up and right down
  if it's too high, increase and move right down


  [3, 3, 4, 5, 5], limit = 5
  if l === r, increase count by 1 and return

*/
