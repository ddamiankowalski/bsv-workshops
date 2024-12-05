const { } = require('@bsv/sdk');

/*
    Parse a transaction hex and extract the following:
    - transaction ID (hex encoded)
    - number of inputs
    - number of outputs
    - output values in satoshis
    - output locking scripts in ASM format
    - input unlocking scripts in ASM format
 */

const transactionHex = "put_your_transaction_hex_here";

const {
  tdID,
  numberOfInputs,
  numberOfOutputs,
  outputsValues,
  outputsLockingScripts,
  inputUnlockingScripts
} = exercise();

console.log("Transaction ID: ", tdID); // Should be the hex encoded transaction ID
console.log("Number of inputs: ", numberOfInputs); // Should be the number of inputs in the transaction
console.log("Number of outputs: ", numberOfOutputs); // Should be the number of outputs in the transaction
console.log("Output values: ", outputsValues); // Should be an array of output values in satoshis
console.log("Output locking scripts: ", outputsLockingScripts); // Should be an array of output locking scripts in ASM format
console.log("Input unlocking scripts: ", inputUnlockingScripts); // Should be an array of input unlocking scripts in ASM format

function exercise() {
  // Your code here

  return {
    tdID: "",
    numberOfInputs: 0,
    numberOfOutputs: 0,
    outputsValues: [],
    outputsLockingScripts: [],
    inputUnlockingScripts: []
  }
}
