import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    data: {},
    error:'',
    pokemonText: {},
}

export const fetchPokemonDetail = createAsyncThunk('pokemonDetail/fetchPokemonDetail',
async (name, {rejectWithValue})=>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
        if(!response.ok) {
            throw new Error('Error!!!')
        }

        const data = await response.json();

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