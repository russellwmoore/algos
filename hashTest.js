function add(a, b) {
  return a + b;
}

const crypto = require('crypto');
const password = add.toString();
const cipher = crypto.createCipher('aes128', 'a password');
let encrypted = cipher.update(password, 'utf8', 'hex');
encrypted += cipher.final('hex');
// console.log(encrypted);

const decipher = crypto.createDecipher('aes128', 'a password');
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
// console.log(decrypted);

module.exports = { decipher };
