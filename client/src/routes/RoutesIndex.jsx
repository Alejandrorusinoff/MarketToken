import React from 'react'
import { Routes, Route, Redirect } from 'react-router-dom'
import { HomeView } from '../views'

const RoutesIndex = () => {
    return (
        <div>
            <Routes>
                <Route index element={<HomeView/>}/>
            {/* <Route path='/*' to='/'/> */}
        </Routes>
        </div>
    )
}

export default RoutesIndex
