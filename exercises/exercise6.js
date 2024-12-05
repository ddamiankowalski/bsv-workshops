const { } = require('@bsv/sdk');

/*
    Generate a new transaction based on UTXO from the previous exercise
    - add input from provided transaction's output (UTXO) with the 'sourceOutputIndex' from the previous exercise
    - make as many outputs as possible with 2 satoshis each
    - add one output with 1 satoshi to the same address as the input (as change)
    - difference between input and outputs is the fee - it should be 1 satoshi
    - sign the transaction and print it in hex format
 */

(async () => {
  // 0: generate (and store somewhere with WIF) second address
  const address2 = "put_your_second_address_here"

  // 1. get the private key object from WIF (associated with the first address)

  // 2. make parent transaction object from hex

  // 3. print satoshis amount for your UTXO (output index from previous exercise)

  // 4. create new transaction object

  // 5. add input from parent transaction (sourceOutputIndex from previous exercise), with unlocking script

  // 6. create locking script for the second address

  // 7. add several outputs with 2 satoshis each (to the second address)

  // 8. add output with change to your first address

  // 9. let sdk calculate fee and sign the transaction
  // NOTE: for fee - use model: new SatoshisPerKilobyte(1)

  // 10. print the transaction's fee, change and id in hex format

})();


