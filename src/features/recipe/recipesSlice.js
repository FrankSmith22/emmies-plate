import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
// import { apiKey } from '../../app/shared/apiKey';

// export const fetchRandomRecipe = createAsyncThunk(
//     'recipes/fetchRandomRecipe',
//     async () => {
//         const response = await fetch(`${baseUrl}/recipes/random?apiKey=${apiKey}&number=1`) //TODO expand this to use a query string builder util
//         if(!response.ok) {
//             return Promise.reject('Unable to fetch, status: ' + response.status);
//         }
//         const data = await response.json();
//         console.log(`randomly generated recipe: ${data}`)
//         return data;
//     }
// )

export const fetchRandomRecipe = createAsyncThunk(
    'recipes/fetchRandomRecipe',
    async () => {
        const response = await fetch(`${baseUrl}/recipes`)
        if(!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        console.log(`randomly generated recipe: ${data}`)
        return data;
    }
)

const initialState = {
    randomRecipe: null,
    isLoading: true, // dont set true initially, since we dont want to load until button is clicked
    errMsg: ''
};

const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRandomRecipe.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchRandomRecipe.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.randomRecipe = action.payload
        },
        [fetchRandomRecipe.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

// Selectors

export const recipesReducer = recipesSlice.reducer;

export const selectRandomRecipe = (state) => {
    return state.recipes.randomRecipe;
}