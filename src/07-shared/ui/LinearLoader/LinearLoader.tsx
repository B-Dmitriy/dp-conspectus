import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './LinearLoader.module.scss';
import React from 'react';

interface LinearLoaderProps {
    isLoading: boolean;
    className?: string;
}

export const LinearLoader = ({ isLoading, className = '' }: LinearLoaderProps) => {
    return (
        <div className={classes.loader}>
            <div className={classNames(classes.block, {
                [classes.loading]: isLoading
            }, [className])}/>
        </div>
    );
}