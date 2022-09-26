import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPokemonInfo } from "../../redux/reducers/pokemonInfoSlice";



const Pokemon = (props) =>{
<<<<<<< HEAD
    const {pokemon} = useParams();

    const dispatch = useDispatch();
    const pokeInfo = useSelector(state => state.pokemonInfo)

    console.log(pokeInfo.pokemonInfo.name);

    useEffect (()=>{
=======
    const {pokemon} = useParams()
    const dispatch = useDispatch();
    const pokeInfo = useSelector(state => state.pokemonInfo)
    
    useEffect(()=>{
>>>>>>> cba839a99bc141613769d623de5a05add01c5b7d
        dispatch(fetchPokemonInfo(pokemon))
    },[dispatch])


<<<<<<< HEAD


=======
    console.log('Hello world!!!')
    console.log(pokemon);
>>>>>>> cba839a99bc141613769d623de5a05add01c5b7d
    return (
        <div>
            <h1>This is {pokemon} page</h1>
        </div>
    )

}

export default Pokemon