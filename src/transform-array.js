const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const caseObject = {
    discardNext: '--discard-next',
    doubleNext: '--double-next',
    discardPrev: '--discard-prev',
    doublePrev: '--double-prev'
  }
  if(!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!")
  }

  const newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === caseObject.discardNext) {
      i++
    } else if (arr[i] === caseObject.doubleNext){
      if(i < arr.length - 1) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === caseObject.discardPrev) {
      if(i > 0 && arr[i - 2] !== caseObject.discardNext) {
        newArr.pop()
      }
    } else if (arr[i] === caseObject.doublePrev) {
      if(i > 0 && arr[i - 2] !== caseObject.discardNext) {
        newArr.push(arr[i - 1])
      }
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

module.exports = {
  transform
};
