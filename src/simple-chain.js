const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    (value !== undefined) ? this.arr.push(`( ${value} )`) : this.arr.push('');
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || isNaN(position) || position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    const result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
