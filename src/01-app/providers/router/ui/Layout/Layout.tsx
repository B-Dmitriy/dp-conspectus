import classes from './Layout.module.scss';
import {classNames} from "07-shared/lib/classNames/classNames";
import {Sidebar} from "04-widgets/Sidebar";
import {Outlet} from "react-router-dom";
import React from "react";

interface LayoutProps {
    className?: string;
}

const Layout = ({className = ''}: LayoutProps) => {
    return (
        <div className={classNames(classes.Layout, {}, [className])}>
            <div className={classes.container}>
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;
