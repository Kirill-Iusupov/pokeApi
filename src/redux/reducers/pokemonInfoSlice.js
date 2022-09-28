import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    data: {},
    error:'',
    images: {},
}


export const fetchPokemonInfo = createAsyncThunk('pokemonInfo/fetchPokemonInfo',
async (name, {rejectWithValue})=>{
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        if(!response.ok){
            throw new Error('Error!!!')
        }
        
        const data = await response.json();

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
            state.data = {};
            state.error = '';
        },
        [fetchPokemonInfo.fulfilled]: (state, action) =>{
            state.loading = false;
            state.error = '';
            state.data = action.payload;
            state.images = action.payload.sprites.other.dream_world.front_default;
        },
        [fetchPokemonInfo.rejected]: (state, action) =>{
            state.loading = false;
            state.data = {};
            state.error = action.payload
        }
    }
    
})




export default pokemonInfoSlice.reducer;