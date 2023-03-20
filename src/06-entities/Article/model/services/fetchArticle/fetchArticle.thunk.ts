import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchArticle = createAsyncThunk(
    'articleSlice/fetchArticleThunk',
    async (articleId: number, thunkAPI) => {
        try {
            const article = await axios.get(`http://localhost:3000/articles/${articleId}`);

            return article.data;
        } catch (err) {
            return thunkAPI.rejectWithValue('fetchArticleThunk error');
        }
    },
);
