const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(typeMashine = true) {
    this.typeMashine = typeMashine
  }
  encrypt(string, key) {
    if(!string || !key) throw new Error('Incorrect arguments!')
    const spy = []
    const _key = key.split('')
    if (key.length < string.length) {
        for(let i = key.length, j = 0; i < string.length; i++, j++) {
            if (j >= key.length) j = 0
            _key.push(_key[j])
        }
        key = _key.join('')
    }
    for (let i = 0, j = 0; i < string.length; i++) {
        if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) || (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)) {
            spy.push((((string.charCodeAt(i) > 96 ? string.charCodeAt(i) - 97 : string.charCodeAt(i) - 65) + (key.charCodeAt(j) > 96 ? key.charCodeAt(j) - 97 : key.charCodeAt(j) - 65)) % 26) + 65)
            j++
        } else {
            spy.push(string.charCodeAt(i))
        }
    }
    return this.typeMashine ? String.fromCharCode(...spy) : String.fromCharCode(...spy.reverse())
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) throw new Error('Incorrect arguments!')
    const spy = []
    const _key = key.split('')
    if (key.length < encryptedMessage.length) {
        for(let i = key.length, j = 0; i < encryptedMessage.length; i++, j++) {
            if (j >= key.length) j = 0
            _key.push(_key[j])
        }
        key = _key.join('')
    }
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
        if ((encryptedMessage.charCodeAt(i) >= 65 && encryptedMessage.charCodeAt(i) <= 90) || (encryptedMessage.charCodeAt(i) >= 97 && encryptedMessage.charCodeAt(i) <= 122)) {
            let num = (((encryptedMessage.charCodeAt(i) > 96 ? encryptedMessage.charCodeAt(i) - 97 : encryptedMessage.charCodeAt(i) - 65) - (key.charCodeAt(j) > 96 ? key.charCodeAt(j) - 97 : key.charCodeAt(j) - 65)) % 26) >= 0 ? (((encryptedMessage.charCodeAt(i) > 90 ? encryptedMessage.charCodeAt(i) - 97 : encryptedMessage.charCodeAt(i) - 65) - (key.charCodeAt(j) > 90 ? key.charCodeAt(j) - 97 : key.charCodeAt(j) - 65)) % 26) : (((encryptedMessage.charCodeAt(i) > 90 ? encryptedMessage.charCodeAt(i) - 97 : encryptedMessage.charCodeAt(i) - 65) - (key.charCodeAt(j) > 90 ? key.charCodeAt(j) - 97 : key.charCodeAt(j) - 65)) % 26) +26
            spy.push(num + 65)
            j++
        } else {
            spy.push(encryptedMessage.charCodeAt(i))
        }
    }
    return this.typeMashine ? String.fromCharCode(...spy) : String.fromCharCode(...spy.reverse())
  }
}

module.exports = {
  VigenereCipheringMachine
};
