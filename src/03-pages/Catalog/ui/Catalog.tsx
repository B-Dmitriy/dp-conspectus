import {classNames} from '07-shared/lib/classNames/classNames';
import classes from './Catalog.module.scss';

interface CatalogPageProps {
    className?: string;
}

export const Catalog = ({className = ''}: CatalogPageProps) => {
    return (
        <div className={classNames(classes.CatalogPage, {}, [className])}>
            CatalogPage
        </div>
    );
}
