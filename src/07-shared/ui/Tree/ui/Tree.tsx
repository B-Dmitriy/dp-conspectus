import React from 'react';
import {TreeItem, TreeItemInterface, TreeItemRole} from "./TreeItem";
import classes from './Tree.module.scss';
import {LinearLoader} from '07-shared/ui/LinearLoader/LinearLoader';

interface TreeProps {
    items: TreeItemInterface[],
    isLoading?: boolean;
    onIconClick: (role: TreeItemRole, id: number) => void;
    onItemClick: (role: TreeItemRole, id: number) => void;
}

export const Tree = ({items, isLoading = false, onIconClick, onItemClick}: TreeProps) => {
    return (
        <div className={classes.tree_wrapper}>
            <LinearLoader isLoading={isLoading}/>
            {
                items.map((i) => <TreeItem key={i.id}
                                           item={i}
                                           isArrowsDisable={isLoading}
                                           onIconClick={onIconClick}
                                           onClickHandler={onItemClick}/>)
            }
        </div>
    );
};
