import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPokemonInfo } from "../../redux/reducers/pokemonInfoSlice";
import '../pokemonInfo/pokemonInfo.css'


const Pokemon = (props) =>{
    const {pokemon} = useParams();


    const dispatch = useDispatch();
    const pokeInfo = useSelector((state) => state.pokemonInfo)

    useEffect (()=>{
        dispatch(fetchPokemonInfo(pokemon))
    },[dispatch])

    

    const pokeData = pokeInfo.data;
    const pokeImgs = pokeInfo.images;

    return (
        <div className="pokemonInfo container">
            {pokeInfo.loading === true && pokeInfo.images === {} ? <h2>Loading...</h2>:null}
            {!pokeInfo.loading && pokeInfo.error ? <h2>Error:{pokeInfo.error}</h2>: null}
            {!pokeInfo.loading && pokeInfo.data ?<div>
                <Link to ={'/'}>← Вернуться в каталог</Link>
                <div className="pokeInformation">
                    <p>Specs text</p>
                    <div className="pokemonIN">
                        <img src={pokeImgs} alt="mainImg" />
                        <h2>{pokeData.name}</h2>
                    </div>
                </div> 
            </div>:null}
              
        </div>
    )

}

export default Pokemon