import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
    children: ReactNode;
    node?: Element;
}

export const Portal = ({ children, node }: PortalProps) => {
    const domNode = node || document.body;
    return ReactDOM.createPortal(children, domNode);
};
