import React from 'react'
import { CardsContainer } from '../containers'

const PokemonsComponent = ({results}) => {

    return (
        <div>
            <CardsContainer results={results}/>
        </div>
    )
}

export default PokemonsComponent
