import { useState } from 'react';
import { MenuTree } from '05-features/MenuTree';
import { Button } from '07-shared/ui/Button/Button';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [isRolled, setIsRolled] = useState<boolean>(false);

    const toggleSidebar = () => setIsRolled((prev) => !prev);

    return (
        <div className={classNames(classes.Sidebar, {
            [classes.rolled]: isRolled,
        }, [className])}
        >
            <section className={classes.menu}>
                <Button view="primary" onClick={toggleSidebar}>Toggle</Button>
                <MenuTree isRolled={isRolled} />
            </section>
        </div>
    );
}
