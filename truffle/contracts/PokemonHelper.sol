// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./PokemonFactory.sol";

contract PokemonHelper is PokemonFactory {
    uint fee = 1 ether;
    
    modifier verifyPayment() {
        require(msg.value  <= fee, "insufficient payment");
        _;
    }
    
    modifier onlyOwnerOf(uint _id) {
        require(pokemonToOwner[_id] == msg.sender, "he is not the owner of the pokemon");
        _;
    }

    function setFee(uint _fee) external onlyOwner {
        fee = _fee;
    }

    //retiramos el dinero del contrato
    function withdraw() external onlyOwner {
        (bool sent, ) = owner.call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");
    }

    function getPokemonById(uint _id) public view returns(Pokemon memory) {
        return pokemons[_id];
    }

    function getAllPokemons() public view returns(Pokemon[] memory) {
        return pokemons;
    }

    function getPokemonsByOwner(address _owner) public view returns(uint[] memory) {
        //creamos una logica para que me devuelva un array de la cantidad de pokemons que tiene el dueño
        uint[] memory result = new uint[](ownerPokemonCount[_owner]);
        uint counter = 0;
        for (uint256 i = 0; i < pokemons.length; i++) {
            if (pokemonToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            } 
        }
        return result;
    }
}
