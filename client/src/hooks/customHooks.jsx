export function useConnectMetamask() {
    // const history = useHistory()

    async function connectMetamask() {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        localStorage.setItem('account', accounts[0]);
        // history.push('/home')
       
    }

	function disconnectMetamask() {
        localStorage.removeItem('account')
        // history.push('/login')
	}

    return {connectMetamask, disconnectMetamask}
}