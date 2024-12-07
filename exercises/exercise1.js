const { PrivateKey } = require('@bsv/sdk');
const { saveKey } = require('./save-key.js');

/*
    Generate a random private key and
    - print it in WIF format
    - print its address
 */

const privKey = PrivateKey.fromRandom();
const wif = privKey.toWif();

console.log('Random private key in WIF format:', wif);
console.log('Address:', privKey.toAddress());
console.log('Public key:', privKey.toPublicKey());

saveKey(privKey);



