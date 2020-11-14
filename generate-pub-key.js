const Crypto = require('cryptojs').Crypto;
const ec = require('eccrypto');

const privateKey = process.argv[2];

const buffer = Buffer.from(Crypto.util.hexToBytes(privateKey));
const output = ec.getPublic(buffer);
const publicKey = Crypto.util.bytesToHex(output);

console.log(publicKey);