import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { convertArrayToObject } from '../utils/functions'
import { transferFromMyContract, approveMyContract, getPokemonsByOwner, getPokemonById } from '../services/requestWeb3'
import { setUser } from '../redux/user'
import { PokemonCreatedComponent } from '../components'
import '../components/styles.css'

const PokemonCreatedContainer = () => {
    const user  = useSelector(state => state?.user)
    const { pokemonsCreated, owner, account } = user
    const dispatch = useDispatch()
    
    async function buyPokemon(owner, account, pokemonId,) {
        await approveMyContract(account, pokemonId)
        await transferFromMyContract(owner, account, pokemonId)
        const pokemonsId = await getPokemonsByOwner(owner);
        const pokemonsCreated = await Promise.all(pokemonsId.map(async(pokemonId) => await getPokemonById(pokemonId)))
        dispatch(setUser({...user, 'pokemonsCreated': convertArrayToObject(pokemonsCreated) }));
    }

    return (
        <div className='containerPokemons'>
            {pokemonsCreated?.map((pokemon, index) => <PokemonCreatedComponent key={index} pokemon={pokemon} owner={owner} account={account} buyPokemon={buyPokemon}/>)}  
        </div>
    )
}

export default PokemonCreatedContainer
