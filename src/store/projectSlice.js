import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeFilter: 'All',
  projects: [
    { 
      id: 1, 
      title: 'R. Tahsin Sarinah Ash-Shalihah Website', 
      category: 'Web', 
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000' 
    },
    { 
      id: 2, 
      title: 'TAPAS Website', 
      category: 'Web', 
      image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1000' 
    },
    { 
      id: 3, 
      title: 'Personal Portfolio', 
      category: 'Web', 
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000' 
    },
  ]
};

const projectSlice = createSlice({
  name: 'portfolio', // Nama slice
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    }
  }
});

export const { setFilter } = projectSlice.actions;
export default projectSlice.reducer;