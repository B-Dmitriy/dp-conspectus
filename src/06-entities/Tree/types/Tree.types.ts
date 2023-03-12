export type TreeItemDeep = '1' | '2' | '3';

export interface TreeItemInterface {
    id: number;
    deep: TreeItemDeep;
    title: string;
    children: TreeItemInterface[];
    isLast: boolean;
}

export interface TreeItemProps {
    item: TreeItemInterface,
    isArrowsDisable?: boolean;
    onIconClick: (deep: TreeItemDeep, id: number) => void;
    onClickHandler: (deep: TreeItemDeep, id: number) => void;
}

export interface TreeProps {
    items: TreeItemInterface[],
    isLoading?: boolean;
    onIconClick: (deep: TreeItemDeep, id: number) => void;
    onItemClick: (deep: TreeItemDeep, id: number) => void;
}
