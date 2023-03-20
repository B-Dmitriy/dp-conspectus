import { ReactNode, Suspense } from 'react';
import { PageLoader } from '07-shared/ui/PageLoader/PageLoader';

export const withSuspense = (
    children: ReactNode,
) => <Suspense fallback={<PageLoader />}>{children}</Suspense>;
