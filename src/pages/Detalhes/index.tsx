import { useEffect, useState } from "react"
import { getAllPokemon } from "../../services/pokemonApi";
import { pokemonitem } from "../../types/pokemonTypes";

export default function Detalhes() {

    const [pokemon, setPokemon] = useState<any>();


    useEffect( () => {
        setTimeout(() => {
           reqPokemon() 
        }, 3000);
    }, [])

    async function reqPokemon() {
        const res = await getAllPokemon();
        setPokemon(res);
    }


    return (
        <div>
            

            <ul>
               {
                   pokemon? pokemon.results.map((pokemon: pokemonitem) => (
                        <>
                        <div>{pokemon.name}</div>
                        </>
                   )): 'Loading'
               }
            </ul>
        </div>
    )
}