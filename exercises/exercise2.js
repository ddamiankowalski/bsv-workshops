const { PublicKey } = require('@bsv/sdk');

/*
    Get PublicKey from String (hex encoded DER format), and
    - print its address
    - check it's the same as in the previous exercise
 */

const pubKey = PublicKey.fromString("03ce0d61dc3d96bc48c4acf6c33669cd40ec95f295bb122c1af7611c590fbaadf1")

console.log("Address: ", pubKey.toAddress());
