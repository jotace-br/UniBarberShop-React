import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//Páginas
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";
import Emails from "../pages/Emails";
import Financial from "../pages/Financial";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Registrations from "../pages/Registrations";
import Reports from "../pages/Reports";

//ferramentas
import Integrations from "../pages/Tools/Webhooks";
import Api from "../pages/Tools/Api";
import Webhooks from "../pages/Tools/Webhooks";
import Login from "../pages/Login";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/cadastro" component={Dashboard} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/vendas" component={Financial} />
    <Route exact path="/clientes/page1" component={Customers} />
    <Route exact path="/clientes/page2" component={Customers} />
    <Route exact path="/clientes/page3" component={Customers} />
    <Route exact path="/produtos/page1" component={Products} />
    <Route exact path="/produtos/page2" component={Products} />
    <Route exact path="/produtos/page3" component={Products} />
    <Route exact path="/relatorios" component={Reports} />
    <Route exact path="/ferramentas/integracoes" component={Integrations} />
    <Route exact path="/ferramentas/api" component={Api} />
    <Route exact path="/ferramentas/webhooks" component={Webhooks} />
    <Route exact path="/emails" component={Emails} />
    <Route exact path="/cadastros/page1" component={Registrations} />
    <Route exact path="/cadastros/page2" component={Registrations} />
    <Route exact path="/cadastros/page3" component={Registrations} />
    <Redirect to="/dashboard" />
  </Switch>
);
export default Routes;
