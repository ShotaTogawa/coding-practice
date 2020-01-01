// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i].toLowerCase().includes("a") ||
//       str[i].toLowerCase().includes("i") ||
//       str[i].toLowerCase().includes("u") ||
//       str[i].toLowerCase().includes("e") ||
//       str[i].toLowerCase().includes("o")
//     ) {
//       count += 1;
//     }
//   }
//   return count;
// }

// function vowels(str) {
//   let count = 0;
//   const chcker = "aeiou";
//   for (let char of str.toLowerCase()) {
//     if (chcker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

function vowels(str) {
  // g stands a - u in this case
  // i stands case sensitive
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
