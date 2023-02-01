import React from 'react'
import { CardsComponent } from '../components'

const CardsContainer = ({results}) => {
    return (
        <div>
            <CardsComponent results={results}/>
        </div>
    )
}

export default CardsContainer
