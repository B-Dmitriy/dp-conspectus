import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorScreen } from '04-widgets/ErrorScreen';
import { Loader } from '07-shared/ui/Loader/Loader';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.log('[Error boundary]', error.name, error.message, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <Suspense fallback={<Loader />}><ErrorScreen /></Suspense>;
        }

        return children;
    }
}
