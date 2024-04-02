"use strict";

/**
 * returns a random number between 0 and maxValue
*/

function choice(maxValue) {
  const randIdx = Math.floor(Math.random() * maxValue);
  return randIdx;
}

export { choice };