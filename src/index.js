//redux part of our app to the react part
// Import Provider from 'react-redux'.
import{ Provider } from 'react-redux';
//Import the store from './store.js'
import store from './store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


//Wrap the app component in the Provider component.
//Give the Provider component a store prop. The value 
//of the store prop should be the imported store.
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  , document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
