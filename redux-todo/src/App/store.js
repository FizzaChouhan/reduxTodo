// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/TodoSlice.js';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
