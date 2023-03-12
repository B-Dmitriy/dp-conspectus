import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleState } from '../../types/article.types';
import { fetchArticle } from '../services/fetchArticle/fetchArticle.thunk';

export const articleTemplate: Article = {
    id: null,
    section_id: null,
    title: '',
    text: '',
    tags: [],
};

const initialState: ArticleState = {
    isLoading: false,
    article: articleTemplate,
};

const articleSlice = createSlice({
    name: 'articleSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticle.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticle.fulfilled, (state, action: PayloadAction<Article>) => {
                state.article = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchArticle.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const articleActions = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
