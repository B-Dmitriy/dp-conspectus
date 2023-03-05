import React, {useState} from 'react';
import {FormattedText} from "06-entities/FormattedText";

export const Main = () => {
    const [text, setText] = useState('');
    return (
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)}/>
            <hr/>
            <FormattedText text={text} />
        </div>
    );
};
