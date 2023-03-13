import { configureStore } from '@reduxjs/toolkit';
import { articleReducer } from '03-pages/Article';
import { catalogReducer } from '03-pages/Catalog/model/catalog.slice';
import { sidebarReducer } from '04-widgets/Sidebar';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer,
        sidebar: sidebarReducer,
        article: articleReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
