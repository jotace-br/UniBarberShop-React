import React from "react";
import { Redirect, Switch } from "react-router-dom";

import GuestRoute from "./guest";
import PrivateRoute from "./private";

import ForgotPassword from "../pages/auth/ForgotPassword";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
//Páginas
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";
import Emails from "../pages/Emails";
import FinancialResume from "../pages/Financial";
import Products from "../pages/Products";
import Registrations from "../pages/Registrations";
import Reports from "../pages/Reports";
import Api from "../pages/Tools/Api";
//ferramentas
import {
  default as Integrations,
  default as Webhooks,
} from "../pages/Tools/Webhooks";

const Routes: React.FC = () => (
  <Switch>
    <GuestRoute exact path="/login" component={Login} />
    <GuestRoute exact path="/forgot-password" component={ForgotPassword} />
    <GuestRoute exact path="/register" component={Register} />
    <GuestRoute exact path="/cadastro" component={Dashboard} />

    <PrivateRoute exact path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/vendas" component={FinancialResume} />
    <PrivateRoute exact path="/clientes/page1" component={Customers} />
    <PrivateRoute exact path="/clientes/page2" component={Customers} />
    <PrivateRoute exact path="/clientes/page3" component={Customers} />
    <PrivateRoute exact path="/produtos/page1" component={Products} />
    <PrivateRoute exact path="/produtos/page2" component={Products} />
    <PrivateRoute exact path="/produtos/page3" component={Products} />
    <PrivateRoute exact path="/relatorios" component={Reports} />
    <PrivateRoute
      exact
      path="/ferramentas/integracoes"
      component={Integrations}
    />
    <PrivateRoute exact path="/ferramentas/api" component={Api} />
    <PrivateRoute exact path="/ferramentas/webhooks" component={Webhooks} />
    <PrivateRoute exact path="/emails" component={Emails} />
    <PrivateRoute exact path="/cadastros/page1" component={Registrations} />
    <PrivateRoute exact path="/cadastros/page2" component={Registrations} />
    <PrivateRoute exact path="/cadastros/page3" component={Registrations} />
    <Redirect to="/dashboard" />
  </Switch>
);
export default Routes;
