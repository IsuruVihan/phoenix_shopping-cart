import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import dotenv from 'dotenv';
import {client} from "./data/apollo/client";
import {Store} from "./state";
import {ApolloProvider} from "@apollo/client";
import {Provider} from "react-redux";
dotenv.config();

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={Store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
        </Provider>
    </ApolloProvider>
    ,
  document.getElementById('root')
);

reportWebVitals();