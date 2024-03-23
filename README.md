# token-list

## Create Token

You can create an ERC20 token by modifying the Token.sol file in the contracts folder.

**Notice that the contract is just for demonstration purposes and should not be used in production.**

You may want to use the OpenZeppelin ERC20 contract for production. But for now, we will use a simple ERC20 contract.

You can modify the following variables in the Token.sol file to create your own token:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./interface/ERC20.sol";

contract <TokenContractName> is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals
    ) ERC20(name, symbol, decimals) {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, 10000 * 10 ** uint256(decimals));
    }
}
```

If you want to use the OpenZeppelin ERC20 contract, you should use the old version of the contract because the Zircuit testnet does not support the latest version of the contract now. Make sure your solidity version is 0.8.19 or lower.

## Deploy Token

Compile the contract by running the following command:

```bash
npx hardhat compile
```

Modify the deployToken.ts file in the scripts folder to deploy your token.

```typescript
import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const TokenFactory = await ethers.getContractFactory("<TokenContractName>");
  const Token = await TokenFactory.deploy("<TokenName>", "<TokenSymbol>", <TokenDecimals>);
  console.log("Token deployed to:", Token.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

```

## Deploy Token

Use the following command to create a .env file.

```bash
cp .env.example .env
```

**Modify the .env file to include your zircuit wallet private key.**

Deploy the token by running the following command:

```bash
npx hardhat run scripts/deployToken.ts --network zircuit
```

## Create Token List

You can create a token list by modifying the zircuit.tokenlist.json file in the folder.

## How to use token-list.json

Click on the "Raw" button to get the raw JSON file.

Copy the URL of the raw JSON file.

Use the URL to add the token list to Uniswap V3.
