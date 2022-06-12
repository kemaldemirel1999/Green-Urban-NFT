


require("@nomiclabs/hardhat-waffle");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths : {
    artifacts : "./artifacts"
  },
  networks : {
    hardhat : {
      chainId: 1337,
    },
    rinkeby: {
      url : "XXXXXXXXXX",
      accounts : ["XXXXXXXXXXX"]
    },
  }
};
