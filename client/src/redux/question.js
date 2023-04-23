import { createAction, createReducer } from "@reduxjs/toolkit";

const obj= {}

export const setQuestion = createAction('SET_QUESTION3')
const questionReducer = createReducer(obj, {
    [setQuestion]: (state, action) => action.payload
})

export default questionReducer