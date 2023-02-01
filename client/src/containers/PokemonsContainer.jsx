import React, {useState} from 'react'
import { PokemonsComponent } from '../components'
import useRequests from '../hooks/useRequests'

const PokemonsContainer = () => {
    const [ url, setUrl ] = useState('https://pokeapi.co/api/v2/pokemon?offset=20&limit=100')
    const estado = useRequests(url)
    const { cargando, data } = estado
    return (
        <div>
            <PokemonsComponent results={data?.results}/>
        </div>
    )
}

export default PokemonsContainer
