import React, { memo, useCallback, useState } from 'react';
import { TreeItemProps } from '../../../types/Tree.types';
import { TreeItemIcon } from '../TreeItemIcon/TreeItemIcon';
import { TreeItemTitle } from '../TreeItemTitle/TreeItemTitle';
import { TreeItemDropdown } from '../TreeItemDropdown/TreeItemDropdown';
import classes from './TreeItem.module.scss';

export const TreeItem = memo(({
    item, isLoading = false, onOpen, onClose, onClickHandler,
}: TreeItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const onIconClickHandler = useCallback(() => {
        if (!isOpen) {
            onOpen(item.deep, item.id);
            setIsOpen((prev) => !prev);
        } else {
            onClose(item.deep, item.id);
            setIsOpen((prev) => !prev);
        }
    }, [isOpen, item]);

    const onTitleClick = () => onClickHandler(item.deep, item.id);

    return (
        <div className={classes.treeItem}>
            <div className={classes.header}>
                {!item.isLast && (
                    <TreeItemIcon
                        isOpen={isOpen}
                        isLoading={isLoading}
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
                    isLoading={isLoading}
                    onOpen={onOpen}
                    onClose={onClose}
                    onClickHandler={onClickHandler}
                />
            )}
        </div>
    );
});
