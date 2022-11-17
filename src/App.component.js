import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';

import { Home } from './components/home.component';
import { About } from './components/about.component';

function App () {
    return(
        <div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/about'}>About</Link>

            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
}

export default App;