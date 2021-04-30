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
    <Route exact path="/financial" component={Financial} />
    <Route exact path="/customers/page1" component={Customers} />
    <Route exact path="/customers/page2" component={Customers} />
    <Route exact path="/customers/page3" component={Customers} />
    <Route exact path="/products/page1" component={Products} />
    <Route exact path="/products/page2" component={Products} />
    <Route exact path="/products/page3" component={Products} />
    <Route exact path="/reports" component={Reports} />
    <Route exact path="/tools/page1" component={Tools} />
    <Route exact path="/tools/page2" component={Tools} />
    <Route exact path="/tools/page3" component={Tools} />
    <Route exact path="/emails" component={Emails} />
    <Route exact path="/registrations/page1" component={Registrations} />
    <Route exact path="/registrations/page2" component={Registrations} />
    <Route exact path="/registrations/page3" component={Registrations} />
    <Redirect to='/dashboard'/>
  </Switch>
);
export default Routes;