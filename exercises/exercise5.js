const { P2PKH } = require('@bsv/sdk');

/*
  Generate locking script for a P2PKH address
  - print the locking script in ASM format
  - check if it matches one of the outputs in the transaction from the previous exercise
  - remember the index of that output for the next exercise (as UTXO index)
 */

const address = "1PMT41sRmmVtC19AB4J7saeVCfATuAovnW"

const lockingScript = new P2PKH().lock(address).toASM()
console.log("Locking script: ", lockingScript)
