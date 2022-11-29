import axios from "axios";

const enderecoApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});

async function getAllPokemon() {
    const {data} = await enderecoApi.get('pokemon?offset=0&limit=1126');
    return data;
}

async function getCharmander() {
    const {data} = await enderecoApi.get('pokemon/lucario');
    return data;
}

export {getAllPokemon, getCharmander, enderecoApi};