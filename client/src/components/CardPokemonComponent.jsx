import React from 'react'
import { firstUppercase } from '../utils/functions'

const CardPokemonComponent = ({data}) => {
    console.log(data)
    //console.log(data?.abilities[0]?.ability?.name)
    console.log(data?.types[0]?.type?.name)
    const state = true

    return (
        <div style={{height: 380, width: 250, border: '1px solid red', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{border: '1px solid red', height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>0,01 ETH</div>
            <div style={{border: '1px solid red', height: 320, width: 190, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <div style={{/* border: '1px solid red', */ height: 30, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{firstUppercase(data?.forms[0]?.name)}</div>
                <div  style={{/* border: '1px solid red', */ height: 110,}}><img /* style={{height: 100}} */ src={data?.sprites?.front_default} alt="" /></div>

                <div style={{height: 150}}>
                    <div style={{height: 55, border: '1px solid red', display: 'flex', justifyContent: 'center', flexDirection: 'column', }}>
                        <div>Type</div>
                        <div style={{display: 'flex', justifyContent: 'space-evenly', height: 35, }}>
                            {data?.types?.map((t, index) => 
                            <div key={index} style={{ /*border: '1px solid red', */ fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{firstUppercase(t?.type?.name)}</div>)}
                        </div>
                    </div>

                    <div style={{height: 55}}>
                        <div style={{fontSize: 15, display: 'flex', margin: 10}}>Habilities</div>
                        <div>{data?.abilities?.map((t, index) => 
                            <li key={index} style={{fontSize: 13}}>{firstUppercase(t?.ability?.name)}</li>)}
                        </div>
                    </div>
                </div>
                {state ? <button style={{height: 30, }}>Crear Token</button>: <button>Comprar Token</button>}
            </div>
            <div style={{height: 30}}></div>
        </div>
    )
}

export default CardPokemonComponent
