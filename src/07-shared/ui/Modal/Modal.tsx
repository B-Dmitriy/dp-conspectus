import {
    ReactNode, MouseEvent, useEffect, useState, useRef,
} from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import classes from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    isLazy?: boolean
    children: ReactNode;
    onClose?: () => void;
    className?: string;
}

export const Modal = ({
    isOpen,
    isLazy,
    children,
    onClose,
    className,
}: ModalProps) => {
    /** Ссылка для таймера таймаута анимации. Если хранить не в ref при быстром
     * размонтировании clearTimeout может не найти значения и выпасть в ошибку */
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const ANIMATION_DELAY = 150; // Must be shorts then transition time (250)

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const stopPropagation = (e: MouseEvent) => e.stopPropagation();

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

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        document.body.addEventListener('keydown', onKeyPress);
        return () => {
            clearTimeout(timerRef.current);
            document.body.removeEventListener('keydown', onKeyPress);
        };
    }, []);

    if (isLazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(classes.Modal, {
                [classes.opened]: isOpen,
                [classes.closing]: isClosing,
            }, [className])}
            >
                <div
                    className={classes.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={classes.content}
                        onClick={stopPropagation}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
