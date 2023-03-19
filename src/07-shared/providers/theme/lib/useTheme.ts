import { useContext } from 'react';
import { CURRENT_THEME_KEY } from '07-shared/constants/constants';
import { Theme, ThemeContext } from './themeContext';

interface UseThemeResult {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    themeList: Theme[];
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme, themeList } = useContext(ThemeContext);

    const setNewTheme = (newTheme: Theme) => {
        if (setTheme) {
            setTheme(newTheme);
            localStorage.setItem(CURRENT_THEME_KEY, newTheme);
        }
    };

    return {
        theme: theme || 'app_light_theme',
        setTheme: setNewTheme,
        themeList: themeList || [],
    };
}
