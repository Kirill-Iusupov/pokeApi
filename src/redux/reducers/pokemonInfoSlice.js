import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const initialState = {
    loading: false,
    pokemonInfo: {},
    error:''
}


export const fetchPokemonInfo = createAsyncThunk('pokemonInfo/fetchPokemonInfo',
async (name, {rejectWithValue})=>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        if(!response.ok){
            throw new Error('Error!!!')
        }

        const data = response.json();
        return data
    
    } catch (error) {
        return rejectWithValue(error.message)
    }
} )

const pokemonInfoSlice = createSlice({
    name: 'pokemonInfo',
    initialState,
    extraReducers: {
        [fetchPokemonInfo.pending]: (state) =>{
            state.loading = true;
            state.error = '';
        },
        [fetchPokemonInfo.fulfilled]: (state, action) =>{
            state.loading = false;
            state.error = '';
            state.pokemonInfo = action.payload
        },
        [fetchPokemonInfo.rejected]: (state, action) =>{
            state.loading = false;
            state.error = action.payload
        }
    }
})

export default pokemonInfoSlice.reducer;