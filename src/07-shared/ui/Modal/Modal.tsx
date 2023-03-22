import {
    ReactNode, MouseEvent, useEffect, useState, useRef,
} from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import { useTheme } from '07-shared/providers/theme';
import { Portal } from '../Portal/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
}

export const Modal = ({
    isOpen, onClose, children, className,
}: ModalProps) => {
    const ANIMATION_DELAY = 150; // Must be shorts then transition time (250)

    const { theme } = useTheme();
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const [isClosing, setIsClosing] = useState(false);

    const closeHandler = () => {
        setIsClosing(true);
        if (onClose) {
            timerRef.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, ANIMATION_DELAY);
        }
    };

    const onKeyPress = (event: KeyboardEvent) => {
        if (event.code === 'Escape' && onClose) {
            closeHandler();
        }
    };

    const onOverlayClick = () => closeHandler();

    const onContentClick = (e: MouseEvent) => e.stopPropagation();

    useEffect(() => {
        document.body.addEventListener('keydown', onKeyPress);
        return () => {
            clearTimeout(timerRef.current);
            document.body.removeEventListener('keydown', onKeyPress);
        };
    }, []);

    return (
        <Portal>
            <div className={classNames(classes.Modal, {
                [classes.opened]: isOpen,
                [classes.closing]: isClosing,
            }, [className, theme])}
            >
                <div
                    className={classes.overlay}
                    onClick={onOverlayClick}
                >
                    <div
                        className={classes.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
