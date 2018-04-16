import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Components
import AppRouter from './app-routing';

ReactDOM.render(
    //  To use react-router:
    //  s1: run npm install --save react-router-dom
    //  s2: import BrowserRouter from 'react-router-dom';
    //  For more information, visit https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf   
    (
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    ),
    document.getElementById('root')
);

