import { createBrowserRouter } from 'react-router-dom';
import NotFound from '03-pages/NotFound';
import { Section } from '03-pages/Section';
import { Catalog } from '03-pages/Catalog';
import { Main } from '03-pages/Main';
import Article from '03-pages/Article';
import { ErrorScreen } from '04-widgets/ErrorScreen';
import Layout from '../ui/Layout/Layout';

export enum AppRoutes {
    MAIN = 'main',
    CATALOG = 'catalog',
    SECTION = 'section',
    ARTICLE = 'article',
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: 'main',
    [AppRoutes.CATALOG]: 'catalog/:id',
    [AppRoutes.SECTION]: 'section/:id',
    [AppRoutes.ARTICLE]: 'article/:id',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routerConfig = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorScreen />,
        children: [{
            path: RoutePaths.main,
            element: <Main />,
        }, {
            path: RoutePaths.catalog,
            element: <Catalog />,
        }, {
            index: true,
            path: RoutePaths.section,
            element: <Section />,
        }, {
            path: RoutePaths.article,
            element: <Article />,
        }, {
            path: RoutePaths.not_found,
            element: <NotFound />,
        }],
    },
]);
