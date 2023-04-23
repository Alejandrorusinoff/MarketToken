import React, {useEffect} from 'react'
import { PokemonsContainer, SidebarContainer } from '../../containers'
import { useConnectMetamask } from '../../hooks/CustomHooks'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/user'
import { getStateLocalStorage, isOwner, convertArrayToObject, cutString } from '../../utils/functions'
import { getOwner, getPokemonById, getPokemonsByOwner, getAnswer, getBalancePKM, getSymbol, getBalanceEther, balanceOfMyContract} from '../../services/requestWeb3'
import './homeStyles.css'


const HomeView = () => {
    const user = useSelector(state => state.user)
    const { connectMetamask, disconnectMetamask } = useConnectMetamask()
    const { getAccountLocalStorage } = getStateLocalStorage()
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            const owner = await getOwner();
            const pokemonsId = await getPokemonsByOwner(owner);
            const { state } = user?.account? await getAnswer(user?.account): false
            const pokemonsCreated = await Promise.all(pokemonsId.map(async(pokemonId) => await getPokemonById(pokemonId)))
            dispatch(setUser({...user, 
                'owner': owner, 
                'account': getAccountLocalStorage, 
                'pokemonsCreated': convertArrayToObject(pokemonsCreated), 
                'balancePKM': await getBalancePKM(user?.account), 
                'balanceETH': await balanceOfMyContract(user?.owner),
                'isCompletedQuestionnaire': state, 
                'symbol': await getSymbol(),
            }));
        })();
    }, []);
    
    useEffect(() => {
        (async () => {
            const owner = await getOwner();
            const pokemonsId = await getPokemonsByOwner(owner);
            const { state } = user?.account? await getAnswer(user?.account): false
            const pokemonsCreated = await Promise.all(pokemonsId.map(async(pokemonId) => await getPokemonById(pokemonId)))
            dispatch(setUser({...user, 
                'owner': owner, 
                'account': getAccountLocalStorage, 
                'pokemonsCreated': convertArrayToObject(pokemonsCreated), 
                'balancePKM': await getBalancePKM(user?.account), 
                'balanceETH': await balanceOfMyContract(user?.owner),
                'isCompletedQuestionnaire': state, 
                'symbol': await getSymbol(),
            }));
        })();
    }, [user?.account]);

    return (
        <div>
            <div className='containerHomeView'>
                <div style={{width: '25%', display: 'flex', justifyContent: 'flex-start'}}> { user?.account? <SidebarContainer/> : <div></div> }</div>
                <div style={{width: '50%', display: 'flex', justifyContent: 'space-evenly'}}>
                {isOwner(user?.owner, user?.account)?
                    <>
                        <div className='balance'>{`Contract balance: ${user?.balanceETH? cutString(user?.balanceETH): 0} ETH`}</div>
                        <div className='balance'>{`Balance PKMCoint: ${user?.balancePKM? user?.balancePKM: 0} PKM `}</div>
                    </>:
                    <div className='balance'>{`Balance PKMCoint: ${user?.balancePKM ? user?.balancePKM : 0} PKM `}</div>
                }</div>
                <div style={{width: '25%', display: 'flex', justifyContent: 'flex-end'}}>
                    <button className='connectMetamask' type='button' onClick={() => user?.account? disconnectMetamask(): connectMetamask()}>{user?.account? 'Disconnet Metamask' :'Connect Metamask'}</button>
                </div>
            </div>
            <PokemonsContainer/> 
        </div>
    )
}

export default HomeView

