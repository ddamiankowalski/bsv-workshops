const { PublicKey } = require('@bsv/sdk');

/*
    Get PublicKey from String (hex encoded DER format), and
    - print its address
    - check it's the same as in the previous exercise
 */

const pubKey = PublicKey.fromString('03752669a71d34c89e47cdeafe9d3cb5edec8e5a4d855ee487a7a0a6d266bde976');
console.log("Address: ", pubKey.toAddress());