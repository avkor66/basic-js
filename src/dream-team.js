const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  try {
    let str = ''
    array.sort(function (a,b) {
      if (typeof a === 'string' && typeof b === 'string') {
        if (a.trim().toUpperCase() < b.trim().toUpperCase()) return -1
        if (a.trim().toUpperCase() > b.trim().toUpperCase()) return 1
      }
      if (typeof a === 'string' && typeof b !== 'string')  return -1
      if (typeof a !== 'string' && typeof b === 'string')  return 1
      return 0
    })
    array.forEach(element => {
      try {
        if (typeof element === 'string') {
          str += element.trim()[0].toUpperCase()
        }
      } catch (error) {
        
      }
    });
    return str
  } catch (error) {
    return false
  }
}

module.exports = {
  createDreamTeam
};
