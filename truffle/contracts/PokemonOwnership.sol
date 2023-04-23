// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./PokemonHelper.sol";
import "./PKMCoint.sol";

contract PokemonOwnership is PokemonHelper, PKMCoint {
    using SafeMath for uint256;

    function getBalance() view public onlyOwner returns(uint) {
        return address(this).balance;
    }

    function balanceOfMyContract(address _owner) external view returns (uint256) {
        require(_owner != address(0), "ERC721: mint to the zero address");
        return ownerPokemonCount[_owner];
    }

    function ownerOfMyContract(uint256 _tokenId) external view returns (address) {
        return pokemonToOwner[_tokenId];
    }

    function _transferMyContract(address _from, address _to, uint256 _tokenId) private {
        ownerPokemonCount[_to] = ownerPokemonCount[_to].add(1);
        ownerPokemonCount[_from] = ownerPokemonCount[_from].sub(1);
        pokemonToOwner[_tokenId] = _to;
        emit Transfer(_from, _to, _tokenId);
    }

    function transferFromMyContract(address _from, address _to, uint256 _tokenId) public payable verifyPayment {
        require(pokemonToOwner[_tokenId] == msg.sender || zombieApprovals[_tokenId] == msg.sender);
        _transferMyContract(_from, _to, _tokenId);
    }

    function approveMyContract(address _approved, uint256 _tokenId) external payable {
        zombieApprovals[_tokenId] = _approved;
        emit Approval(msg.sender, _approved, _tokenId);
    }

}
