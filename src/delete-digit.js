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
  const arr = []
  let test = n.toString().split('')
  for(let i = 0; i < test.length; i++) {
    test.splice(i,1)
    arr.push(parseInt(test.join('')))
    test = n.toString().split('')
  }  
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
