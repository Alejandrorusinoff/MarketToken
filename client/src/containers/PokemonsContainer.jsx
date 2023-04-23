import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { PokemonsComponent } from '../components'
import { PokemonCreatedContainer } from './'
import { isOwner } from '../utils/functions'
import { WelcomeView } from '../views'
import useRequests from '../hooks/useRequests'

const PokemonsContainer = () => {
    const [ url, setUrl ] = useState('https://pokeapi.co/api/v2/pokemon?offset=20&limit=12')
    const { owner, account, isCompletedQuestionnaire } = useSelector(state => state?.user)
    const estado = useRequests(url)
    const { cargando, data } = estado
    return (
        <div style={{paddingBottom: 40}}>
            {isOwner(owner, account)? 
                <PokemonsComponent results={data?.results}/> :
                isCompletedQuestionnaire ? <PokemonCreatedContainer/> : <WelcomeView/>  
            }
        </div>
    )
}

export default PokemonsContainer
