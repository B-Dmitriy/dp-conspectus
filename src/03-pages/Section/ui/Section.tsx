import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Section.module.scss';

interface SectionProps {
    className?: string;
}

export const Section = ({ className = '' }: SectionProps) => {
    return (
        <div className={classNames(classes.Section, {}, [className])}>
            Section
        </div>
    );
}