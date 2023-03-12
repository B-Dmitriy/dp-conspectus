import React from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Button } from '07-shared/ui/Button/Button';
import { TreeItemDeep, TreeItemInterface } from '06-entities/Tree';
import classes from './TreeItemDropdown.module.scss';
import { TreeItem } from '../TreeItem/TreeItem';

interface TreeItemDropdownProps {
    className?: string;
    items: TreeItemInterface[];
    isArrowsDisable?: boolean;
    onIconClick: (deep: TreeItemDeep, id: number) => void;
    onClickHandler: (deep: TreeItemDeep, id: number) => void;
}

export const TreeItemDropdown = ({
    items, className, isArrowsDisable = false, onIconClick, onClickHandler,
}: TreeItemDropdownProps) => (
    <div className={classNames(classes.TreeItemDropdown, {
        [classes.noData]: items !== null && items.length < 1,
    }, [className])}
    >
        {items !== null && items.length < 1
                && (
                    <span className={classes.noData}>
                        <Button
                            fullWidth
                            view="clear"
                        >
                            +
                        </Button>
                    </span>
                )}
        {items !== null && items.map((i) => (
            <TreeItem
                key={i.id}
                item={i}
                isArrowsDisable={isArrowsDisable}
                onIconClick={onIconClick}
                onClickHandler={onClickHandler}
            />
        ))}
    </div>
);
