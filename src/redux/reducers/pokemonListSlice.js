import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    
    loading: true,

    pokemons: [],

    error: ''
}




export const fetchPokemons = createAsyncThunk('pokemonsList/fetchPokemons', 
    async  (_, {rejectWithValue}) => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0')
            
            console.log('response=>', response.data);

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
        },
        [fetchPokemons.rejected]: (state, action)=>{ 
            state.loading = false;
            state.error = action.payload;
        }
    }

})

export default pokemonListSlice.reducer