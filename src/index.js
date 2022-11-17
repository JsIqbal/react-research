import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.component';
console.log(App);

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);