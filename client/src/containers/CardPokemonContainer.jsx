import React from 'react'
import { CardPokemonComponent } from '../components'
import useRequests from '../hooks/useRequests'

const CardPokemonContainer = ({url}) => {
    const estado = useRequests(url)
    const { data } = estado

    return (
        <div>
            <CardPokemonComponent data={data}/>
        </div>
    )
}

export default CardPokemonContainer
