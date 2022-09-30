import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: true,
    data: {},
    error:'',
    pokemonText: {},
}

export const fetchPokemonDetail = createAsyncThunk('pokemonDetail/fetchPokemonDetail',
    async (name, {rejectWithValue})=>{
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            
            const data = await response.data;

            return data

        } catch (error) {
            return rejectWithValue(error.message)
        }  
})




const pokemonDetailSlice = createSlice({
    name: 'pokemonDetail',
    initialState,
    extraReducers:{
        [fetchPokemonDetail.pending]:(state)=>{
            state.loading = true;
            state.data = {};
            state.error='';
            state.pokemonText = {};
        },
        [fetchPokemonDetail.fulfilled]:(state, action) =>{
            state.loading= false;
            state.data = action.payload;
            state.pokemonText = action.payload.flavor_text_entries;
            state.error = '';
        },
        [fetchPokemonDetail.rejected]: (state, action)=>{
            state.loading=false;
            state.error = action.payload.error
        }
    }
})

export default pokemonDetailSlice.reducer