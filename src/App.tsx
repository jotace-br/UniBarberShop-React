import React from "react";
import GlobalStyles from "./styles/global";
import Routes from "./routes";
import './App.css'
import Layout from './containers/Layout'
import { ThemeProvider } from "styled-components";
import theme from './styles/theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;