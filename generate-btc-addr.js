const Crypto = require('cryptojs').Crypto;
const bs58 = require('bs58');
const bitcoin = require('bitcoinjs-lib');

const VERSION = '00';

const publicKey = process.argv[2];
const pubKeyBytes = Crypto.util.hexToBytes(publicKey);

const encrypted = Crypto.SHA256(pubKeyBytes);
const buffer = Buffer.from(Crypto.util.hexToBytes(encrypted));
const hash160 = bitcoin.crypto.ripemd160(buffer);
const hash160Hex = Crypto.util.bytesToHex(hash160); 

const prefix = `${VERSION}${hash160Hex}`;
const prefixBytes = Crypto.util.hexToBytes(prefix);

let prefixEncrypted = Crypto.SHA256(prefixBytes); 
prefixEncrypted = Crypto.SHA256(Crypto.util.hexToBytes(prefixEncrypted));
const checksum = prefixEncrypted.slice(0, 8);

const address = `${prefix}${checksum}`;
const btcAddr = bs58.encode(Crypto.util.hexToBytes(address));

console.log(btcAddr);