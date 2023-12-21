const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const digits = Array.from(String(n), Number);

  for (let i = 0; i < digits.length; i++) {
    const fDigit = digits.slice(0, i).join('');
    const sDigit = digits.slice(i + 1).join('');
    const maxNumber = parseInt(fDigit + sDigit)
    max = Math.max(max, maxNumber)
    console.log(maxNumber)
  }
  return max
}

module.exports = {
  deleteDigit
};
