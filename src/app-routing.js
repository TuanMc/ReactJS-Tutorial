import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login-component/login-component';
import Main from './components/main';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Main} />
    </Switch>
)

export default Router
