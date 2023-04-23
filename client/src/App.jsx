import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/user';
import { ToastContainer } from "react-toastify";
import RoutesIndex from './routes/RoutesIndex';
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  
  useEffect(() => {
      updateAccounts()
  },[user.account])

  async function updateAccounts() {
    await window.ethereum.on('accountsChanged', function (accounts) {
      const account = accounts[0]
      localStorage.setItem('account', account)
      dispatch(setUser({...user, 'account': account, }))
    })
  }
  
  return (
    <div className="App">
      <RoutesIndex/>
      <ToastContainer/>
    </div>
  );
}

export default App;
