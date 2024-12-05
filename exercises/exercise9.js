const { P2PKH, PrivateKey, Transaction } = require('@bsv/sdk');
const { OpReturnTemplate, MathPuzzleTemplate } = require('./templates');

/*
  Create a new transaction based on one of the UTXOs from the previous exercise
  - add an output with a locking script with math puzzle
     - to spend this output, you need to provide two numbers that add up to 8.
  - sign the transaction and print it in hex format

  - additionally, create a next transaction that spends the output from the previous transaction
  - in the unlocking script, two numbers should be provided that sum up to 8
  - add an OP_RETURN output
 */


(async () => {
  // Your code here
})();

