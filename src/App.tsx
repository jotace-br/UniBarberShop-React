import React from "react";
import GlobalStyles from "./styles/global";
import Routes from "./routes";
import './App.css'
import { ThemeProvider } from "styled-components";
import theme from './styles/theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes />
    </ThemeProvider>
  );
}

export default App;