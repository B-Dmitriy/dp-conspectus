import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Code.module.scss';

interface CodeProps {
    content: string | null;
    className?: string;
}

export function Code({ content, className }: CodeProps) {
    return (
        <pre
            data-testid="code_pre_id"
            className={classNames(classes.Code, {}, [className])}
        >
            {content}
        </pre>
    );
}
