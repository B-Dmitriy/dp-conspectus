import React, {memo, useState} from "react";
import classes from './TreeItem.module.scss';
import {ArrowR} from "../../../assets/icons/ArrowR";

export type TreeItemRole = 'catalog' | 'section' | 'article';

export interface TreeItemInterface {
    id: number;
    role: TreeItemRole;
    title: string;
    children: TreeItemInterface[];
    isLast: boolean;
}

interface TreeItemProps {
    item: TreeItemInterface,
    onIconClick: (role: TreeItemRole, id: number) => void;
    onClickHandler: (role: TreeItemRole, id: number) => void;
}

export const TreeItem = memo(({item, onIconClick, onClickHandler}: TreeItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onIconClickHandler = () => {
        onIconClick(item.role, item.id);
        setIsOpen((prev) => !prev)
    }
    const onTitleClick = () => onClickHandler(item.role, item.id)

    return (
        <div className={classes.treeItem}>
            <div className={classes.treeItem__header}>
                {!item.isLast && <span
                    className={`${classes.treeItem__arrow} ${isOpen ? classes.treeItem__arrow_open : ""}`}
                    onClick={onIconClickHandler}
                >
                {item.children && <ArrowR/>}
                </span>}
                <span
                    className={`${classes.treeItem__title} ${(item.children !== null && !item.children.length)
                        ? classes.treeItem__title_withoutArrow
                        : ""}`}
                    onClick={onTitleClick}
                >
                    <span>{item.title}</span>
                    <span className={classes.item__title__toolbar}>
                        <button>+</button>
                        <button>d</button>
                    </span>
                </span>
            </div>
            {isOpen && <div className={classes.treeItem__children}>
                {item.children !== null && item.children.length < 1 && <span>No data inside</span>}
                {item.children !== null && item.children.map((i) => <TreeItem
                    key={i.id}
                    item={i}
                    onIconClick={onIconClick}
                    onClickHandler={onClickHandler}
                />)}
            </div>}
        </div>
    )
})
