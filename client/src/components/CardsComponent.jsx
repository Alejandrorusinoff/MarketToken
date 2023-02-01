import React from 'react'
import { CardPokemonContainer } from '../containers'
import './styles.css'

const CardsComponent = ({results}) => {
    return (
        <div className='containerPokemons'>
            {results?.map((p, i) => <div key={i}><CardPokemonContainer url={p.url}/></div>)}
        </div>
    )
}

export default CardsComponent
