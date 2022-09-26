import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonInfo } from "../../redux/reducers/pokemonInfoSlice";



const Pokemon = (props) =>{
    const {pokemon} = useParams();


    const dispatch = useDispatch();
    const pokeInfo = useSelector(state => state.pokemonInfo)

    useEffect (()=>{
        dispatch(fetchPokemonInfo(pokemon))
    },[dispatch])




    return (
        <div>
            <h1>This is {pokemon} page</h1>
        </div>
    )

}

export default Pokemon