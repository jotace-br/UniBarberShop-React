import React from "react";
import { Redirect, Route } from "react-router-dom";
import Layout from "../../containers/Layout";
import { isAuthenticated, authTest } from "../../services/login";

const PrivateRoute = ({ component, title, ...rest }: any) => {
  authTest();
  const routeComponent = (props: any) =>
    isAuthenticated() ? (
      React.createElement(component, props, title)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  // React.createElement(component, props, title);
  return isAuthenticated() ? (
    <Layout>
      <Route {...rest} render={routeComponent} />
    </Layout>
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
};

export default PrivateRoute;
