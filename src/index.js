import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import styled, { createGlobalStyle } from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import middleware from './middleware'

const GlobalStyle= createGlobalStyle`
  html, body {
    height: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
`
const store= createStore(reducer, middleware)

ReactDOM.render(<Provider store={store}><App /><GlobalStyle/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
