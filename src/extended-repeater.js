const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = str + ''
  if (options.hasOwnProperty('addition')) options.addition = options.addition + ''
  let temp = []
  if (options.repeatTimes) {
    for (let index = 0; index < options.repeatTimes-1; index++) {
      temp.push(str)
      if (options.addition) {
        if(options.additionRepeatTimes) {
          for (let i = 0; i < options.additionRepeatTimes-1; i++) {
            temp.push(options.addition)
            temp.push(options.additionSeparator ?? '|')
          }
          temp.push(options.addition)
        } else {
          temp.push(options.addition)
        }
      } 
      temp.push(options.separator ?? '+')
    }
    temp.push(str)
    if (options.addition) {
      if(options.additionRepeatTimes) {
        for (let i = 0; i < options.additionRepeatTimes-1; i++) {
          temp.push(options.addition)
          temp.push(options.additionSeparator ?? '|')
        }
        temp.push(options.addition)
      } else {
        temp.push(options.addition)
      }
    } 
  } else {
    temp.push(str)
    if (options.addition) {
      if(options.additionRepeatTimes) {
        for (let i = 0; i < options.additionRepeatTimes-1; i++) {
          temp.push(options.addition)
          temp.push(options.additionSeparator ?? '|')
        }
        temp.push(options.addition)
      } else {
        temp.push(options.addition)
      }
    }
  }

  return temp.join('')
}

module.exports = {
  repeater
};
