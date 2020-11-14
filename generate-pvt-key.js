const Crypto = require('cryptojs').Crypto;

const privateKey = Crypto.util.randomBytes(32);
const privateKeyHex =  Crypto.util.bytesToHex(privateKey).toUpperCase();
console.log(privateKeyHex);