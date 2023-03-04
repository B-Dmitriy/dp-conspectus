import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Catalog} from '03-pages/Catalog';
import {Section} from '03-pages/Section';

export const Router = () => {
    return (
        <Routes>
            <Route path={"/catalog"} element={<Catalog />} />
            <Route path={"/section"} element={<Section />} />
        </Routes>
    );
};