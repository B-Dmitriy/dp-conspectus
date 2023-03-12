import { classNames } from '07-shared/lib/classNames/classNames';
import { Button } from '07-shared/ui/Button/Button';
import React from 'react';
import DeleteIcon from '07-shared/assets/icons/delete.svg';
import classes from './TreeItemTitle.module.scss';

interface TreeItemTitleProps {
    isLast: boolean;
    isChildrenHasLength: boolean;
    title: string;
    onTitleClick: () => void;
    onDeleteClick: () => void;
}

export const TreeItemTitle = ({
    isLast,
    isChildrenHasLength,
    title,
    onTitleClick,
    onDeleteClick,
}: TreeItemTitleProps) => (
    <div className={classNames(classes.TreeItemTitle, {
        [classes.withoutArrow]: isLast && isChildrenHasLength,
    }, [])}
    >
        <Button
            fullWidth
            view="clear"
            className={classes.titleBtn}
            onClick={onTitleClick}
        >
            {title}
        </Button>
        <Button
            view="clear"
            className={classes.deleteBtn}
            onClick={onDeleteClick}
        >
            <DeleteIcon />
        </Button>
    </div>
);
