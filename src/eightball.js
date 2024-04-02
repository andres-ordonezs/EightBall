"use strict";

/**
 * returns a random number between 0 and maxValue
*/

function choice(maxValue) {
  const randIdx = Math.floor(Math.random() * maxValue);
  return randIdx;
}

/**
 *
 */
function updateCounter(color, counter) {
  console.log("counter 1:", counter);

  for (let item of counter) {
    console.log("color: ", color);
    console.log("label: ", item["label"]);
    if (item["label"].toLowerCase() === color) {
      item.counter++;
      console.log("counter 2:", counter);
    }

    console.log("counter 3: ", counter);
    console.log("item: ", item);

  }
  return counter;
}


export { choice, updateCounter };