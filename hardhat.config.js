


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
      url : "https://eth-rinkeby.alchemyapi.io/v2/1GzIw_dSAF7NbAsjcmJNZbRtRta09p0R",
      accounts : ["81ccda2dabb1596898615c8c8fba12e098f8c96dd1049a0e01418bc70540fb00"]
    },
  }
};
