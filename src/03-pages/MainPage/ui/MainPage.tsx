import React, { useState } from 'react';
import { FormattedText } from '07-shared/ui/FormattedText';
import { Modal } from '07-shared/ui/Modal/Modal';

const MainPage = () => {
    const [text, setText] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button type="button" onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, nostrum?
            </Modal>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <hr />
            <FormattedText text={text} />
        </div>
    );
};

export default MainPage;
