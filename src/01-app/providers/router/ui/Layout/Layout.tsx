import { classNames } from '07-shared/lib/classNames/classNames';
import { Sidebar } from '04-widgets/Sidebar';
import { Navbar } from '04-widgets/Navbar';
import { Outlet } from 'react-router-dom';
import React from 'react';
import classes from './Layout.module.scss';

interface LayoutProps {
    className?: string;
}

function Layout({ className }: LayoutProps) {
    return (
        <div className={classNames(classes.Layout, {}, [className, 'light'])}>
            <Navbar />
            <div className={classes.container}>
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
