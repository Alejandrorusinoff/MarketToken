import React from 'react'
import { firstUppercase, returnArray } from '../../utils/functions'
import { createPokemon, } from '../../services/requestWeb3'

const CardPokemonComponent = ({data}) => {
    const id = data?.id
    const name = data?.forms[0]?.name
    const types = returnArray(data?.types, 'type', 'name') 
    const abilities = returnArray(data?.abilities, 'ability', 'name')
    const img = data?.sprites?.front_default

    return (
        <div className='container1'>
            <div className='price'>1 ETH</div>
                <div className='container2'>
                    <div className='container3'>{firstUppercase(name)}</div>
                    <div className='containerImage'><img src={img} alt="" /></div>
                <div style={{height: 150}}>
                    <div style={{height: 55, display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                        <div>Type</div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', height: 35, }}>
                            {types?.map((t, index) => 
                            <div key={index} style={{ fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{firstUppercase(t)}</div>)}
                        </div>
                    </div>

                    <div style={{height: 55}}>
                        <div style={{fontSize: 15, display: 'flex', margin: 10}}>Habilities</div>
                        <div>{abilities?.map((t, index) => 
                            <li key={index} style={{fontSize: 13}}>{firstUppercase(t)}</li>)}
                        </div>
                    </div>
                </div>
            </div>
            <button className='buttonCard' onClick={() => createPokemon(id, name, types, abilities, img, true)}>Create Token</button>
        </div>
    )
}

export default CardPokemonComponent
