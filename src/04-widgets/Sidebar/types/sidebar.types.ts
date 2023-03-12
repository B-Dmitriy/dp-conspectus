import type { TreeItemInterface } from '06-entities/Tree';

export interface SidebarState {
    isLoading: boolean;
    menuItems: TreeItemInterface[]
}
