import { TreeItemInterface } from '06-entities/Tree/ui/TreeItem/TreeItem';

export interface SidebarState {
    isLoading: boolean;
    menuItems: TreeItemInterface[]
}
