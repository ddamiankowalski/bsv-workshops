const { Transaction } = require('@bsv/sdk');

/*
    Broadcast a transaction to the network
    - Get the transaction hex from the previous exercise
    - Broadcast it to the network
    - Find the transaction on WhatsOnChain by its ID
 */

(async () => {
  const transactionHex = "01000000015b3a1d6fc4e392da44cda7bc432ec1b9358668fbbf4d7ca1e6936c42f805fbca0b0000006b483045022100cb51b2d9b1b9fe74b388e7a3ac1f0958d757379eb830b8b61eecce34f1ad346f02205e985f7e014cd973a89ee3f484a7284b68e85f3caca9cf6494a584ce90b0424e412103752669a71d34c89e47cdeafe9d3cb5edec8e5a4d855ee487a7a0a6d266bde976ffffffff0201000000000000001976a914d45979ad47686ad1b8c6239f12a46eb94db434bb88ac62000000000000001976a914685792b9048ddcfd2ba43ad26e1cbf253308bb1f88ac00000000";

  const tx = Transaction.fromHex(transactionHex);
  const res = await tx.broadcast();

  console.log(res);
})();


