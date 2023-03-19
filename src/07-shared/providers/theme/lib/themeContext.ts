import { createContext } from 'react';

export type Theme = 'app_light_theme' | 'app_dark_theme';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
    themeList?: Theme[];
}

export const THEME_LIST: Theme[] = ['app_light_theme', 'app_dark_theme'];
export const ThemeContext = createContext<ThemeContextProps>({});
