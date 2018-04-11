import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login-component/login-component'
import Main from './components/main'

const App = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Main} />
        </Switch>
    </main>
)

export default App
