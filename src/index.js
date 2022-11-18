import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.component';

import ('bootstrap/dist/css/bootstrap.min.css');

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);