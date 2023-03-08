import React from 'react';
import { LinearLoader } from '07-shared/ui/LinearLoader/LinearLoader';
import { TreeItem, TreeItemDeep, TreeItemInterface } from './TreeItem';
import classes from './Tree.module.scss';

interface TreeProps {
    items: TreeItemInterface[],
    isLoading?: boolean;
    onIconClick: (deep: TreeItemDeep, id: number) => void;
    onItemClick: (deep: TreeItemDeep, id: number) => void;
}

export function Tree({
    items, isLoading = false, onIconClick, onItemClick,
}: TreeProps) {
    return (
        <div className={classes.tree_wrapper}>
            <LinearLoader isLoading={isLoading} />
            {
                items.map((i) => (
                    <TreeItem
                        key={i.id}
                        item={i}
                        isArrowsDisable={isLoading}
                        onIconClick={onIconClick}
                        onClickHandler={onItemClick}
                    />
                ))
            }
        </div>
    );
}
