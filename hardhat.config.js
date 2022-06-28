require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",

  networks: {
    goerli: {
     url: `https://eth-goerli.alchemyapi.io/v2/${process.env.GOERLI_KEY}`,
     accounts: [process.env.PRIVATE_KEY],
    }
   },  
};
