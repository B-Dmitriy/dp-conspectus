import React, { ReactNode, useMemo, useState } from 'react';
import { CURRENT_THEME_KEY } from '07-shared/constants/constants';
import { Theme, THEME_LIST, ThemeContext } from '../lib/themeContext';

const defaultTheme = localStorage.getItem(CURRENT_THEME_KEY) as Theme || 'app_light_theme';

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const themeContextDefault = useMemo(() => ({
        theme,
        setTheme,
        themeList: THEME_LIST,
    }), [theme]);

    return (
        <ThemeContext.Provider value={themeContextDefault}>
            {children}
        </ThemeContext.Provider>
    );
};
