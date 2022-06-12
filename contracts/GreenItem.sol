//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract GreenItem is ERC1155Burnable {
    uint256 public constant GREEN = 0;
    uint256 public constant YELLOW = 1;
    uint256 public constant BLUE = 2;
    uint256 public constant GREENL2 = 3;
    uint256 public constant YELLOWL2 = 4;
    uint256 public constant BLUE2 = 5;
    uint256 public constant GREENL3 = 6;
    uint256 public constant YELLOWL3 = 7;
    uint256 public constant BLUE3 = 8;

    mapping(uint256 => string) private _tokenURIs;
    // ultimate token
    uint256 public constant RECYCLER = 9;

    constructor() public ERC1155("GreenNFT GN") {
        _tokenURIs[
            0
        ] = "https://bafkreibj5sfqv3ocoztws4s2sedmveirfu2cajejwmkfvjyvzbbijzjqs4.ipfs.nftstorage.link/";
        _tokenURIs[
            1
        ] = "https://bafkreiauxxb4cvprvxwjy7u3uxt24x5yxvujabkpdkkjwop4lcdfao3mxq.ipfs.nftstorage.link/";
        _tokenURIs[
            2
        ] = "https://bafkreibnlspgsq4cpwfthz2npfllios2fivzt24lzgxn465qye63tdogmu.ipfs.nftstorage.link/";
        _tokenURIs[
            3
        ] = "https://bafkreif2mhzmwstndyebzc5zkaceb5w2vqod3rcxxbr7glmevl4jhzxo2q.ipfs.nftstorage.link/";
        _tokenURIs[
            4
        ] = "https://bafkreie6p65255ehx6wucthjmewmr5tyrt2o2iv3vc7igcrc5mqeixwpty.ipfs.nftstorage.link/";
        _tokenURIs[
            5
        ] = "https://bafkreidindqv4qkzwzfvcqd53ok2ynw2b65z4fkta4abhfrypt3f3bkpmq.ipfs.nftstorage.link/";
        _tokenURIs[
            6
        ] = "https://bafkreifdov4ydqzmw2kfyuhlbje4fjgw45t4k2njhc4n4ozznc2ltlie4m.ipfs.nftstorage.link/";
        _tokenURIs[
            7
        ] = "https://bafkreiemjw2mrzboobhhumlpwwhjzopgvrjgdinfdpoomegcjkgcbzx2xy.ipfs.nftstorage.link/";
        _tokenURIs[
            8
        ] = "https://bafkreif2ksr6jzinmgvksdfltstge7pfcqvtparnpbduzr6w4lvv7pelqa.ipfs.nftstorage.link/";
        _tokenURIs[
            9
        ] = "https://bafkreicde5fefxpzvltke3witeb3whw4lm6tobxyvyw55m6e25xwvue3xm.ipfs.nftstorage.link/";

        _mint(msg.sender, GREEN, 10000, "");
        _mint(msg.sender, YELLOW, 10000, "");
        _mint(msg.sender, BLUE, 10000, "");
        _mint(msg.sender, GREENL2, 10000, "");
        _mint(msg.sender, YELLOWL2, 10000, "");
        _mint(msg.sender, BLUE2, 10000, "");
        _mint(msg.sender, GREENL3, 10000, "");
        _mint(msg.sender, YELLOWL3, 10000, "");
        _mint(msg.sender, BLUE3, 10000, "");
        _mint(msg.sender, RECYCLER, 10000, "");
    }

    // p_id = 1 Plastic , p_id = 2 Battery , p_id=3 Glass
    function recycle(uint256 process_id) public {
        if (process_id == 1) {
            _mint(msg.sender, GREEN, 1, "");
        } else if (process_id == 2) {
            _mint(msg.sender, YELLOW, 1, "");
        } else {
            _mint(msg.sender, BLUE, 1, "");
        }
    }

    function Green1to2() public {
        require(balanceOf(msg.sender, 0) >= 5, "Not enough green token!");
        burn(msg.sender, 0, 5);
        _mint(msg.sender, GREENL2, 1, "");
    }

    function Green2to3() public {
        require(balanceOf(msg.sender, 3) >= 5, "Not enough green2 token!");
        burn(msg.sender, 3, 5);
        _mint(msg.sender, GREENL3, 1, "");
    }

    function Yellow1to2() public {
        require(balanceOf(msg.sender, 1) >= 5, "Not enough yellow token!");
        burn(msg.sender, 1, 5);
        _mint(msg.sender, YELLOWL2, 1, "");
    }

    function Yellow2to3() public {
        require(balanceOf(msg.sender, 4) >= 5, "Not enough yellow2 token!");
        burn(msg.sender, 4, 5);
        _mint(msg.sender, YELLOWL3, 1, "");
    }

    function Blue1to2() public {
        require(balanceOf(msg.sender, 2) >= 5, "Not enough blue token!");
        burn(msg.sender, 2, 5);
        _mint(msg.sender, BLUE2, 1, "");
    }

    function Blue2to3() public {
        require(balanceOf(msg.sender, 5) >= 5, "Not enough blue2 token!");
        burn(msg.sender, 5, 5);
        _mint(msg.sender, BLUE3, 1, "");
    }

    function level_up_to_recycler() public {
        require(
            balanceOf(msg.sender, 6) >= 5 &&
                balanceOf(msg.sender, 7) >= 5 &&
                balanceOf(msg.sender, 8) >= 5,
            "not enough Token!"
        );
        burn(msg.sender, 6, 5);
        burn(msg.sender, 7, 5);
        burn(msg.sender, 8, 5);
        _mint(msg.sender, RECYCLER, 1, "");
    }

    function uri(uint256 tokenId) public view override returns (string memory) {
        return (_tokenURIs[tokenId]);
    }
}
