const { PrivateKey, PublicKey, Signature } = require('@bsv/sdk');

/*
    Sign a message with a private key and
    - print the signature in DER format (base64 encoded)
    - verify the signature with the corresponding public key
    - verify the signature for a malformed message
 */

const yourWIF = "L5eCkNhCUD57P4uMHbtTvCkQ7TxiYDEghZ6wRVYnNQGdbVz4E2U3";
const yourPublicKey = "03752669a71d34c89e47cdeafe9d3cb5edec8e5a4d855ee487a7a0a6d266bde976";

const messageToSign = "Hello, World!";
const malformedMessage = messageToSign + "some extra data";

const {
  signatureBase64,
  verifiedByPublicKey,
  verifiedByPublicKeyMalformed
} = exercise();

console.log("Signature: ", signatureBase64); // Should be Base64 encoded DER signature of the message
console.log("Verified by public key: ", verifiedByPublicKey); // Should be true
console.log("Verified by public key (malformed message): ", verifiedByPublicKeyMalformed); // Should be false

function exercise() {
  // Your code here
  const privKey = PrivateKey.fromWif(yourWIF);
  const signature = privKey.sign(messageToSign);

  const pubKey = PublicKey.fromString(yourPublicKey);

  return {
    signatureBase64: signature.toString('base64'),
    verifiedByPublicKey: pubKey.verify(messageToSign, signature),
    verifiedByPublicKeyMalformed: pubKey.verify(malformedMessage, signature)
  }
}
