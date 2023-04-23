import React from 'react'
import { firstUppercase } from '../../utils/functions'
import { warningToast } from '../../utils/functions'

const PokemonCreatedComponent = ({ pokemon, owner, account, buyPokemon}) => {

    return (
        <div className='container1'>
            <div className='price'>1 ETH</div>
                <div className='container2'>
                    <div className='container3'>{firstUppercase(pokemon?.name)}</div>
                    <div className='containerImage'><img src={pokemon?.image} alt="" /></div>
                <div style={{height: 150}}>
                    <div style={{height: 55, display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                        <div>Type</div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', height: 35, }}>
                            {pokemon?.tipes?.map((t, index) => 
                            <div key={index} style={{ fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{firstUppercase(t)}</div>)}
                        </div>
                    </div>

                    <div style={{height: 55}}>
                        <div style={{fontSize: 15, display: 'flex', margin: 10}}>Habilities</div>
                        <div>{pokemon?.abilities?.map((t, index) => 
                            <li key={index} style={{fontSize: 13}}>{firstUppercase(t)}</li>)}
                        </div>
                    </div>
                </div>
            </div>
            <button className='buttonCard' onClick={ async() => account? await buyPokemon(owner, account, pokemon?.id): warningToast('Debe conectarse con Metamask')}>Buy Token</button>
        </div>
    )
}

export default PokemonCreatedComponent
