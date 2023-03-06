import {classNames} from '07-shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Tree} from "07-shared/ui/Tree/ui/Tree";
import {fetchCatalogThunk} from "./../model/services/fetchCatalogs/fetchCatalog.thunk";
import {TreeItemRole} from "07-shared/ui/Tree/ui/TreeItem";
import {useAppDispatch, useAppSelector} from '07-shared/hooks/appHooks';
import {getMenuItems, getSidebarIsLoading} from "04-widgets/Sidebar/model/selectors/sidebar.selectors";
import {fetchSections} from "04-widgets/Sidebar/model/services/fetchSections/fetchSections.thunk";
import {fetchArticle} from "04-widgets/Sidebar/model/services/fetchArticleThunk/fetchArticle.thunk";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className = ''}: SidebarProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoading = useAppSelector(getSidebarIsLoading);
    const menuItems = useAppSelector(getMenuItems);

    useEffect(() => {
        dispatch(fetchCatalogThunk())
    }, []);

    const onIconClick = (path: TreeItemRole, id: number) => {
        switch (path) {
            case "catalog":
                dispatch(fetchSections(id));
                return;
            case "section":
                dispatch(fetchArticle(id));
                return;
            case "article":
                return;
            default:
                return;
        }
    };

    const onItemClick = (path: TreeItemRole, id: number) => {
        switch (path) {
            case "catalog":
                navigate(`/catalog/${id}`);
                return;
            case "section":
                navigate(`/section/${id}`);
                return;
            case "article":
                navigate(`/article/${id}`);
                return;
            default:
                return;
        }
    };

    return (
        <div className={classNames(classes.Sidebar, {}, [className])}>
            <section className={classes.menu}>
                <Link to={'/main'}>Main</Link>
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
