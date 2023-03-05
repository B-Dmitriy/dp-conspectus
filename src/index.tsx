import React from 'react';
import {createRoot} from 'react-dom/client';
import {StoreProvider} from '01-app/providers/store';
import {Router} from "01-app/providers/router";

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StoreProvider>
        <Router/>
    </StoreProvider>);
