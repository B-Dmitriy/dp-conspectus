import { Code } from '07-shared/ui/Code/Code';
import React, { useMemo } from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './FormattedText.module.scss';
import { parseCode } from '../lib/parseCode/parseCode';
import { parseHeaders } from '../lib/parseHeaders/parseHeaders';
import { parseSecondHeaders } from '../lib/parseSecondHeaders/parseSecondHeaders';
import { parseLinks } from '../lib/parseLinks/parseLinks';
import { FormattedTextTags } from '../types/FormattedText.types';

interface FormattedTextProps {
    text: string;
    className?: string;
}

export function FormattedText({ text, className }: FormattedTextProps) {
    const result: JSX.Element[] = [];
    const parser = new DOMParser();

    const formattedString = useMemo(
        () => parseCode(parseLinks(parseHeaders(parseSecondHeaders((text))))),
        [text],
    );

    const parsedDocument = parser.parseFromString(formattedString, 'text/html');
    const nodes = parsedDocument.body.childNodes;

    nodes.forEach((node: ChildNode, index) => {
        const id = index + 1;
        if (node.nodeName === FormattedTextTags.H3) {
            result.push(<h3 className={classes.h3} key={id}>{node.textContent}</h3>);
        }
        if (node.nodeName === FormattedTextTags.H4) {
            result.push(<h4 className={classes.h4} key={id}>{node.textContent}</h4>);
        }
        if (node.nodeName === FormattedTextTags.TEXT) {
            result.push(<span className={classes.text} key={id}>{node.textContent}</span>);
        }
        if (node.nodeName === FormattedTextTags.A) {
            const anchor = node as HTMLAnchorElement;
            result.push(<a className={classes.anchor} key={id} href={anchor.href || ''}>{anchor.textContent}</a>);
        }
        if (node.nodeName === FormattedTextTags.PRE) {
            result.push(<Code className={classes.code} key={id} content={node.textContent} />);
        }
    });

    return <pre className={classNames(classes.FormattedText, {}, [className])}>{result}</pre>;
}
