import React from 'react';
import {ITreeItem, TreeItem, TreeItemRole} from "./TreeItem";
import './Tree.css';

interface TreeProps {
    items: ITreeItem[],
    onClickHandler: (role: TreeItemRole, id: number) => void;
}

export const Tree = ({items, onClickHandler}: TreeProps) => {
    return (
        <div className="tree_wrapper">
            {
                items.map((i) => <TreeItem key={i.id} item={i} onClickHandler={onClickHandler}/>)
            }
        </div>
    );
};
