import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCatalogs = createAsyncThunk(
    'menuTree/fetchCatalogs',
    async (_, thunkAPI) => {
        try {
            const catalogs = await axios.get('http://localhost:3000/catalogs');

            return catalogs.data;
        } catch (err) {
            return thunkAPI.rejectWithValue('fetchCatalogThunk error');
        }
    },
);
