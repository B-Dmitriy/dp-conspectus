import React, { useState } from 'react';
import { FormattedText } from '07-shared/ui/FormattedText';

const MainPage = () => {
    const [text, setText] = useState('');
    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <hr />
            <FormattedText text={text} />
        </div>
    );
};

export default MainPage;
