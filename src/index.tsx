import React from 'react';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {Store} from './state';
import {client} from "./data/apollo/client";

ReactDOM.render(
    <ApolloProvider client={client}>
      <React.StrictMode>
          <Provider store={Store}>
              <App />
          </Provider>
      </React.StrictMode>
    </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();