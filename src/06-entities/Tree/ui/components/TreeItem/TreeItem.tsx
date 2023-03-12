import React, { memo, useCallback, useState } from 'react';
import { TreeItemProps } from '../../../types/Tree.types';
import { TreeItemIcon } from '../TreeItemIcon/TreeItemIcon';
import { TreeItemTitle } from '../TreeItemTitle/TreeItemTitle';
import { TreeItemDropdown } from '../TreeItemDropdown/TreeItemDropdown';
import classes from './TreeItem.module.scss';

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
            <div className={classes.header}>
                {!item.isLast && (
                    <TreeItemIcon
                        isOpen={isOpen}
                        isArrowsDisable={isArrowsDisable}
                        isChildrenExist={!!item.children}
                        onIconClickHandler={onIconClickHandler}
                    />
                )}
                <TreeItemTitle
                    title={item.title}
                    isLast={item.isLast}
                    onTitleClick={onTitleClick}
                    onDeleteClick={() => console.log('delete')}
                    isChildrenHasLength={!item.children.length}
                />
            </div>
            {isOpen && (
                <TreeItemDropdown
                    items={item.children}
                    isArrowsDisable={isArrowsDisable}
                    onIconClick={onIconClick}
                    onClickHandler={onClickHandler}
                />
            )}
        </div>
    );
});
