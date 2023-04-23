import React from 'react'
import { ListOrdersComponent } from '../components'

const ListOrdersContainer = ({pokemon}) => {

    return (
        <div>
            <ListOrdersComponent pokemon={pokemon}/>
        </div>
    )
}

export default ListOrdersContainer
