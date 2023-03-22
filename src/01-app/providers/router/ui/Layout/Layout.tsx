import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '04-widgets/Navbar';
import { Sidebar } from '04-widgets/Sidebar';
import { useTheme } from '07-shared/providers/theme/lib/useTheme';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Layout.module.scss';

interface LayoutProps {
    className?: string;
}

function Layout({ className }: LayoutProps) {
    // const { theme } = useTheme();

    return (
        <div className={classNames(classes.Layout, {}, [className])}>
            <Navbar />
            <div className={classes.container}>
                <Sidebar />
                <main className={classes.main}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;
