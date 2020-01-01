// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let stair = "";
  for (let i = 1; i <= n; i++) {
    stair += "#";
    if (stair.length !== n) {
      let spaceNum = n - stair.length;
      let space = "";
      for (let j = 0; j < spaceNum; j++) {
        space += " ";
      }
      console.log(stair + space);
    } else {
      console.log(stair);
    }
  }
}

function solution(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

function solution2(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  //   if (stair.length <= row) {
  //     stair += "#";
  //   } else {
  //     stair += " ";
  //   }
  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}

steps(5);
solution(5);
solution2(5);

module.exports = steps;
