import './pokemonList.css'
import React , { useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../../redux/slices/pokemonListSlice";
import {ThreeCircles} from 'react-loader-spinner' 
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';


const PokemonsList = () => {

    const dispatch = useDispatch(); 
    const pokemons = useSelector(state => state.pokemonList) 

    const FetchList = (page = 1 ) =>{
        dispatch(fetchPokemons(page))
    }
    
    useEffect(() => {
        FetchList()
    },[ ])


    let pokeDetail = []


    pokemons.pokemons.forEach((pokemon)=>{
        let pokeData = {
            id: pokemon.url.slice(34,-1),
            name: pokemon.name,
            pokeImg: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.slice(34,-1)}.png`
        }
        pokeDetail.push(pokeData)
    })





    return(
        <div className='pokemonList container'>
            <h2>Pokemons List</h2>
            {pokemons.loading  && <ThreeCircles
                                    height="100"
                                    width="100"
                                    color="#4fa94d"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel="three-circles-rotating"
                                    outerCircleColor=""
                                    innerCircleColor=""
                                    middleCircleColor=""
                                    />}
            {!pokemons.loading && pokemons.error ? <h2>Error:{pokemons.error}</h2>: null}
            {!pokemons.loading && pokemons.pokemons.length ?
                <div className="pokemon">{  
                    pokeDetail.map(elem=>{
                        return (
                            <Link key = {elem.id} className="pokemonCard" to={`/pokemon/${elem.name}` }>
                                <img src={elem.pokeImg} alt="" />
                                <p>{elem.name}</p>
                            </Link>
                        )
                    })}
                </div>: null}
            <ReactPaginate 
                pageCount={Math.ceil(pokemons.count / 15)}
                pageRangeDisplayed = {2}
                marginPagesDisplayed = {1}
                onPageChange = {(data) => {FetchList(data.selected+1)} }
                containerClassName = {'paginate'}
                previousLabel = {'<'}
                nextLabel = {'>'}
            />
        </div>
    )
}

export default PokemonsList;