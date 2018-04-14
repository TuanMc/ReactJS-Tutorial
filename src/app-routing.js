import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Login from './components/Login/Login';
import Main from './components/main';
import Register from './components/Login/Register';
import ForgetPassword from './components/Login/ForgetPassword';

const Router = () => (
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

export default Router
