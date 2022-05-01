const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const fArr = arr.filter(el => el !== -1)
  fArr.sort(function (a, b) {
    return a - b
  })
  let pointer = 0
  return arr.map(el => {
    if(el === -1) return el
    return fArr[pointer++]
  })
}

module.exports = {
  sortByHeight
};
