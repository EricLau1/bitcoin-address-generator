const Crypto = require('cryptojs').Crypto;
const bs58 = require('bs58');

const VERSION = 80;
const privateKey = process.argv[2];

const prefix = `${VERSION}${privateKey}`;

let encrypted = Crypto.SHA256(Crypto.util.hexToBytes(prefix));
encrypted = Crypto.SHA256(Crypto.util.hexToBytes(encrypted));

const checksum = encrypted.slice(0, 8);
const wif = `${prefix}${checksum}`;
const btcWif = bs58.encode(Crypto.util.hexToBytes(wif));
console.log(btcWif);