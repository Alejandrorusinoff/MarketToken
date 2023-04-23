const PokemonFactory = artifacts.require("PokemonFactory");
const PokemonOwnership = artifacts.require("PokemonOwnership");
const PokemonHelper = artifacts.require("PokemonHelper");
const PKMCoint = artifacts.require("PKMCoint");

module.exports = function (deployer) {
  deployer.deploy(PokemonFactory);
  deployer.deploy(PokemonOwnership);
  deployer.deploy(PokemonHelper);
  deployer.deploy(PKMCoint);
};
