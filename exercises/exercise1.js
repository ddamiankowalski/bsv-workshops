const { PrivateKey } = require('@bsv/sdk');

/*
    Generate a random private key and
    - print it in WIF format
    - print its address
 */

const privKey = PrivateKey.fromRandom();

console.log("Random private key in WIF format: ", privKey.toWif());
console.log("Address: ", privKey.toAddress());
console.log("Public key: ", privKey.toPublicKey().toString());
