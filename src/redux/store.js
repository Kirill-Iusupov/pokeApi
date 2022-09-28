import { configureStore } from "@reduxjs/toolkit";
import pokemonListReducer from "./reducers/pokemonListSlice";
import pokemonInfoReducer from "./reducers/pokemonInfoSlice"
import pokemonDetailReducer from "./reducers/pokemonDetailSlice"
 


export default configureStore({
    reducer: {
        pokemonList: pokemonListReducer, 
        pokemonInfo: pokemonInfoReducer,
        pokemonDetail: pokemonDetailReducer
    }
})