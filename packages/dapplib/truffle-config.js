require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember smile hockey enter bone ghost'; 
let testAccounts = [
"0xd35a6e90f1e5590445e79f1e95c7f50da9a18ae15e30be2ae41c068ba6e58182",
"0xbe262c696b12517bade707a3a3c8e480dd61382f53ec1f0948f03aa436e4b731",
"0x507fdb404dd9aa3a709e54a741077bef1b96c2181e0ba9461d66c579248aeda8",
"0xb395201b96034f6fc84e5f4e96e918a26e6057e8591d73dd4d3db73437952c40",
"0x419cc401dfeb324b2b14f7e759b92fe62004f5ea462845c40ccb2f31d045cede",
"0x4624752d7ccaaf6192cb17145d2c23e7f4ca0ac0c9f53a7cb0d791e5055984f5",
"0x1664e1ca4d723f57c394a502164f70c4ccec1d4e7b0b052111bd8f7219a5a287",
"0x4f9e43ecb7c6a024ce824fd8a66b9708b7dc541ddc4d278b4099ca67e3ba5262",
"0x62e6f14a31210e54ac2a1c7dcb5851bb6b43dcde950b5546fb70d4c92afc1901",
"0x7a9c42ec4b3f7f8a1a48e4c21d6910324321e330a71d8c1eec44ac8c6eb6fc8c"
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

