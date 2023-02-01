import axios from 'axios'

export function getPokemons(urlApi) {
    return axios.get(`${urlApi}`)
}