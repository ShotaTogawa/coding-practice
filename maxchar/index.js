// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/**
 * Common String Question
 * ・What is the most common character in the string?
 * ・Does string A have the same character as string B (is it an anagram?)
 * ・Does the given strgin have any repeacted characters in it?
 */

function maxChar(str) {
  let max = 0;
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] > 0) {
      count[str[i]]++;
    } else {
      count[str[i]] = 1;
    }
  }
  max = Math.max(...Object.values(count));
  console.log(max);
}

function maxChar2(str) {
  const count = {};
  let max = 0;
  let maxChar = 0;
  for (let char of str) {
    // if (!count[char]) {
    //   count[char] = 1;
    // } else {
    //   count[char] += 1;
    // }
    count[char] = count[char] + 1 || 1;
  }

  for (let char in count) {
    if (count[char] > max) {
      max = count[char];
      maxChar = char;
    }
  }
  console.log(count, maxChar);
}

maxChar("apple");
maxChar2("pineapple");

module.exports = maxChar;
