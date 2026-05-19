import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './projectSlice'; // Import reducer dari file sebelah

export const store = configureStore({
  reducer: {
    // Kita pakai nama 'portfolio' supaya konsisten dengan useSelector kamu nanti
    portfolio: projectReducer 
  }
});