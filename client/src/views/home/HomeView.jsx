import React from 'react'
import { PokemonsContainer } from '../../containers'
import { useConnectMetamask } from '../../hooks/customHooks'
import './homeStyles.css'

const HomeView = () => {
    const { connectMetamask } = useConnectMetamask()


    return (
        <div>
            <div style={{display: 'flex',  justifyContent: 'flex-end'}}>
                <button className='connectMetamask' type='button' onClick={() =>connectMetamask()}>Connect Metamask</button>
            </div>
            <PokemonsContainer/>
        </div>
    )
}

export default HomeView
