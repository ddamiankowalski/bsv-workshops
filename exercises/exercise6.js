const { PrivateKey, Transaction, P2PKH, SatoshisPerKilobyte } = require('@bsv/sdk');

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
  const address2 = "1LMoSXDK2SPc8Br9mX2GbA3c5cznRnsfYD"

  // 1. get the private key object from WIF (associated with the first address)
  const privKey = PrivateKey.fromWif('L5eCkNhCUD57P4uMHbtTvCkQ7TxiYDEghZ6wRVYnNQGdbVz4E2U3');

  // 2. make parent transaction object from hex
  const parentTx = Transaction.fromHex('0100000001f0fb175b294687b69191a4a5998b3d632a2068e493c558b12f24cccac36bebc7000000006a47304402202eb9899295cad08cd22a8924945c010b609c0ec768b5a8293ae15c4b293278bb02200a4a9ffb54735ea12795c7628b235fa7bc8a4b767dbdd1a144d3d02c9216ab9d41210290b18515a11a81b546ba5db31a96c28b95db50a723aa337d3ceea33a8d6ce4c2ffffffff19ebbf0100000000001976a914a70ce47acd98455d9e3862d42aafd502e91317fd88ac64000000000000001976a914796fba42ad4eb3e9fe3b4bebdabacd60e3a7ef6988ac64000000000000001976a914198d952d21c3a3eaeea4977529e7961c2d0b572188ac64000000000000001976a91487006b4884d5d89e38690fc5e197606a40f12ecd88ac64000000000000001976a914554472a7ba9b36908cb84a17af273fb403007be188ac64000000000000001976a914bb4a1e039a40886daafa789e9b7fa7237361042c88ac64000000000000001976a914e194dce3410e3d1e21d1499a495744ff3b565ead88ac64000000000000001976a914f1c60ee2600c08ac3295a8f0890e35678aa946e588ac64000000000000001976a9148f08edebbc57d6bad8d0f2709eb52e0e03c4e70388ac64000000000000001976a914d91e51ba11499a17d1139fa71511c5ed965112d088ac64000000000000001976a914b8846792fa17aeec6d567d81b649724ff5efb70188ac64000000000000001976a914685792b9048ddcfd2ba43ad26e1cbf253308bb1f88ac64000000000000001976a914693c712cf28f0cff287105cac66be2a7b170eb8a88ac64000000000000001976a91431346a945e9f54a84fad594e33176ed81161086088ac64000000000000001976a914f4e3a7addfa58d4d562c0d35a53c4e4026c253a388ac64000000000000001976a9145bc016b52d16f278b4c188052b89e245645e777888ac64000000000000001976a914bf0f37f0868b51452edb880b99b3417575af7e6188ac64000000000000001976a9147328a23a52a87190cb5fa77058bf8dc16d42abc288ac64000000000000001976a914e45beefe1fe3f5e4f1871c52746c734b7ec5681988ac64000000000000001976a914f5cca081889846609903aed87a5bfe1cc257425788ac64000000000000001976a914d2f79e9ea8485786f2d873890bdfe677829934df88ac64000000000000001976a9144814bbaf3304aa4fd2b6291a3230fafda90863a688ac64000000000000001976a914f3f54a0435a6820c13446b3b912b9e1ead84c01388ac64000000000000001976a914afa84d6035d6ecadd8e21f6f78e8d05b9bd95b4388ac64000000000000001976a9143e9ef09c56193157779c0216e5584a41e1e5b1c088ac00000000')

  // 3. print satoshis amount for your UTXO (output index from previous exercise)
  const vout = 11;
  const output = parentTx.outputs[vout];

  // 4. create new transaction object
  const tx = new Transaction();
  tx.addInput({
    sourceTransaction: parentTx,
    sourceOutputIndex: vout,
    unlockingScriptTemplate: new P2PKH().unlock(privKey)
  })

  tx.addOutput({
    satoshis: 1,
    lockingScript: new P2PKH().lock(address2)
  })

  tx.addOutput({
    change: true,
    lockingScript: new P2PKH().lock(privKey.toAddress())
  })

  await tx.fee(new SatoshisPerKilobyte(1));
  await tx.sign();

  console.log(`Fee: ${tx.getFee()}\nSatoshis: ${output.satoshis}\nNew tx: ${tx.toHex()}`);

  // 5. add input from parent transaction (sourceOutputIndex from previous exercise), with unlocking script

  // 6. create locking script for the second address

  // 7. add several outputs with 2 satoshis each (to the second address)

  // 8. add output with change to your first address

  // 9. let sdk calculate fee and sign the transaction
  // NOTE: for fee - use model: new SatoshisPerKilobyte(1)

  // 10. print the transaction's fee, change and id in hex format

})();


