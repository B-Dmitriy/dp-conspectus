import React, {memo, useState} from "react";
import './TreeItem.scss';
import {ArrowR} from "../../../assets/icons/ArrowR";

export type TreeItemRole = 'page' | 'section' | 'article';

export interface ITreeItem {
    id: number;
    role: TreeItemRole;
    title: string;
    children: ITreeItem[];
}

interface TreeItemProps {
    item: ITreeItem,
    onClickHandler: (role: TreeItemRole, id: number) => void;
}

export const TreeItem = memo(({item, onClickHandler}: TreeItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onIconClick = () => setIsOpen((prev) => !prev)
    const onTitleClick = () => onClickHandler(item.role, item.id)

    return (
        <div className="tree-item">
            <div className="tree-item__header">
                {!!item.children.length && (
                    <span
                        className={`tree-item__arrow ${isOpen ? "tree-item__arrow_open" : ""}`}
                        onClick={onIconClick}
                    >
                    {item.children && <ArrowR/>}
                </span>
                )}
                <span
                    className={`tree-item__title ${!item.children.length ? "tree-item__title_without-arrow" : ""}`}
                    onClick={onTitleClick}
                >
                    <span>{item.title}</span>
                    <span className="item__title__toolbar">
                        <button>+</button>
                        <button>d</button>
                    </span>
                </span>
            </div>
            {isOpen && <div className="tree-item__children">
                {item.children.map((i) => <TreeItem key={i.id} item={i} onClickHandler={onClickHandler}/>)}
            </div>}
        </div>
    )
})
