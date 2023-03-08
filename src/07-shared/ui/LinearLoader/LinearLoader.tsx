import { classNames } from '07-shared/lib/classNames/classNames';
import React from 'react';
import classes from './LinearLoader.module.scss';

interface LinearLoaderProps {
    isLoading: boolean;
    className?: string;
}

export function LinearLoader({ isLoading, className }: LinearLoaderProps) {
    return (
        <div className={classes.loader}>
            <div className={classNames(classes.block, {
                [classes.loading]: isLoading,
            }, [className])}
            />
        </div>
    );
}
