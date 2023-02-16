import classes from './Code.module.scss';

// import {classNames} from "07-shared/lib/classNames/classNames";

interface CodeProps {
    content: string | null;
    className?: string;
}

export const Code = ({content, className}: CodeProps) => {

    return (
        <pre className={`${classes.Code} ${className}`}>
            {content}
        </pre>
    );
};
