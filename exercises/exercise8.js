const { P2PKH, PrivateKey, Transaction, Utils, LockingScript, OP } = require('@bsv/sdk');

/*
   Using first unspent output from the transaction from the previous exercise,
    - create a new transaction with one input and one output
    - input should be the first unspent output from the previous transaction
    - output should be a OP_RETURN output with the message "Hello, world!"
    - sign the transaction and print it in hex format
 */

class OpReturnTemplate {
  lock(data) {
    const script = [
      {op: OP.OP_FALSE},
      {op: OP.OP_RETURN}
    ]

    if (typeof data === 'string') {
      data = [data]
    }

    for (const entry of data.filter(Boolean)) {
      const arr = Utils.toArray(entry, 'utf8')
      script.push({op: arr.length, data: arr})
    }

    return new LockingScript(script)
  }

  unlock() {
    throw new Error('Unlock is not supported for OpReturn scripts')
  }
}

(async () => {

  const privateKey = PrivateKey.fromWif('L2UjcvfRnWEKa9zP9vsLVUAgYqW6twmwST2N67RGRdJfm9PzL6HT');

  const parentTxHex = '0100000001ad020191d54e29fcddd1ea5e1200fb48251b1258540a61e11fd054fea1769f28000000006a473044022013583585b7fb156df4c609d24832db8f2044e79d4a645c4a8480f984a48a3cda02201a4860a63b4fc8e08f0f2ffdcc3fc570ded8fee2689a4ce116c25b759369793041\n2103ce0d61dc3d96bc48c4acf6c33669cd40ec95f295bb122c1af7611c590fbaadf1ffffffff0a02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab\n236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02\n000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac02000000000000001976a914bfa3ab236c5625a217276c2753b3535fe520b56f88ac01000000000000001976a914f530d5656b4b114ecd630485ac7f03d1a526bac088ac00000000';

  const parentTx = Transaction.fromHex(parentTxHex);

  const newTx = new Transaction();
  newTx.addInput({
    sourceTransaction: parentTx,
    sourceOutputIndex: 0,
    unlockingScriptTemplate: new P2PKH().unlock(privateKey),
  });

  const script = new OpReturnTemplate().lock('Hello, world!', 'utf8');

  newTx.addOutput({
    satoshis: 0,
    lockingScript: script,
  });

  await newTx.sign();

  console.log('Fee', newTx.getFee());

  console.log('new transaction ID:', newTx.id('hex'));
  console.log('new transaction', newTx.toHex());
})();

