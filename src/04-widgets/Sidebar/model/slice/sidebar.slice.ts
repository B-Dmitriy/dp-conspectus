import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SidebarState } from '04-widgets/Sidebar/types/sidebar.types';
import { fetchSections } from '04-widgets/Sidebar/model/services/fetchSections/fetchSections.thunk';
import { fetchCatalogThunk } from '../services/fetchCatalogs/fetchCatalog.thunk';
import { fetchArticles } from '../services/fetchArticles/fetchArticles.thunk';

const initialState: SidebarState = {
    isLoading: false,
    menuItems: [],
};

const sidebarSlice = createSlice({
    name: 'sidebar',
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
            .addCase(fetchCatalogThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCatalogThunk.fulfilled, (state, action) => {
                state.menuItems = action.payload.map((item: any) => ({
                    id: item.id,
                    title: item.title,
                    deep: '1',
                    children: [],
                    isLast: false,
                }));
                state.isLoading = false;
            })
            .addCase(fetchCatalogThunk.rejected, (state) => {
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

export const sidebarActions = sidebarSlice.actions;
export const sidebarReducer = sidebarSlice.reducer;
