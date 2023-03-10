import { classNames } from '07-shared/lib/classNames/classNames';
import { Loader } from '07-shared/ui/Loader/Loader';
import classes from './Section.module.scss';

interface SectionProps {
    className?: string;
}

export function Section({ className }: SectionProps) {
    return (
        <div className={classNames(classes.Section, {}, [className])}>
            <Loader />
        </div>
    );
}
