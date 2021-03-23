// hardhat.config.js
require('dotenv').config()
const { MNEMONIC } = process.env

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'rinkeby',
  networks: {

    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {},
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/', //for rinkeby
      chainId: 4, //for rinkeby
      // gasPrice: 20000000000,
      accounts: { mnemonic: MNEMONIC },
      // gas: 2100000,
      // gasPrice: 8000000000,
    },
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545', // for bsc test net
      chainId: 97, //for bsc test net
      // gasPrice: 20000000000,
      accounts: { mnemonic: MNEMONIC },
    },
  },
  solidity: '0.8.2',
}
