import {classNames} from '07-shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className = ''}: SidebarProps) => {
    const [menuItems, setMenuItems] = useState<any>([]);

    useEffect(() => {
        fetch('http://localhost:3000/pages')
            .then((res) => res.json())
            .then((json) => setMenuItems(json));
    }, []);

    return (
        <div className={classNames(classes.Sidebar, {}, [className])}>
            {menuItems.map((item: any) => {
                return <p key={item.id}>{item.title}</p>
            })}
            <NavLink to={'/catalog'}>Catalogs</NavLink>
            <NavLink to={'/section'}>Sections</NavLink>
        </div>
    );
}