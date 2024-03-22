import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

require("@nomicfoundation/hardhat-toolbox");

const ZIRCUIT_PRIVATE_KEY = process.env.ZIRCUIT_PRIVATE_KEY || "";

module.exports = {
  solidity: "0.8.17",
  networks: {
    zircuit: {
      url: `https://zircuit1.p2pify.com`,
      accounts: [ZIRCUIT_PRIVATE_KEY],
    },
  },
};

const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
