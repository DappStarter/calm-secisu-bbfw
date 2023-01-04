require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot curve random place huge coral light army giggle'; 
let testAccounts = [
"0x7ad24e4d2cd27bf12fb1883700d5882943361b54d0fab5b1cbbd978f5de4c71b",
"0xa94c2d4b6f11745a3386ab040100a36381fa186ab6d903558115ec252b761f99",
"0x16a402e5c73fff586756bab8f0611e3719de22d0356dbb87e647abe38043fcd4",
"0x9d7adb0e297ca51959b268a82324021c0e5654922aa21a062bb4c4a8eccfd80b",
"0x79b16d6af4552ece548b798a34b3f5c7e406e4d020fa28643962b5f85fad4ed1",
"0x3fc4c3589993e48dab9912b40b6b3f79a3b5d454f8f427562b7a4489e84080ae",
"0x21eb14b9ea20444a242d086144e97735db8642885d01c9da1f755264da74fa05",
"0xc7abfb5fef9f41542100c461cac39c1035f4a01f6fe2c28aef75db52d23a2e4f",
"0xfe84857d089b7fca781cdb40f0eadb4354def9afa45fe5f8549aafeb0b97f0c9",
"0x4a4e71015cb67f9124a2eb1e71297d92e301cc4afce7452e66b0b1628997ca7d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

