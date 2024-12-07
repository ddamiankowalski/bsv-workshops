const { P2PKH } = require('@bsv/sdk');

/*
  Generate locking script for a P2PKH address
  - print the locking script in ASM format
  - check if it matches one of the outputs in the transaction from the previous exercise
  - remember the index of that output for the next exercise (as UTXO index)
 */

const address = "1AWiBe2v3fSvVY6LQutEfqjR7m6qGbUsQu"

const p2 = new P2PKH();
const lockingScript = p2.lock(address).toASM();
console.log("Locking script: ", lockingScript)
