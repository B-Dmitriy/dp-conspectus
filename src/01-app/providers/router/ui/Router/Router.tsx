import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { routerConfig } from '01-app/providers/router/lib/routerConfig';

export function Router() {
    return <RouterProvider router={routerConfig} />;
}
