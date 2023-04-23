import React from 'react'
import { CardPokemonComponent } from '../components'
import { useSelector } from 'react-redux'
import useRequests from '../hooks/useRequests'

const CardPokemonContainer = ({url}) => {
    const user = useSelector(state => state.user)
    const estado = useRequests(url)
    const { data } = estado

    return (
        <div>
            <CardPokemonComponent data={data} user={user}/>
        </div>
    )
}

export default CardPokemonContainer
