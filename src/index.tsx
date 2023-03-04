import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {StoreProvider} from '01-app/providers/store';
import App from '01-app/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <App/>
        </StoreProvider>
    </BrowserRouter>);
