import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "./slices/pokemonListSlice";
import pokemonInfoReducer from "./slices/pokemonInfoSlice"
import pokemonDetailReducer from "./slices/pokemonDetailSlice"
 


export default configureStore({
    reducer: {
        pokemonList: pokemonListReducer, 
        pokemonInfo: pokemonInfoReducer,
        pokemonDetail: pokemonDetailReducer
    }
})