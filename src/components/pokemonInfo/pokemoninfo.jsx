import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../../redux/slices/pokemonDetailSlice";
import { fetchPokemonInfo } from "../../redux/slices/pokemonInfoSlice";
import '../pokemonInfo/pokemonInfo.css'
import { Dna } from "react-loader-spinner";
import { Chip } from "@mui/material";


const Pokemon = () =>{
    const { pokemon } = useParams();

    const dispatch = useDispatch();
    const pokeInfo = useSelector((state) => state.pokemonInfo)
    const pokeDetail = useSelector((state )=> state.pokemonDetail)
    

    useEffect (()=>{
        dispatch(fetchPokemonInfo(pokemon))
        dispatch(fetchPokemonDetail(pokemon))  
    },[dispatch])


    const pokeText = Array.from(pokeDetail.pokemonText)

    const pokeImgs = pokeInfo.images;

    return (
        <div className="pokemonInfo container">
            {pokeInfo.loading && pokeInfo.images ? <Dna
                                                    visible={true}
                                                    height="80"
                                                    width="80"
                                                    ariaLabel="dna-loading"
                                                    wrapperStyle={{}}
                                                    wrapperClass="dna-wrapper"
                                                    />: null}
            {!pokeInfo.loading && pokeInfo.error ? <h2>Error:{pokeInfo.error}</h2>: null}
            {!pokeInfo.loading && pokeInfo.data ?<div>
                <div className="pokeInformation">
                    <div className="text">
                        <p>Specs text</p>
                        {pokeText.map( (elem, index) => {
                            if (elem.language.name === 'en'){
                                return(
                                    <div key = { index }>
                                        <p>{elem.flavor_text}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="pokemonIN">
                        <img src={pokeImgs} alt="mainImg" className="mainImg"/>
                        <h2>{pokeInfo.data.name}</h2>
                        <h3>Types:</h3>
                        {pokeInfo.types.map((type, index) => {
                            return (
                                <Chip key= { index } label={type.type.name} className='pokeType' />
                            )
                        })}
                        <h3>Stats: </h3>
                        {pokeInfo.stats.map((stat, index)=>{
                            return(
                                <Chip key= {index} label={`${stat.stat.name} = ${stat.base_stat}`} className='stat' />
                            )
                        })}
                        <h3>Sprites: </h3>
                        <div className="pokeSprites">
                            <img src={pokeInfo.data.sprites.front_default} alt="" />
                            <img src={pokeInfo.data.sprites.back_default} alt="" />
                            <img src={pokeInfo.data.sprites.front_shiny} alt="" />
                            <img src={pokeInfo.data.sprites.back_shiny} alt="" />
                        </div>
                    </div>
                </div> 
            </div>:null}
              
        </div>
    )

}

export default Pokemon