import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';
import { Provider, } from "react-redux";
import store from "./store";
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, } from "react-router-dom";
import AccountProvider from "./providers/AccountProvider";
import rootReducer from './reducers';

ReactDOM.render(
  <Provider store={store}>
    <AccountProvider>
      <Router>
        <Blog /> 
      </Router>
    </AccountProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

export default rootReducer;