import { configureStore } from '@reduxjs/toolkit';
import { menuTreeReducer } from '05-features/MenuTree';
import { articleReducer } from '06-entities/Article';
import { catalogReducer } from '06-entities/Catalog';

export const store = configureStore({
    reducer: {
        menuTree: menuTreeReducer,
        catalog: catalogReducer,
        article: articleReducer,
    },
    devTools: __IS_DEV__,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
