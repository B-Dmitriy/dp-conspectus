import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSections = createAsyncThunk(
    'menuTree/fetchSections',
    async (id: number, thunkAPI) => {
        try {
            const sections = await axios.get(`http://localhost:3000/sections?catalog_id=${id}`);

            return { catalogId: id, data: sections.data };
        } catch (err) {
            return thunkAPI.rejectWithValue('fetchCatalog error');
        }
    },
);
