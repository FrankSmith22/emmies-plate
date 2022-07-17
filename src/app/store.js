import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { recipesReducer } from '../features/recipe/recipesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([logger])
  }
});
