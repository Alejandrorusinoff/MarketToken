// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/utils/Counters.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";

contract PokemonFactory {
    // uint public last_completed_migration;
    uint dnaDigits = 42;
    uint dnaModulus = 10 ** dnaDigits;
    address payable public owner;
    mapping (uint => address) public pokemonToOwner;
    mapping (address => uint) public ownerPokemonCount;
    mapping (uint => address) public zombieApprovals;
    Pokemon[] public pokemons; 
    using SafeMath for uint256;

    event NewPokemon (uint _id, uint _pokemonId, string _name, string[] _tipe, string[] _abilities, uint _randDna, bool _created, string _image);
    // event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
    // event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
    // event Ale(address _owner );
    event Msg(string _msg, uint _id);

    struct TypesPokemons {
        string types1;
        string types2;
    }

    struct Pokemon {
        uint pokemonId;
        uint indexArray;
        string name;
        string[] tipes;
        string[] abilities;
        string image;
        uint randDna;
        bool created;
    }

    constructor() payable {
        owner = payable(msg.sender);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "This function is restricted to the contract's owner");
        _;
    }

    function _createPokemon(uint _pokemonId, string memory _name, string[] memory _tipe, string[] memory _abilities, string memory _image, bool _created) internal returns(string memory){
        for (uint256 i = 0; i < pokemons.length; i++) {
            if (pokemons[i].pokemonId == _pokemonId) {
                return 'el pokemon ya existe';
            } 
        }
        uint index = pokemons.length;
        uint _randDna = _generateRandomDna(_name, _tipe, index);
        pokemons.push(Pokemon(_pokemonId, index, _name, _tipe, _abilities, _image, _randDna, _created));
        uint id = pokemons.length - 1;
        pokemonToOwner[id] = msg.sender; //asigna el dueño al zombie
        ownerPokemonCount[msg.sender] = SafeMath.add(ownerPokemonCount[msg.sender],1); //suma un pokemon al dueño
        emit NewPokemon(id, _pokemonId, _name, _tipe, _abilities, _randDna, _created, _image);
        return 'pokemon creado exitosamente';
    }

    function _generateRandomDna(string memory _name, string[] memory _tipe, uint _index) private view returns(uint) {
        uint rand = uint(keccak256(abi.encode(_name, _tipe, _index)));
        return rand % dnaModulus;
    }

    function createRandomPokemon(uint _pokemonId, string memory _name, string[] memory _tipe, string[] memory _abilities, string memory _image, bool _created) public onlyOwner {
        _createPokemon(_pokemonId, _name, _tipe, _abilities, _image, _created);
    }
}

//let instance = await PokemonFactory.deployed()

// instance.createRandomPokemon(1, 'pikachu', 'electrico', 'imagen de rata');

// instance.createRandomPokemon(2, 'squirtle', 'agua', 'imagen squirtle');

// instance.pokemons(0);
// instance.pokemons(1);

// instance.pokemonToOwner(0);
// instance.pokemonToOwner(1);

// instance.ownerPokemonCount(accounts[0]);

//let instance2 = await PokemonHelper.deployed()




