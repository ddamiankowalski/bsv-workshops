const { } = require('@bsv/sdk');

/*
    Sign a message with a private key and
    - print the signature in DER format (base64 encoded)
    - verify the signature with the corresponding public key
    - verify the signature for a malformed message
 */

const yourWIF = "put_your_wif_here";
const yourPublicKey = "put_your_public_key_here";

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

  return {
    signatureBase64: "",
    verifiedByPublicKey: false,
    verifiedByPublicKeyMalformed: false
  }
}
