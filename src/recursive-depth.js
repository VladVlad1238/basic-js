const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth= 0;
    if(arr.length === 0) {
      return 1;
    }
    if(Array.isArray(arr)) {
      return Math.max(maxDepth, ...arr.map(item => this.calculateDepth(item))) + 1;
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
