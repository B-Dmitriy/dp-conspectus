import {createSlice} from '@reduxjs/toolkit';


const catalogSlice = createSlice({
   name: 'catalog',
   initialState: {},
   reducers: {}
})

export const catalogActions = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;