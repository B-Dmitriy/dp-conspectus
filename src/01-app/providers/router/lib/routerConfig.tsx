import { createBrowserRouter } from 'react-router-dom';
import NotFound from '03-pages/NotFound';
import MainPage from '03-pages/MainPage';
import ArticlePage from '03-pages/ArticlePage';
import CatalogPage from '03-pages/CatalogPage';
import SectionPage from '03-pages/SectionPage';
import { ErrorScreen } from '04-widgets/ErrorScreen';
import { withSuspense } from '07-shared/lib/withSuspense/withSuspense';
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
            element: withSuspense(<MainPage />),
        }, {
            path: RoutePaths.catalog,
            element: withSuspense(<CatalogPage />),
        }, {
            index: true,
            path: RoutePaths.section,
            element: withSuspense(<SectionPage />),
        }, {
            path: RoutePaths.article,
            element: withSuspense(<ArticlePage />),
        }, {
            path: RoutePaths.not_found,
            element: <NotFound />,
        }],
    },
]);
