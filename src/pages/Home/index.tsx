import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { enderecoApi, getAllPokemon } from "../../services/pokemonApi";
import { pokemonCharacter } from "../../types/pokemonTypes";
// import Detalhes from "../Detalhes";
import "./styles.css";

// const rioluImg = require("../../assets/images/448.png")
// var pokemons:pokemonCharacter;

export default function Home() {

    
    // var varPokemons:any; 
    const [index, setIndex] = useState<any>(1);
    const [bpokemons, setbPokemons] = useState<any>([]);
    const [pokemons, setPokemons] = useState<pokemonCharacter>();
    // const navigate = useNavigate();

    // function chamarPaginaDetalhes() {
    //     navigate('/detalhes')
    // }

    useEffect( () => {
       reqPokemon();

    }, [])

    useEffect( () => {
      if(bpokemons.length > 0 && index === undefined){
        setIndex(0);
      }
      
  }, [bpokemons])

    useEffect( () => {
      if(index !== undefined ) {
        CarregarPokemon(index);
      }
      
  }, [index])

    async function reqPokemon() {
        const res = await getAllPokemon();
        setbPokemons(res.results);
    }

    async function CarregarPokemon(i:any) {
      const res = await enderecoApi.get(bpokemons[i].url);
        
        setPokemons(res.data);

     }


    return(
        // <div classNameName="background-color">
            
        // <div classNameName="container-color">
        //    <div classNameName="container">

        //    <div classNameName="texto">
        //         <h1>{pokemon?.name}</h1>
        //         <p>Altura: {pokemon?.height}</p>
        //         <p>Largura: {pokemon?.weight}</p>
        //         <p>Ordem: {pokemon?.order}</p>
        //     </div>

        //     <div classNameName="Imagem-pokemon">
        //         <img src={pokemon?.sprites.front_default} alt="" />
        //         <img src={pokemon?.sprites.back_default} alt="" />
        //     </div>

        //     <div classNameName="details">
        //         <Detalhes />
        //     </div>
            
        //    </div>

        //     <button onClick={ () => { chamarPaginaDetalhes() } }> Ver detalhes</button>

        // </div>

        // </div>


        <div className="pokedex">
          <div className="left">
            <div className="left-top">
              <div className="left-top1">
                <div className="big-lens">
                </div>
                <div className="small-lens">
                  <div className="small-lens1">
                  </div>
                  <div className="small-lens2">
                  </div>
                  <div className="small-lens3">
                  </div>
                </div>
              </div>
              <div className="left-top2">
              </div>
            </div>
            <div className="screen">
              <div className="screen-display">
              <div className="Imagem-pokemon">
                <img src={pokemons?.sprites.front_default} alt="" /> 
              </div>
              </div>

      
            </div>
          </div>

        <div className="right">
          <div className="right-top">
            <div className="right-top1">
            </div>
            <div className="right-top2">
            </div>
            <div className="right-top1-incut">
            </div>
            <div className="right-top2-incut">
            </div>
            <div className="right-incut">
            </div>
          </div>

    
    <div className="right-screen">

        <div className="details">
        <div className="texto">
                 <h1>{pokemons?.name}</h1>
                 <p>Altura: {pokemons?.height}</p>
                 <p>Largura: {pokemons?.weight}</p>
                 <p>Id: {pokemons?.id}</p>
                 <p>Tipo: {pokemons?.types[0].type.name}</p>
                
            </div>
        </div>

    </div>



    <div className="right-bottom-screens">
      <div className="right-bottom-screen">
          <button onClick={() => {
            setIndex(index - 1)     
          } }>PREVIOUS</button>
      </div>
      <div className="right-bottom-screen">
          <button onClick={() => {
            setIndex(index + 1)
          } }>NEXT</button>
      </div>
    </div> 
    
  </div>
</div>
    )
}