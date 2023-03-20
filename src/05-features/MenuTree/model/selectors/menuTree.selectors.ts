import { RootState } from '01-app/providers/store/lib/store';

export const getSidebarIsLoading = (state: RootState) => state.menuTree.isLoading;
export const getMenuItems = (state: RootState) => state.menuTree.menuItems;
