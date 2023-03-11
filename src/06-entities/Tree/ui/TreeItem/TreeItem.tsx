import React, { memo, useCallback, useState } from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Button } from '07-shared/ui/Button/Button';
import classes from './TreeItem.module.scss';
import Arrow from '../../../../07-shared/assets/icons/arrow-right.svg';

export type TreeItemDeep = '1' | '2' | '3';

export interface TreeItemInterface {
    id: number;
    deep: TreeItemDeep;
    title: string;
    children: TreeItemInterface[];
    isLast: boolean;
}

interface TreeItemProps {
    item: TreeItemInterface,
    isArrowsDisable?: boolean;
    onIconClick: (deep: TreeItemDeep, id: number) => void;
    onClickHandler: (deep: TreeItemDeep, id: number) => void;
}

export const TreeItem = memo(({
    item, isArrowsDisable = false, onIconClick, onClickHandler,
}: TreeItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onIconClickHandler = useCallback(() => {
        if (!isOpen) {
            onIconClick(item.deep, item.id);
            setIsOpen((prev) => !prev);
            return;
        }
        setIsOpen((prev) => !prev);
    }, [isOpen]);

    const onTitleClick = () => onClickHandler(item.deep, item.id);

    return (
        <div className={classes.treeItem}>
            <div className={classes.treeItem__header}>
                {!item.isLast && (
                    <Button
                        view="clear"
                        disabled={isArrowsDisable}
                        className={classNames(classes.treeItem__arrow, {
                            [classes.treeItem__arrow_open]: isOpen,
                            [classes.disabled]: isArrowsDisable,
                        }, [])}
                        onClick={onIconClickHandler}
                    >
                        {item.children && <Arrow />}
                    </Button>
                )}
                <span
                    className={`${classes.treeItem__title} ${(item.isLast && !item.children.length)
                        ? classes.treeItem__title_withoutArrow
                        : ''}`}
                >
                    <Button
                        className={classes.buttonChild}
                        fullWidth
                        view="clear"
                        onClick={onTitleClick}
                    >
                        {item.title}
                    </Button>
                    <span className={classes.item__title__toolbar}>
                        <Button view="clear">+</Button>
                        <Button view="clear">d</Button>
                    </span>
                </span>
            </div>
            {isOpen && (
                <div className={classes.treeItem__children}>
                    {item.children !== null && item.children.length < 1
                        && <span className={classes.noData}>No data inside</span>}
                    {item.children !== null && item.children.map((i) => (
                        <TreeItem
                            key={i.id}
                            item={i}
                            isArrowsDisable={isArrowsDisable}
                            onIconClick={onIconClick}
                            onClickHandler={onClickHandler}
                        />
                    ))}
                </div>
            )}
        </div>
    );
});
