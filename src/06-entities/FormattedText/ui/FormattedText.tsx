import { Code } from '07-shared/ui/Code/Code';
import React, { useMemo } from 'react';
import classes from './FormattedText.module.scss';
import { parseCode } from '../lib/parseCode/parseCode';
import { parseHeaders } from '../lib/parseHeaders/parseHeaders';
import { parseLinks } from '../lib/parseLinks/parseLinks';
import { FormattedTextTags } from '../types/FormattedText.types';

interface FormattedTextProps {
    text: string;
    className?: string;
}

export function FormattedText({ text, className }: FormattedTextProps) {
    const result: JSX.Element[] = [];
    const parser = new DOMParser();

    const formattedString = useMemo(() => parseCode(parseLinks(parseHeaders(text))), [text]);
    const parsedDocument = parser.parseFromString(formattedString, 'text/html');
    const nodes = parsedDocument.body.childNodes;

    nodes.forEach((node: ChildNode, index) => {
        const id = index + 1;
        if (node.nodeName === FormattedTextTags.H3) {
            result.push(<h3 key={id}>{node.textContent}</h3>);
        }
        if (node.nodeName === FormattedTextTags.TEXT) {
            result.push(<span key={id}>{node.textContent}</span>);
        }
        if (node.nodeName === FormattedTextTags.A) {
            // @ts-ignore
            result.push(<a key={id} href={node.href || ''}>{node.textContent}</a>);
        }
        if (node.nodeName === FormattedTextTags.PRE) {
            result.push(<Code key={id} content={node.textContent} />);
        }
    });

    return <pre className={`${classes.FormattedText} ${className}`}>{result}</pre>;
}
