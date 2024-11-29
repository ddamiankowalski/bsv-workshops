const { Transaction } = require('@bsv/sdk');

/*
    Parse a transaction hex and extract the following:
    - transaction ID (hex encoded)
    - number of inputs
    - number of outputs
    - output values in satoshis
    - output locking scripts in ASM format
    - input unlocking scripts in ASM format
 */

const transactionHex = "010000000248c8998249043a94c9fd3dcdcdbe60b8a23fb09679f5d18f0750354b3e5432ad010000006a473044022038b1e19d378902cf7c797d44589b6bc56ce9e77aab19d81fdd0e6f391d27365602201ffcabbb0bae7a9b5d425271ae75d9ee969535ccf9e68e23f22dbaefcb4889ff4121034f1c05201b215b1b4bd0200962e21e123e210cda475ed7ef1d64c92d385d28c0ffffffff73690ffde177448ea32307cf23b411d1f3e6ebad037c71c09d4a990d99733f45020000006a4730440220248ff5e6ddfdf5cfca338c839ff465f535c28018612b4bcaffe55484e6799b6e022068da9b4381e25b3df3c87953418e021305c9fdbbfd7d29c5339e6fa3efa53319412102d0a61b1c1d6c5f9583123ce97753e44bbca9357312dde85547e4e51f58d2adafffffffff0314000000000000001976a914f530d5656b4b114ecd630485ac7f03d1a526bac088aca0000000000000001976a914e4a6c7e23bb2fd7afcc0cdbe22e48d0b93c80eca88accc170000000000001976a9148e32677592e904c5f1190491ab1a152fe723d1ca88ac00000000"

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
  const tx = Transaction.fromHex(transactionHex)

  const tdID = tx.id("hex")
  const numberOfInputs = tx.inputs.length
  const numberOfOutputs = tx.outputs.length

  const outputsValues = tx.outputs.map(output => output.satoshis)
  const outputsLockingScripts = tx.outputs.map(output => output.lockingScript.toASM())

  const inputUnlockingScripts = tx.inputs.map(input => input.unlockingScript.toASM())

  return {
    tdID,
    numberOfInputs,
    numberOfOutputs,
    outputsValues,
    outputsLockingScripts,
    inputUnlockingScripts
  }
}
