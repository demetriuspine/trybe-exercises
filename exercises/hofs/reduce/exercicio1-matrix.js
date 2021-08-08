const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((accumulator, currentValue,) => {
    console.log('acumulador:', accumulator);
    console.log('valor atual:', currentValue);
    return accumulator.concat(currentValue);
  }, [])
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);