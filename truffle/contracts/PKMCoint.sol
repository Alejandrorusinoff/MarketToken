// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PKMCoint is ERC20 {
    mapping (address => StructArrayExter) public mapQuestions;

    struct StructArrayExter {
        string[][] question;
        bool state;
    }

    constructor() ERC20("PKMCoint", "PKM") {
        _mint(msg.sender, 1000000000000000000000000000);
    }

    function setAnswer(address _user, string[][] memory _questionAndAnswers, bool _state) public {
        mapQuestions[_user].question = _questionAndAnswers;
        mapQuestions[_user].state = _state;
    }

    function getAnswer(address _user) public view returns(StructArrayExter memory) {
        return mapQuestions[_user];
    }

    function getbalance() public view returns(uint) {
        return address(this).balance;
    }

}

