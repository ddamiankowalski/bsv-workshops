const { P2PKH, PrivateKey, Transaction, SatoshisPerKilobyte } = require('@bsv/sdk');

/*
    Generate a new transaction based on UTXO from the previous exercise
    - add input from provided transaction's output (UTXO) with the 'sourceOutputIndex' from the previous exercise
    - make as many outputs as possible with 2 satoshis each
    - add one output with 1 satoshi to the same address as the input (as change)
    - difference between input and outputs is the fee - it should be 1 satoshi
    - sign the transaction and print it in hex format
 */

(async () => {

  const privateKey = PrivateKey.fromWif('L1ut9DBebBwgRqJPteM2sYP1ihS3R7nxwxWLrS5UGnxehiPGNUUg');

  const parentTxHex = '010000000248c8998249043a94c9fd3dcdcdbe60b8a23fb09679f5d18f0750354b3e5432ad010000006a473044022038b1e19d378902cf7c797d44589b6bc56ce9e77aab19d81fdd0e6f391d27365602201ffcabbb0bae7a9b5d425271ae75d9ee969535ccf9e68e23f22dbaefcb4889ff4121034f1c05201b215b1b4bd0200962e21e123e210cda475ed7ef1d64c92d385d28c0ffffffff73690ffde177448ea32307cf23b411d1f3e6ebad037c71c09d4a990d99733f45020000006a4730440220248ff5e6ddfdf5cfca338c839ff465f535c28018612b4bcaffe55484e6799b6e022068da9b4381e25b3df3c87953418e021305c9fdbbfd7d29c5339e6fa3efa53319412102d0a61b1c1d6c5f9583123ce97753e44bbca9357312dde85547e4e51f58d2adafffffffff0314000000000000001976a914f530d5656b4b114ecd630485ac7f03d1a526bac088aca0000000000000001976a914e4a6c7e23bb2fd7afcc0cdbe22e48d0b93c80eca88accc170000000000001976a9148e32677592e904c5f1190491ab1a152fe723d1ca88ac00000000';

  const parentTx = Transaction.fromHex(parentTxHex);

  console.log("Input satoshis", parentTx.outputs[0].satoshis)

  const newTx = new Transaction();
  newTx.addInput({
    sourceTransaction: parentTx,
    sourceOutputIndex: 0,
    unlockingScriptTemplate: new P2PKH().unlock(privateKey),
  });

  const newAddress = "1JUJ8XZpLKTfXTHC6XVTE6VVYVVQfEE4oP"
  const lockingScript = new P2PKH().lock(newAddress)

  for (let i = 0; i < 8; i++) {
    newTx.addOutput({
      satoshis: 2,
      lockingScript: lockingScript
    });
  }

  newTx.addOutput({
    change: true,
    lockingScript: new P2PKH().lock(privateKey.toAddress()),
  });

  await newTx.fee(new SatoshisPerKilobyte(1))
  await newTx.sign();

  console.log("Fee", newTx.getFee());
  console.log("Change", newTx.outputs[newTx.outputs.length - 1].satoshis);

  console.log("new transaction ID:", newTx.id('hex'));
  console.log("new transaction", newTx.toHex());
})();


