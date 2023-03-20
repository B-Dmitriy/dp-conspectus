import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Tree, TreeItemDeep } from '07-shared/ui/Tree';
import { classNames } from '07-shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '07-shared/hooks/appHooks';
import { menuTreeActions } from '../model/slice/menuTree.slice';
import { fetchArticles } from '../model/services/fetchArticles/fetchArticles.thunk';
import { fetchSections } from '../model/services/fetchSections/fetchSections.thunk';
import { fetchCatalogs } from '../model/services/fetchCatalogs/fetchCatalog.thunk';
import { getMenuItems, getSidebarIsLoading } from '../model/selectors/menuTree.selectors';
import classes from './MenuTree.module.scss';

interface MenuTreeProps {
    isRolled: boolean;
    className?: string;
}

export const MenuTree = ({ className, isRolled }: MenuTreeProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoading = useAppSelector(getSidebarIsLoading);
    const menuItems = useAppSelector(getMenuItems);

    const onOpen = (path: TreeItemDeep, id: number) => {
        switch (path) {
        case '1':
            dispatch(fetchSections(id));
            break;
        case '2':
            dispatch(fetchArticles(id));
            break;
        case '3':
            break;
        default:
            break;
        }
    };

    const onClose = (path: TreeItemDeep, id: number) => {
        switch (path) {
        case '1':
            dispatch(menuTreeActions.resetSections(id));
            break;
        case '2':
            dispatch(menuTreeActions.resetArticles(id));
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

    useEffect(() => {
        dispatch(fetchCatalogs());
    }, []);

    return (
        <div className={classNames(classes.MenuTree, {}, [className])}>
            <Link to="/main">Main</Link>
            {!isRolled && (
                <Tree
                    items={menuItems}
                    isLoading={isLoading}
                    onOpen={onOpen}
                    onClose={onClose}
                    onItemClick={onItemClick}
                />
            )}
        </div>
    );
};
