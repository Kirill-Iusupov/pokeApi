import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    
    loading: false,

    pokemons: [],

    error: ''
}




export const fetchPokemons = createAsyncThunk('pokemonsList/fetchPokemons', 
    async  (_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0')
        
            if (!response.ok){
                throw new Error("Server Error!");
            }
            
            const data = response.json();
            
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
            state.pokemons = [];
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