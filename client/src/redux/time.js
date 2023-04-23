import { createAction, createReducer } from "@reduxjs/toolkit";

export const setTimer = createAction('SET_TIME')
const timeReducer = createReducer('',{
    [setTimer]: (state, action) => action.payload
})

export default timeReducer