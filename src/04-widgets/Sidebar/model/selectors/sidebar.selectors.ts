import {RootState} from "01-app/providers/store/lib/store";

export const getSidebarIsLoading = (state: RootState) => state.sidebar.isLoading;
export const getMenuItems = (state: RootState) => state.sidebar.menuItems;
