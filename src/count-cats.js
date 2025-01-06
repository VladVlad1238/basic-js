const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const catsEars = "^^";
  let catsCount = 0;
  const flatMatrix = matrix.flat();

  for (let i = 0; i < flatMatrix.length; i++) {
    if (flatMatrix[i] === catsEars) {
      catsCount += 1;
    }
  }

  return catsCount;
}

module.exports = {
  countCats,
};
