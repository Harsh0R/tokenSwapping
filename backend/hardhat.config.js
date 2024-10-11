require("@nomicfoundation/hardhat-toolbox");
const { configDotenv } = require("dotenv");
configDotenv();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [
        "",
      ],
      chainId: 80002,
    },
  },
};
