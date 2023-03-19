import { classNames } from '07-shared/lib/classNames/classNames';
import { ThemeSwitcher } from '05-features/ThemeSwitcher/ui/ThemeSwitcher';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(classes.Navbar, {}, [className])}>
        <ThemeSwitcher />
    </div>
);
