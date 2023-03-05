import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {routerConfig} from "01-app/providers/router/lib/routerConfig";

export const Router = () => <RouterProvider router={routerConfig}/>;
