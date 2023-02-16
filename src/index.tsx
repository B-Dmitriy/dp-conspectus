import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './01-app/ui/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
