/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 03
    },
    ropsten: {
      url: "https://rpc.ankr.com/eth_ropsten",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}