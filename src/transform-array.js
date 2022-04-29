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
  const newArr = []
  if (!(arr instanceof Array)) throw new Error('\'arr\' parameter must be an instance of the Array!')
  let flag = false
  let index 
  arr.forEach((el, ind, array) => {
    if (el === '--double-next') {
      if (ind+1 <= array.length-1) {
        newArr.push(array[ind+1])
      }
    } else if (el === '--double-prev') {
      if (ind-1 >= 0) {
        if (index === undefined) {
          newArr.push(array[ind-1])
        } else {
          if (index !== ind-1) {
            newArr.push(array[ind-1])
          }
        }
      }
    } else if (el === '--discard-prev') {
      if (ind > 0) {
        if (index === undefined) {
          newArr.pop()
        } else {
          if (index !== ind-1) {
            newArr.pop()
          }
        }
      }
    } else if (el === '--discard-next') {
      index = ind+1
      flag = true
    } else {
      if (flag) {
        flag = false
      } else {
        if (el !== undefined) {
          newArr.push(el)
        }
      }
    }
  })
  return newArr
}

module.exports = {
  transform
};
