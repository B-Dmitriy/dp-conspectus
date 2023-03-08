import './07-shared/config/i18n/i18n.config';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '01-app/providers/store';
import { Router } from '01-app/providers/router';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StoreProvider>
        <Suspense fallback="">
            <Router />
        </Suspense>
    </StoreProvider>,
);
