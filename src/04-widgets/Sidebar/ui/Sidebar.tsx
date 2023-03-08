import { classNames } from '07-shared/lib/classNames/classNames';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tree } from '07-shared/ui/Tree/ui/Tree';
import { TreeItemDeep } from '07-shared/ui/Tree/ui/TreeItem';
import { useAppDispatch, useAppSelector } from '07-shared/hooks/appHooks';
import { getMenuItems, getSidebarIsLoading } from '04-widgets/Sidebar/model/selectors/sidebar.selectors';
import { fetchSections } from '04-widgets/Sidebar/model/services/fetchSections/fetchSections.thunk';
import { fetchArticle } from '04-widgets/Sidebar/model/services/fetchArticleThunk/fetchArticle.thunk';
import { fetchCatalogThunk } from '../model/services/fetchCatalogs/fetchCatalog.thunk';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoading = useAppSelector(getSidebarIsLoading);
    const menuItems = useAppSelector(getMenuItems);

    useEffect(() => {
        dispatch(fetchCatalogThunk());
    }, []);

    const onIconClick = (path: TreeItemDeep, id: number) => {
        switch (path) {
        case '1':
            dispatch(fetchSections(id));
            break;
        case '2':
            dispatch(fetchArticle(id));
            break;
        case '3':
            break;
        default:
            break;
        }
    };

    const onItemClick = (path: TreeItemDeep, id: number) => {
        switch (path) {
        case '1':
            navigate(`/catalog/${id}`);
            break;
        case '2':
            navigate(`/section/${id}`);
            break;
        case '3':
            navigate(`/article/${id}`);
            break;
        default:
            break;
        }
    };

    return (
        <div className={classNames(classes.Sidebar, {}, [className])}>
            <section className={classes.menu}>
                <Link to="/main">Main</Link>
                <Tree
                    items={menuItems}
                    isLoading={isLoading}
                    onIconClick={onIconClick}
                    onItemClick={onItemClick}
                />
            </section>
        </div>
    );
}
