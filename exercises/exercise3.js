const { PrivateKey, PublicKey, Signature } = require('@bsv/sdk');

/*
    Sign a message with a private key and
    - print the signature in DER format (base64 encoded)
    - verify the signature with the corresponding public key
    - verify the signature for a malformed message
 */

const yourWIF = "L1ut9DBebBwgRqJPteM2sYP1ihS3R7nxwxWLrS5UGnxehiPGNUUg";
const yourPublicKey = "03ce0d61dc3d96bc48c4acf6c33669cd40ec95f295bb122c1af7611c590fbaadf1";

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

  const signatureBase64 = privKey.sign(messageToSign).toDER("base64")

  const pubKey = PublicKey.fromString(yourPublicKey)
  const verifiedByPublicKey = pubKey.verify(messageToSign, Signature.fromDER(signatureBase64, "base64"))

  const verifiedByPublicKeyMalformed = pubKey.verify(malformedMessage, Signature.fromDER(signatureBase64, "base64"))

  return {
    signatureBase64,
    verifiedByPublicKey,
    verifiedByPublicKeyMalformed
  }
}
