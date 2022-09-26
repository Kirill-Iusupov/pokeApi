import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "./reducers/pokemonListSlice";
import pokemonInfoReducer from "./reducers/pokemonInfoSlice"


export default configureStore({
    reducer: {
        pokemonList: pokemonListReducer, 
        pokemonInfo: pokemonInfoReducer
    }
})