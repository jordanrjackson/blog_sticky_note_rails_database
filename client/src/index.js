import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';
import { BrowserRouter, } from "react-router-dom";
import { Provider, } from "react-redux";
import store from "./store";
import "semantic-ui-css/semantic.min.css";
import AccountProvider from "./providers/AccountProvider";
import * as serviceWorker from './serviceWorker';

export default ReactDOM.render(
  <AccountProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    </Provider>
  </AccountProvider>,
    document.getElementById('root')
  );

serviceWorker.unregister();