import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(classes.Navbar, {}, [className])}>

        </div>
    );
}