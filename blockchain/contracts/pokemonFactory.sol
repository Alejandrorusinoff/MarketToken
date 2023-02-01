// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

//import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract PokemonFactory {
    uint public last_completed_migration;
    uint dnaDigits = 42;
    uint dnaModulus = 10 ** dnaDigits;
    address payable public owner;
    uint fee = 0.001 ether;


    mapping (uint => address) public pokemonToOwner;
    mapping (address => uint) ownerPokemonCount;
   /*  mapping (uint => Pokemon) private pokemonStructs; */

    event NewPokemon (uint _id, uint _pokemonId, string _name, string _tipe, uint _randDna);


    struct Pokemon {
        uint pokemonId;
        string name;
        string tipe;
        string image;
        uint randDna;
    }

    Pokemon[] public pokemons; 

    constructor() payable {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "This function is restricted to the contract's owner");
        _;
    }

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

    function _createPokemon(uint _pokemonId, string memory _name, string memory _tipe, string memory _image, uint _randDna) internal {
        pokemons.push(Pokemon(_pokemonId, _name, _tipe, _image, _randDna));
        uint id = pokemons.length - 1;
        pokemonToOwner[id] = msg.sender; //asigna el dueño al zombie
        //ownerPokemonCount[msg.sender] = SafeMath.add(ownerPokemonCount[msg.sender],1); //suma un pokemon al dueño
        emit NewPokemon(id, _pokemonId, _name, _tipe, _randDna);
    }

    function getPokemonById(uint _id) public view returns(Pokemon memory) {
        return pokemons[_id];
    }

    function getAllPokemons() public view returns(Pokemon[] memory) {
        return pokemons;
    }

    function _generateRandomDna(string memory _name, string memory _tipe) private view returns(uint) {
        uint rand = uint(keccak256(abi.encode(_name, _tipe)));
        return rand % dnaModulus;
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

    function createRandomPokemon(uint _pokemonId, string memory _name, string memory _tipe, string memory _image) public onlyOwner {
        uint randDna = _generateRandomDna(_name, _tipe);
        _createPokemon(_pokemonId, _name, _tipe, _image, randDna);
    }

}

// fetch('https://pokeapi.co/api/v1/pokemon')
//   .then(response => response.json())
//   .then(data => console.log(data));