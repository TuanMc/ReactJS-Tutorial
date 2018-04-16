import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Main from './components/body/main';

import Login from './components/login/Login';
import Register from './components/login/Register';
import ForgetPassword from './components/login/ForgetPassword';

const AppRouter = () => (
    <Switch>

        {/* The page will redirect to login page if url */}
        <Route exact path='/' render={() => <Redirect to="/login" />} />

        {/* Login Components */}
        <Route path='/login' component={Login} />
        <Route path='/home' component={Main} />
        <Route path='/register' component={Register} />
        <Route path='/forget_password' component={ForgetPassword} />
    </Switch>
)

export default AppRouter
