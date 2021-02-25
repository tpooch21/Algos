/**
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = function(S) {
  let score = 0;
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      stack.push(score);
      score = 0;
    } else {
      score = stack.pop() + Math.max(score * 2, 1);
    }
  }

  return score;
};