import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Routes from "./routes";
import './App.less'
import Layout from './containers/Layout'

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;