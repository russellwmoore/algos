const { solution, adder } = require('./adder');

const { decipher } = require('./hashTest');

const crypto = require('crypto');

describe('Test the secrets!', () => {
  console.log('solution', solution);
  const decipher = crypto.createDecipher('aes128', 'a password');
  let decrypted = decipher.update(solution, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  console.log(typeof decrypted);
  test('should run a test', () => {});
});
