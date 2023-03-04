import {configureStore} from "@reduxjs/toolkit";
import {catalogReducer} from '03-pages/Catalog/model/catalog.slice';

export const store = configureStore({
    reducer: {
        catalog: catalogReducer
    },
    devTools: true,
})