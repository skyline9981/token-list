# token-list

## Create Token

You can create an ERC20 token by modifying the Token.sol file in the contracts folder.

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

## Deploy Token

Compile the contract by running the following command:

```bash
npm hardhat compile
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

You can deploy the token by running the following command:

```bash
npm hardhat run scripts/deployToken.ts --network zircuit
```
