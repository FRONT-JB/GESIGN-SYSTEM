# RECAP

```js
// 함수 상단에 작성
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
```

```bash
npm install -g @remix-project/remixd
```

```bash
remixd -v
```

```bash
remixd -s . --remix-ide https://remix.ethereum.org
```

**[Remix WebEditor](https://remix.ethereum.org)**

_WebEditor에서 작성시 Vscode에서도 작성된다. WebEditor에서 작업하는 방향을 추천_

    SOLIDITY COMPILER
    COMPILER CONFIGUARATION -> Auto complie 설정

    DEPLOY & RUN TRANSACTIONS
    ENVIRONMENT      -> Javascript VM (London)
    CONTRACT         -> 생성한 컨트랙트 함수 지정 (MintAnimalToken)
    Deploy           -> 콘솔창에 해당 로그 출력
    Deploy Contracts -> Deploy된 컨트랙트를 확인 할 수 있다.
                        ( 내부의 값은 openzeppelin 에서 제공하는 값)
    mintAnimal       -> 민트 버튼을 클릭해서 민트 상태를 만들 수 있다.
                        ownerOf 값에 tokenId를 검색해서 해당 NFT 소유자 지갑 정보를 검색할 수 있다.
                        ( 상단 ACCOUNT 메뉴에서 지갑을 변경하여 여러 지갑으로 민트를 진행한다. )
