import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: true,
    data: {},
    error:'',
    images: {}
}


export const fetchPokemonInfo = createAsyncThunk('pokemonInfo/fetchPokemonInfo',
async (name, {rejectWithValue})=>{
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    
        const data = await response.data;

        return data
    
    } catch (error) {
        return rejectWithValue(error.message)
    }
})



const pokemonInfoSlice = createSlice({
    name: 'pokemonInfo',
    initialState,
    extraReducers: {
        [fetchPokemonInfo.pending]: (state) =>{
            state.loading = true;
        },
        [fetchPokemonInfo.fulfilled]: (state, action) =>{
            state.loading = false;
            state.data = action.payload;
            state.images = action.payload.sprites.other.dream_world.front_default;
        },
        [fetchPokemonInfo.rejected]: (state, action) =>{
            state.loading = false;
            state.error = action.payload
        }
    }
    
})




export default pokemonInfoSlice.reducer;