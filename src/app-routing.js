import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Scenes
import Main from './scenes/landing/main';

import Login from './scenes/login/Login';
import Register from './scenes/login/Register';
import ForgetPassword from './scenes/login/ForgetPassword';

const AppRouter = () => (
    <Switch>

        {/* The page will redirect to login page if url */}
        <Route exact path='/' render={() => <Redirect to="/login" />} />

        {/* Login Components */}
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forget_password' component={ForgetPassword} />
        <Route path='/home' component={Main} />
    </Switch>
)

export default AppRouter
