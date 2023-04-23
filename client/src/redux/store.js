import {configureStore, } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userReducer from './user'
import questionReducer from './question'
import timeReducer from './time'

const store = configureStore({
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        question: questionReducer,
        time: timeReducer,
    }
})

export default store