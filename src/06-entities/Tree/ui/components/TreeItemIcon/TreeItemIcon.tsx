import { classNames } from '07-shared/lib/classNames/classNames';
import { Button } from '07-shared/ui/Button/Button';
import Arrow from '07-shared/assets/icons/arrow-right.svg';
import React from 'react';
import classes from './TreeItemIcon.module.scss';

interface TreeItemIconProps {
    isOpen: boolean;
    isChildrenExist: boolean;
    isArrowsDisable?: boolean;
    onIconClickHandler: () => void;
}

export const TreeItemIcon = ({
    isOpen,
    isChildrenExist,
    isArrowsDisable = false,
    onIconClickHandler,
}: TreeItemIconProps) => (
    <Button
        view="clear"
        disabled={isArrowsDisable}
        className={classNames(classes.TreeItemIcon, {
            [classes.item_open]: isOpen,
            [classes.disabled]: isArrowsDisable,
        }, [])}
        onClick={onIconClickHandler}
    >
        {isChildrenExist && <Arrow />}
    </Button>
);
