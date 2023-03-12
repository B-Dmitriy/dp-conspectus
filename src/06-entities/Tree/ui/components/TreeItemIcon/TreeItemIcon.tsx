import { classNames } from '07-shared/lib/classNames/classNames';
import { Button } from '07-shared/ui/Button/Button';
import Arrow from '07-shared/assets/icons/arrow-right.svg';
import React from 'react';
import classes from './TreeItemIcon.module.scss';

interface TreeItemIconProps {
    isOpen: boolean;
    isChildrenExist: boolean;
    isLoading?: boolean;
    onIconClickHandler: () => void;
}

export const TreeItemIcon = ({
    isOpen,
    isChildrenExist,
    isLoading = false,
    onIconClickHandler,
}: TreeItemIconProps) => (
    <Button
        view="clear"
        disabled={isLoading}
        className={classNames(classes.TreeItemIcon, {
            [classes.item_open]: isOpen,
            [classes.disabled]: isLoading,
        }, [])}
        onClick={onIconClickHandler}
    >
        {isChildrenExist && <Arrow />}
    </Button>
);
