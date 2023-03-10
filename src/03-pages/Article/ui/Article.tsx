import React from 'react';
import {PageLoader} from '07-shared/ui/PageLoader/PageLoader';

function Article() {
    return (
        <div style={{ backgroundColor: 'cyan', width: '100%' }}>
            <PageLoader />
        </div>
    );
}

export default Article;
