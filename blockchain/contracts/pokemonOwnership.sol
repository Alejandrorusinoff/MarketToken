// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// import "./zombieattack.sol";
import "./pokemonFactory.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
// import "./safemath.sol";

contract PokemonOwnership is PokemonFactory, ERC721URIStorage {
    
constructor() ERC721("GameItem", "ITM") {}
//   using SafeMath for uint256;

    // mapping (uint => address) zombieApprovals;

    // function balanceOf(address _owner) external view returns (uint256) {
    //     return ownerPokemonCount[_owner];
    // }

    // function ownerOf(uint256 _tokenId) external view returns (address) {
    //     return pokemonToOwner[_tokenId];
    // }

    // function _transfer(address _from, address _to, uint256 _tokenId) private {
    //     ownerPokemonCount[_to] = ownerPokemonCount[_to].add(1);
    //     ownerPokemonCount[msg.sender] = ownerPokemonCount[msg.sender].sub(1);
    //     pokemonToOwner[_tokenId] = _to;
    //     emit Transfer(_from, _to, _tokenId);
    // }

    // function transferFrom(address _from, address _to, uint256 _tokenId) external payable {
    //     require (pokemonToOwner[_tokenId] == msg.sender || zombieApprovals[_tokenId] == msg.sender);
    //     _transfer(_from, _to, _tokenId);
    // }

//   function approve(address _approved, uint256 _tokenId) external payable onlyOwnerOf(_tokenId) {
//       zombieApprovals[_tokenId] = _approved;
//       emit Approval(msg.sender, _approved, _tokenId);
//     }

}



// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

contract GameItem is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("GameItem", "ITM") {}

    function awardItem(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }
}