// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintAnimalToken is ERC721Enumerable {
    constructor() ERC721("h662Animals", "HAS"){}

    function mintAnimalToken() public {
        // 유일한 값
        uint256 animalTokenId = totalSupply() + 1;
        // 이 명령어를 실행한 사람
        _mint(msg.sender, animalTokenId);
    }
}