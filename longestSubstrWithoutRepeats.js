var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  const queue = [];
  const seen = new Set();

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (!seen.has(curr)) {
      queue.push(curr);
      seen.add(curr);
    } else {
      longest = Math.max(longest, queue.length);
      while (queue[0] !== curr) {
        const toRemove = queue.shift();
        seen.delete(toRemove);
      }
      queue.shift();
      queue.push(curr);
    }
  }

  longest = Math.max(longest, queue.length);
  return longest;
};

/*
  find LENGTH of longest substring WITHOUT repeating characters
  I: string s
  O: int, length
  C: none
  E: string has length 0

  s = "abcabcbb"

  s = "pwwkew"

  BF:
    iterate over characters
    add char to set
      iterate over remaining characters
      add chars to set, stop when one has already been seen

  SW:
  max = 3
  [k, e, w, l]
  {p, w, k, e, l}
  when a char is found that's already been seen, set max length to size of queue or current max
  remove items from queue until current char is removed
  when string has been fully checked, compare queue size to max
*/
