import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './PageLoader.module.scss';

export const PageLoader = () => {
    return (
        <div className={classes.PageLoader}>
            <div className={classes.ldsEllipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}