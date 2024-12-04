const { P2PKH, PrivateKey, Transaction } = require('@bsv/sdk');
const { OpReturnTemplate, MathPuzzleTemplate } = require('./templates');

/*
  Create a new transaction based on one of the UTXOs from the previous exercise
  - add an output with a locking script with math puzzle
     - to spend this output, you need to provide two numbers that add up to 8.
  - sign the transaction and print it in hex format

  - additionally, create a next transaction that spends the output from the previous transaction
  - in the unlocking script, two numbers should be provided that sum up to 8
 */


(async () => {

  const privateKey = PrivateKey.fromWif('L2UjcvfRnWEKa9zP9vsLVUAgYqW6twmwST2N67RGRdJfm9PzL6HT');

  const parentTxHex = '0100000001ad020191d54e29fcddd1ea5e1200fb48251b1258540a61e11fd054fea1769f28000000006a473044022013583585b7fb156df4c609d24832db8f2044e79d4a645c4a8480f984a48a3cda02201a4860a63b4fc8e08f0f2ffdcc3fc570ded8fee2689a4ce116c25b759369793041\n2103ce0d61dc3d96bc48c4acf6c33669cd40ec95f295bb122c1af7611c590fbaadf1ffffffff0a02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab\n236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02\n000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac01000000000000001976a914f530d5656b4b114ecd630485ac7f03d1a526bac088ac00000000';

  const parentTx = Transaction.fromHex(parentTxHex);

  const newTx = new Transaction();
  newTx.addInput({
    sourceTransaction: parentTx,
    sourceOutputIndex: 1,
    unlockingScriptTemplate: new P2PKH().unlock(privateKey),
  });

  const script = new MathPuzzleTemplate().lock();

  newTx.addOutput({
    satoshis: 1,
    lockingScript: script,
  });

  await newTx.sign();

  console.log('newTx Fee', newTx.getFee());

  console.log('newTx transaction ID:', newTx.id('hex'));
  console.log('newTx transaction', newTx.toHex());

  // Transaction spending that custom UTXO

  const nextTx = new Transaction();
  nextTx.addInput({
    sourceTransaction: newTx,
    sourceOutputIndex: 0,
    unlockingScriptTemplate: new MathPuzzleTemplate().unlock(),
  });

  nextTx.addOutput({
    satoshis: 0,
    lockingScript: new OpReturnTemplate().lock('Hey!', 'utf8'),
  });

  await nextTx.sign();

  console.log('nextTx Fee', nextTx.getFee());

  console.log('nextTx transaction ID:', nextTx.id('hex'));
  console.log('nextTx transaction', nextTx.toHex());
})();

