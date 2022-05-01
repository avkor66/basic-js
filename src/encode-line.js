const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str.split('')
  let string = ''
  let temp = ''
  let count = 0
  str.forEach((el, ind) => {
    if (ind === 0) {
      temp = el
      count++
    } else {
      if (temp === el) {
        count++
      } else {
        if (count > 1) {
          string += count+temp
          temp = el
          count=1                        
        } else {
          string += temp
          temp = el
          count=1                        
        }
      }            
    }
  })
  if (count > 1) {
    string += count+temp
  } else {
    string += temp
  }
  
  return string
}

module.exports = {
  encodeLine
};
