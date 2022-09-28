import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../../redux/reducers/pokemonDetailSlice";
import { fetchPokemonInfo } from "../../redux/reducers/pokemonInfoSlice";
import '../pokemonInfo/pokemonInfo.css'


const Pokemon = (props) =>{
    const {pokemon} = useParams();


    const dispatch = useDispatch();
    const pokeInfo = useSelector((state) => state.pokemonInfo)
    const pokeDetail = useSelector((state )=> state.pokemonDetail)
    

    useEffect (()=>{
        dispatch(fetchPokemonInfo(pokemon))
        dispatch(fetchPokemonDetail(pokemon))  
    },[dispatch])


    const pokeText= Array.from(pokeDetail.pokemonText)
    console.log(pokeDetail);

    const pokeData = pokeInfo.data;
    const pokeImgs = pokeInfo.images;

    return (
        <div className="pokemonInfo container">
            {pokeInfo.loading === true && !pokeInfo.images ? <h2>Loading...</h2>: null}
            {!pokeInfo.loading && pokeInfo.error ? <h2>Error:{pokeInfo.error}</h2>: null}
            {!pokeInfo.loading && pokeInfo.data ?<div>
                <Link to ={'/'}>← Вернуться в каталог</Link>
                <div className="pokeInformation">
                    <div className="text">
                        <p>Specs text</p>
                        {pokeText.map(elem => {
                            if (elem.language.name === 'en'){
                                return(
                                    <div key ={elem.id}>
                                        <p>{elem.flavor_text}</p>
                                    </div>
                                )
                            }
                        })}
                    </div>
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