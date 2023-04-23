import React, { useState } from 'react'
import { ListOrdersContainer } from '../../containers'
import { isOwner } from '../../utils/functions'
import './SidebarStyles.css'

const SidebarComponent = ({ user, pokemons, getPokemonsWallet, getPokemonsCreated, withdrawFunds}) => {

    return (
        <div>
            {isOwner(user?.owner, user?.account)? 
                <button className="pokemonWallet" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" onClick={ async () =>  getPokemonsCreated()}>
                    <div style={{ display: 'flex', marginRight: 10}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                    <div>Pokemon created</div>
                </button> :
                <button className="pokemonWallet" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" onClick={ async () =>  getPokemonsWallet(user?.account)}>
                    <div style={{ display: 'flex', marginRight: 10}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </div>
                    <div>Pokemon wallet</div>
                </button>
            }

            <div className="offcanvas offcanvas-start containerSidebar" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{overflow: 'scrollY', height: '100vh'}}>
                {isOwner(user?.owner, user?.account)? 
                <button className='withdraw' type='button' onClick={() => withdrawFunds()}>{'Retirar Fondos'}</button> : null
                }
                <div className="offcanvas-header">
                    {isOwner(user?.owner, user?.account)? 
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Pokemons created</h5> :
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Pokemon wallet</h5>
                    }


                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                {isOwner(user?.owner, user?.account)? 
                    <div className="offcanvas-body">
                        {user?.pokemonsCreated?.map((pokemon, index) => <div key={index}><ListOrdersContainer pokemon={pokemon}/></div>)}  
                    </div> :
                    <div className="offcanvas-body">
                        {pokemons.map((pokemon, index) => <div key={index}><ListOrdersContainer pokemon={pokemon}/></div>)}  
                    </div>
                }
            </div>
        </div>
    )
}

export default SidebarComponent
