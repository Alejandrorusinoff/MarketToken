import { createAction, createReducer } from "@reduxjs/toolkit";

const user = {
    account: null,
    balance: null,
    owner: null,
    pokemons: [],
    pokemonsCreated: [],
    isCompletedQuestionnaire: null,
    // isMetamask: null,
    // nft: false,
    // token: null,
}

export const setUser = createAction('SET_USER')
const userReducer = createReducer(user, {
    [setUser]: (state, action) => action.payload
})

export default userReducer