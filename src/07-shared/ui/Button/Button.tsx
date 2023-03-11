import { classNames } from '07-shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.scss';

type ButtonView = 'clear' | 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    view: ButtonView;
    className?: string;
    fullWidth?: boolean;
}

export const Button = ({
    view,
    children,
    className,
    fullWidth = false,
    ...rest
}: ButtonProps) => (
    <button
        className={classNames(classes.Button, {
            [classes.clear]: view === 'primary',
            [classes.clear]: view === 'secondary',
            [classes.clear]: view === 'outline',
            [classes.clear]: view === 'clear',
            [classes.fullWidth]: fullWidth,
        }, [className])}
        type="button"
        {...rest}
    >
        {children}
    </button>
);
