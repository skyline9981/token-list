import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const TokenFactory = await ethers.getContractFactory("TestToken");
  const Token = await TokenFactory.deploy("Test Token", "TST", 18);
  console.log("Token deployed to:", Token.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
