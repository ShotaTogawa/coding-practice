// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const countFunc = string => {
  // ここの正規表現は、spaceや！を除外する。
  const word = string.replace(/[^\w]/g, "").toLowerCase();
  console.log("word", word);
  const charMap = {};
  for (char of word) {
    // charMap[char] = charMap[char] + 1 || 0;
    if (!charMap[char]) {
      charMap[char] = 1;
      continue;
    }
    charMap[char] += 1;
  }
  return charMap;
};

function anagrams(stringA, stringB) {
  const charMapA = countFunc(stringA);
  const charMapB = countFunc(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

const anagrams2 = (stringA, stringB) => {
  return cleanString(stringA) === cleanString(stringB);
};

const cleanString = str => {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
};

console.log(anagrams("app123!!lell  l", "Apllple"));

module.exports = anagrams;
