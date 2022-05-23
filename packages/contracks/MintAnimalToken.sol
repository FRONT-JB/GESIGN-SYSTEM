// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintAnimalToken is ERC721Enumerable {
    constructor() ERC721("h662Animals", "HAS"){}

    mapping(uint256 => uint256) public animalTypes;

    function mintAnimalToken() public {
        // 유일한 값
        uint256 animalTokenId = totalSupply() + 1;

        // 실행한 시간, 실행한 사람, 토큰아이디 (1부터 5까지 랜덤함수)
        uint256 animalType = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, animalTokenId))) % 5 + 1;
        
        // 1번부터 5번까지의 토큰값
        animalTypes[animalTokenId] = animalType;

        // 이 명령어를 실행한 사람
        _mint(msg.sender, animalTokenId);
    }
}