import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/App.css";
import "./css/Header.css";
import "./css/Footer.css";
import "./css/Auth.css";
import { HashRouter, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import HomeLayout from "./layouts/home";
import InfoLayout from "./layouts/info"
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <React.StrictMode>
        <HashRouter>
          <Switch>
            <Route path={'/auth'} component={AuthLayout} />
            <Route path={'/home'} component={HomeLayout} />
            <Route path={'/info'} component={InfoLayout} />
            <Redirect from='/' to='/auth' />
          </Switch>
        </HashRouter>
      </React.StrictMode>
    </BrowserRouter>
  </ChakraProvider>
);