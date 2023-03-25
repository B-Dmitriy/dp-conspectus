import React, { ChangeEvent } from 'react';
import { useTheme } from '07-shared/providers/theme';
import type { Theme } from '07-shared/providers/theme/lib/themeContext';

export const ThemeSwitcher = () => {
    const { theme, setTheme, themeList } = useTheme();

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value as Theme);
    };

    return (
        <select defaultValue={theme} onChange={onChange}>
            {themeList.map((item) => <option key={item}>{item}</option>)}
        </select>
    );
};
