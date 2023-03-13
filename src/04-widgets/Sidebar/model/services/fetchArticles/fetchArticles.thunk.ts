import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchArticles = createAsyncThunk(
    'sidebar/fetchArticles',
    async (id: number, thunkAPI) => {
        try {
            const articles = await axios.get(`http://localhost:3000/articles?section_id=${id}`);

            return { sectionId: id, data: articles.data };
        } catch (err) {
            return thunkAPI.rejectWithValue('fetchCatalogThunk error');
        }
    },
);
