// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./interface/ERC20.sol";

contract TestToken is ERC20 {
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
