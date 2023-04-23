import React from 'react'
import './ListOrderStyles.css'

const ListOrdersComponent = ({pokemon}) => {

    return (
        <button className='containerSidebarImage' style={{display: 'flex', border: 0, alignItems: 'center', marginBottom: 20, borderRadius: 8, width: '100%'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div>
                <img src={pokemon?.image} alt='image product' style={{width: 110, height: 110}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <div><span style={{color: 'rgb(43, 43, 164)', fontWeight: 700}}>Name: </span><span style={{color: 'rgb(43, 43, 164)', fontWeight: 400}}>{pokemon?.name}</span></div>
                <div><span style={{color: 'rgb(43, 43, 164)', fontWeight: 700}}>Types: </span><span style={{color: 'rgb(43, 43, 164)', fontWeight: 400}}>{pokemon?.tipes}</span></div>
            </div>
        </button>
    )
}

export default ListOrdersComponent
