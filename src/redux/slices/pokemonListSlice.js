import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    loading: true,
    pokemons: [],
    error: '',
    count: ''
}




export const fetchPokemons = createAsyncThunk('pokemonsList/fetchPokemons', 
    async  ( page, {rejectWithValue}) => {
        try {
            const perPage = 15
            const offset = (page * perPage)-perPage

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

            const data = await response.data;

            return data; 

        } catch (error) {
            return rejectWithValue(error.message)
        }
        
})

const pokemonListSlice = createSlice({
    name: 'pokemonsList',
    initialState,
    extraReducers: {
        [fetchPokemons.pending]: (state)=>{
            state.loading = true;
        },
        [fetchPokemons.fulfilled]: (state, action) => {
            state.loading = false;
            state.pokemons = action.payload.results;
            state.count = action.payload.count;
        },
        [fetchPokemons.rejected]: (state, action)=>{ 
            state.loading = false;
            state.error = action.payload;
        }
    }

})

export default pokemonListSlice.reducer