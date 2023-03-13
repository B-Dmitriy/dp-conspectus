import '07-shared/assets/styles/index.scss';
import '07-shared/config/i18n/i18n.config';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from '01-app/providers/store';
import { Router } from '01-app/providers/router';
import { ErrorBoundary } from '01-app/providers/ErrorBoundary/ui/ErrorBoundary';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ErrorBoundary>
        <StoreProvider>
            <Suspense fallback="">
                <Router />
            </Suspense>
        </StoreProvider>
    </ErrorBoundary>,
);
