import React, {memo, useCallback, useState} from "react";
import classes from './TreeItem.module.scss';
import {ArrowR} from "../../../assets/icons/ArrowR";
import {classNames} from '07-shared/lib/classNames/classNames';

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
    isArrowsDisable?: boolean;
    onIconClick: (role: TreeItemRole, id: number) => void;
    onClickHandler: (role: TreeItemRole, id: number) => void;
}

export const TreeItem = memo(({item, isArrowsDisable = false, onIconClick, onClickHandler}: TreeItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onIconClickHandler = useCallback(() => {
        if (!isOpen) {
            onIconClick(item.role, item.id);
            setIsOpen((prev) => !prev);
            return;
        }
        setIsOpen((prev) => !prev);
    }, [isOpen])


    const onTitleClick = () => onClickHandler(item.role, item.id)

    return (
        <div className={classes.treeItem}>
            <div className={classes.treeItem__header}>
                {!item.isLast && <button
                    disabled={isArrowsDisable}
                    className={classNames(classes.treeItem__arrow, {
                        [classes.treeItem__arrow_open]: isOpen,
                        [classes.disabled]: isArrowsDisable,
                    }, [])}
                    onClick={onIconClickHandler}
                >
                {item.children && <ArrowR/>}
                </button>}
                <span
                    className={`${classes.treeItem__title} ${(item.isLast && !item.children.length)
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
                {item.children !== null && item.children.length < 1 && <span className={classes.noData}>No data inside</span>}
                {item.children !== null && item.children.map((i) => <TreeItem
                    key={i.id}
                    item={i}
                    isArrowsDisable={isArrowsDisable}
                    onIconClick={onIconClick}
                    onClickHandler={onClickHandler}
                />)}
            </div>}
        </div>
    )
})
