import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/'
import Home from './pages/Home/'
import Subscribe from './pages/Subscribe/'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}></Route>
                <Route path='/home' exact component={Home}></Route>
                <Route path='/subscribe' exact component={Subscribe}></Route>
            </Switch>
        </BrowserRouter>
    )

}