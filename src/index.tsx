import '07-shared/assets/styles/index.scss';
import '07-shared/config/i18n/i18n.config';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from '01-app/providers/router';
import { StoreProvider } from '01-app/providers/store';
import { ErrorBoundary } from '07-shared/providers/ErrorBoundary';
import { ThemeProvider } from '07-shared/providers/theme';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <ErrorBoundary>
        <StoreProvider>
            <ThemeProvider>
                <Suspense>
                    <Router />
                </Suspense>
            </ThemeProvider>
        </StoreProvider>
    </ErrorBoundary>,
);
