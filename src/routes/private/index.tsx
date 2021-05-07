import React from "react";
import { Redirect, Route } from "react-router-dom";
import Layout from "../../containers/Layout";

import { isAuthenticated } from "../../services/login";

const PrivateRoute = ({ component, title, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated()
      ? React.createElement(component, props, title)
      :  <Redirect to={{ pathname: "/login" }} />
        // React.createElement(component, props, title);
  return (
    <Layout>
      <Route {...rest} render={routeComponent} />
    </Layout>
  );
};

export default PrivateRoute;
