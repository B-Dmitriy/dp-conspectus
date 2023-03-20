import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuTreeState } from '05-features/MenuTree/types/menuTree.types';
import { fetchSections } from '05-features/MenuTree/model/services/fetchSections/fetchSections.thunk';
import { fetchCatalogs } from '05-features/MenuTree/model/services/fetchCatalogs/fetchCatalog.thunk';
import { fetchArticles } from '05-features/MenuTree/model/services/fetchArticles/fetchArticles.thunk';

const initialState: MenuTreeState = {
    isLoading: false,
    menuItems: [],
};

const menuTreeSlice = createSlice({
    name: 'menuTree',
    initialState,
    reducers: {
        resetSections(state, action: PayloadAction<number>) {
            state.menuItems = state.menuItems
                .map((item) => (item.id === action.payload
                    ? {
                        ...item,
                        children: [],
                    }
                    : item));
        },
        resetArticles(state, action: PayloadAction<number>) {
            state.menuItems = state.menuItems.map((menuItem) => (menuItem.children
                && menuItem.children.find((sectionItem) => sectionItem.id === action.payload)
                ? {
                    ...menuItem,
                    children: menuItem.children
                        .map((section) => (section.id === action.payload
                            ? { ...section, children: [] }
                            : section)),
                }
                : menuItem));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogs.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCatalogs.fulfilled, (state, action) => {
                state.menuItems = action.payload.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    deep: '1',
                    children: [],
                    isLast: false,
                }));
                state.isLoading = false;
            })
            .addCase(fetchCatalogs.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchSections.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchSections.fulfilled, (state, action) => {
                state.menuItems = state.menuItems
                    .map((item) => (item.id === action.payload.catalogId
                        ? {
                            ...item,
                            children: action.payload.data.map((item: any) => ({
                                id: item.id,
                                title: item.title,
                                deep: '2',
                                children: [],
                                isLast: false,
                            })),
                        }
                        : item));
                state.isLoading = false;
            })
            .addCase(fetchSections.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchArticles.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                const newChildren = action.payload.data.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    deep: '3',
                    children: [],
                    isLast: true,
                }));
                state.menuItems = state.menuItems.map((menuItem) => (menuItem.children
                    && menuItem.children
                        .find((sectionItem) => sectionItem.id === action.payload.sectionId)
                    ? {
                        ...menuItem,
                        children: menuItem.children
                            .map((section) => (section.id === action.payload.sectionId
                                ? { ...section, children: newChildren }
                                : section)),
                    }
                    : menuItem));
                state.isLoading = false;
            })
            .addCase(fetchArticles.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const menuTreeActions = menuTreeSlice.actions;
export const menuTreeReducer = menuTreeSlice.reducer;
