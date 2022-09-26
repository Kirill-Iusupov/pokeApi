import './pokemonList.css'
import React , { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/reducers/pokemonListSlice";
import { fetchPokemonInfo } from '../../redux/reducers/pokemonInfoSlice'
import { Link } from 'react-router-dom'

const PokemonsList = () => {

    const pokemon = useSelector(state => state.pokemonList)
    const pokeInfo = useSelector(state => state.pokemonInfo)
    
    console.log(pokeInfo);

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchPokemons());
    },[])


    useEffect(()=>{
        dispatch(fetchPokemonInfo())
    }, [])

    

    
    
    
    return(
        <div>
            <h2>Pokemons List</h2>
            {pokemon.loading === true && <h2>Loading...</h2>}
            {!pokemon.loading && pokemon.error ? <h2>Error:{pokemon.error}</h2>: null}
            {!pokemon.loading && pokemon.pokemons.length ? <ul className="pokemon">{
                pokemon.pokemons.map(pokemon=>(
                    <li key={pokemon.name}>
                         <Link to = {`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </li>
                ))}</ul>: null}
        </div>
    )
}

export default PokemonsList;