import React from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Button } from '07-shared/ui/Button/Button';
import { TreeItemDeep, TreeItemInterface } from '06-entities/Tree';
import classes from './TreeItemDropdown.module.scss';
import { TreeItem } from '../TreeItem/TreeItem';

interface TreeItemDropdownProps {
    className?: string;
    items: TreeItemInterface[];
    isLoading?: boolean;
    onIconClick: (deep: TreeItemDeep, id: number) => void;
    onClickHandler: (deep: TreeItemDeep, id: number) => void;
}

export const TreeItemDropdown = ({
    items, className, isLoading = false, onIconClick, onClickHandler,
}: TreeItemDropdownProps) => (
    <div className={classNames(classes.TreeItemDropdown, {
        [classes.noData]: items !== null && items.length < 1,
    }, [className])}
    >
        {items !== null && items.length < 1 && isLoading && <span>Loading...</span>}
        {items !== null && items.length < 1 && !isLoading
                && (
                    <Button
                        fullWidth
                        view="clear"
                    >
                        + добавить элемент
                    </Button>
                )}
        {items !== null && items.map((i) => (
            <TreeItem
                key={i.id}
                item={i}
                isLoading={isLoading}
                onIconClick={onIconClick}
                onClickHandler={onClickHandler}
            />
        ))}
    </div>
);
