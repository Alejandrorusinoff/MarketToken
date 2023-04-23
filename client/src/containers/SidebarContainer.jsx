import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllPokemons, getPokemonsByOwner, getPokemonById, withdraw, balanceOfMyContract } from '../services/requestWeb3'
import { convertArrayToObject } from '../utils/functions'
import { setUser } from '../redux/user';
import { SidebarComponent } from '../components'

const SidebarContainer = () => {
    const [ pokemons, setPokemons ] = useState([])
    const user = useSelector(state => state?.user)
    const dispatch = useDispatch()

    async function getPokemonsWallet(account) {
        const pokemonsId = await getPokemonsByOwner(account);
        const pokemonsCreated = await Promise.all(pokemonsId.map(async(pokemonId) => await getPokemonById(pokemonId)))
        setPokemons(pokemonsCreated)
    }
    
    async function getPokemonsCreated () {
        const pokemonsCreated = await getAllPokemons()
        dispatch(setUser({...user, 'pokemonsCreated': convertArrayToObject(pokemonsCreated)}));
    }

    async function withdrawFunds() {
        await withdraw()
        dispatch(setUser({...user, 'balanceETH': await balanceOfMyContract(user?.owner)}));
    }

    return (
        <div>
            <SidebarComponent user={user} pokemons={pokemons} getPokemonsWallet={getPokemonsWallet} getPokemonsCreated={getPokemonsCreated} withdrawFunds={withdrawFunds}/>
        </div>
    )
}

export default SidebarContainer
