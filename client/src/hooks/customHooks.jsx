import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user";

export function useConnectMetamask() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    async function connectMetamask() {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            localStorage.setItem('account', accounts[0]);
            dispatch(setUser({...user, account: accounts[0]}))
        }
        else { window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=es-419', '_blank') }
    }

	function disconnectMetamask() {
        localStorage.removeItem('account')
        dispatch(setUser({...user, account: null, owner: null, pokemons: [], pokemonsCreated:[], balance: null}))
	}

    return {connectMetamask, disconnectMetamask}
}