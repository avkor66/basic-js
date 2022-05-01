const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domain) {
  if(!domain.length) return {}
  const end = {}
  domain.forEach(element => {
    const el = element.split('.').reverse()
      let str = ''
      for (const iter of el) {
          str += '.'+iter
          if (Object.hasOwnProperty.call(end, str)) {
           end[str] += 1
          } else {
              end[str] = 1
          }
      }
  })
  return end
}

module.exports = {
  getDNSStats
};
