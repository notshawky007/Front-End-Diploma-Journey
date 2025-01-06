/* eslint-disable */
function scoreFunction() {
  let score = 0;

  function increaseScore() {
    score++; //1
    console.log(score);
  }

  return increaseScore;
}

const backPack1 = scoreFunction(); //score => 1, 2, 3
const backPack2 = scoreFunction(); //score
const backPack3 = scoreFunction(); //score
