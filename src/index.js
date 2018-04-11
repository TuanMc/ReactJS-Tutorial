import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Assets
import './assets/index.css';

// Components
import Router from './app-routing';

ReactDOM.render(
    //  To use react-router:
    //  s1: run npm install --save react-router-dom
    //  s2: import BrowserRouter from 'react-router-dom';
    //  For more information, visit https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf   
    (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    ),
    document.getElementById('root')
);

