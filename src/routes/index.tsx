import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

//Páginas
import Customers from "../pages/Customers";
import Dashboard from '../pages/Dashboard'
import Emails from "../pages/Emails";
import Financial from "../pages/Financial";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Registrations from "../pages/Registrations";
import Reports from "../pages/Reports";
import Tools from "../pages/Tools";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Dashboard} />
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
    <Route exact path="/ferramentas/page1" component={Tools} />
    <Route exact path="/ferramentas/page2" component={Tools} />
    <Route exact path="/ferramentas/page3" component={Tools} />
    <Route exact path="/emails" component={Emails} />
    <Route exact path="/cadastros/page1" component={Registrations} />
    <Route exact path="/cadastros/page2" component={Registrations} />
    <Route exact path="/cadastros/page3" component={Registrations} />
    <Redirect to='/dashboard'/>
  </Switch>
);
export default Routes;