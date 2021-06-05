import React from 'react'

import { Redirect, Switch } from 'react-router-dom'
import GuestRoute from './guest'
import PrivateRoute from './private'

// Cadastro e Login
import Login from 'pages/auth/Login'
import Register from 'pages/auth/Register'
import Dashboard from 'pages/Dashboard'
//Páginas

const Routes: React.FC = () => (
  <Switch>
    <GuestRoute exact path="/login" component={Login} />
    <GuestRoute exact path="/register" component={Register} />
    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <Redirect to="/dashboard" />
  </Switch>
)
export default Routes
