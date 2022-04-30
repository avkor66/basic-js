const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return chain.length
  },
  addLink(value) {
      // console.log(chainMaker.chain);
      chainMaker.chain.push(`( ${value} )`)
      return this
  },
  removeLink(position) {
      if (Number.isInteger(position)) {
          if (position <= 0 || position >= chainMaker.chain.length) {
          chainMaker.chain.splice(0)
          throw new Error("You can\'t remove incorrect link!")
      } else {
          chainMaker.chain.splice(position-1,1)
      }
  } else {
        chainMaker.chain.splice(0)
      throw new Error("You can\'t remove incorrect link!")
    }
    return this
  },
  reverseChain() {
    chainMaker.chain.reverse()
    return this
  },
  finishChain() {
    let temp = chainMaker.chain.slice(0)
    chainMaker.chain.splice(0)
    return temp.join('~~')
  }
};

module.exports = {
  chainMaker
};
