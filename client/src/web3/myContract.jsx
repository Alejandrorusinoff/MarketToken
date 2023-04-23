import Web3 from 'web3';
// import contract from '../buildSmartContract/PokemonFactory.json'
import contract from '../buildSmartContract/PokemonOwnership.json'
import contractPKMCoint from '../buildSmartContract/PKMCoint.json'

export const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545")

const cryptoPokemonsAddress = contract?.networks?.[Object.keys(contract?.networks)[0]]?.address
// const cryptoPokemonsAddress = '0x23fD25000EA7cd13EE82b9EC7C9E31AEb6B720eA'
const obj = contract?.networks
const cryptoPokemonsABI = contract?.abi

const PKMCointAddress = contractPKMCoint?.networks?.[Object.keys(contractPKMCoint?.networks)[0]]?.address
// const PKMCointAddress = '0x9aab623FEd916371e2eb67e7e22a20382123eD75'
const PKMCointABI = contractPKMCoint?.abi

export const myContract = new web3.eth.Contract(cryptoPokemonsABI, cryptoPokemonsAddress);

export const myContractPKMCoint = new web3.eth.Contract(PKMCointABI, PKMCointAddress);

