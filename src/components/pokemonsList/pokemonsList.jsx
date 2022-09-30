import './pokemonList.css'
import React , { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/slices/pokemonListSlice";
import { Link } from 'react-router-dom'

const PokemonsList = () => {

    const pokemon = useSelector(state => state.pokemonList)
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchPokemons());
    },[dispatch])
    
    

    console.log(pokemon);
    
    return(
        <div className='pokemonList container'>
            <h2>Pokemons List</h2>
            <div className='sorting'>
                <p>Сортировать по:</p>
                <a href="">Популярности</a>
                <a href="">Рейтингу</a>
                <a href="">Уровню силы</a>
            </div>
            {pokemon.loading  && <h2>Loading...</h2>}
            {!pokemon.loading && pokemon.error ? <h2>Error:{pokemon.error}</h2>: null}
            {!pokemon.loading && pokemon.pokemons.length ? <div className="pokemon">{
                pokemon.pokemons.map(pokemon=>(
                    <div key={pokemon.name} className='pokemonItem'>
                        <span className='topBall'>
                            <p>{pokemon.name}</p>
                        </span>
                        <span className='midleBall'>
                            <Link to = {`/pokemon/${pokemon.name}`}>More</Link>
                        </span>
                        <span className='botBall'>
                            <a href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pokémon)`} target='_blank'>Bulbapedia (Full information)</a>
                        </span>
                    </div>
                ))
            }
                </div>: null}
        </div>
    )
}

export default PokemonsList;