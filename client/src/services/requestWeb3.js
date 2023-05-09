import { web3, myContract, myContractPKMCoint, } from "../web3/myContract";
import { successToast } from "../utils/functions";

export async function getOwner() {
    const owner = await myContract.methods.owner().call()
    return owner
}

export async function getBalanceEther(account) {
    const balance = await web3.eth.getBalance(account);
    return web3.utils.fromWei(balance, 'ether')
}

export async function createPokemon(pokemonId, name, arrayType, arrayAbilites, img, state) { //
    const accountMetamask = await web3.eth.getAccounts()
    const account = accountMetamask[0]
    const result = await myContract.methods.createRandomPokemon(pokemonId, name, arrayType, arrayAbilites, img, state).send({from: account})
    const event = await myContract.getPastEvents('NewPokemon')
    successToast(event[0]?.returnValues?._name? `Pokemon ${event[0]?.returnValues?._name}`: `Pokemon ya existe`)
    return result
}

export async function getPokemonById(pokemonId) { //
    const accountMetamask = await web3.eth.getAccounts()
    const account = accountMetamask[0]
    return await myContract.methods.getPokemonById(pokemonId).call({from: account})
}

export function getPokemonToOwner(account) {
    return myContract.methods.getPokemonToOwner(account).call()
}

export async function getAllPokemons() { //
    const result = await myContract.methods.getAllPokemons().call()
    return result
}

export function getPokemonsByOwner(address) { //
    return myContract.methods.getPokemonsByOwner(address).call()
}

export async function balanceOfMyContract(owner) {
    const balance = await myContract.methods.getBalance().call({from: owner})
    return web3.utils.fromWei(balance, 'ether');
}

export function ownerOfMyContract(tokenId) {
    return myContract.methods.ownerOfMyContract(tokenId).call()
}

export async function transferFromMyContract(from, to, tokenId) {
    const accountMetamask = await web3.eth.getAccounts()
    const account = accountMetamask[0]
    return await myContract.methods.transferFromMyContract(from, to, tokenId).send({from: account, value: '1000000000000000000'})
}

export async function approveMyContract(approved, tokenId) {
    return await myContract.methods.approveMyContract(approved, tokenId).send({from: approved})
}

export async function withdraw() {
    const accountMetamask = await web3.eth.getAccounts()
    const account = accountMetamask[0]
    return await myContract.methods.withdraw().send({from: account})
}

export async function getBalancePKM(account) {
    const balance = await myContractPKMCoint.methods.balanceOf(account).call()
    return web3.utils.fromWei(balance, 'ether')
}

export async function getSymbol() {
    return await myContractPKMCoint.methods.symbol().call()
}

export async function setAnswer(account, answer, state) {
    await myContractPKMCoint.methods.setAnswer(account, answer, state).send({from: account})
}

export async function getAnswer(account) {
    return await myContractPKMCoint.methods.getAnswer(account).call()
}

export async function getPay(account, owner) {  
    let amount = await web3.utils.toHex(web3.utils.toWei("10")); //10 DEMO Token
    let data = await myContractPKMCoint.methods.transfer(account, amount).encodeABI()
    const privateKey = ''

    let txObj = await {
        gas: web3.utils.toHex(100000),
        to: myContractPKMCoint?._address,
        value: "0x00",
        data: data,
        from: owner
    }

    await web3.eth.accounts.signTransaction(txObj, privateKey, (err, signedTx) => {
        if (err) {
            return console.log(err)
        } else {
            return web3.eth.sendSignedTransaction(signedTx.rawTransaction, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log(res)
                }
            })
        }
    }) 
}
