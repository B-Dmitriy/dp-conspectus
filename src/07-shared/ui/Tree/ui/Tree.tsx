import React from 'react';
import {TreeItemInterface, TreeItem, TreeItemRole} from "./TreeItem";
import classes from './Tree.module.scss';

interface TreeProps {
    items: TreeItemInterface[],
    onIconClick: (role: TreeItemRole, id: number) => void;
    onItemClick: (role: TreeItemRole, id: number) => void;
}

export const Tree = ({items, onIconClick, onItemClick}: TreeProps) => {
    return (
        <div className={classes.tree_wrapper}>
            {
                items.map((i) => <TreeItem key={i.id} item={i} onIconClick={onIconClick} onClickHandler={onItemClick}/>)
            }
        </div>
    );
};
