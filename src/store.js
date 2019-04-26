//import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
//import redux-promise-middleware as promiseMiddleware;
import promiseMiddleware from 'redux-promise-middleware';
//import the reducer from budgetReducer.js
import budgetReducer from './ducks/budgetReducer';
// Import the user reducer function.
import userReducer from './ducks/userReducer';


//Create a variable called rootReducer. It's value will be the result of calling combineReducers.
const rootReducer = combineReducers({
    budget: budgetReducer,
    // after we create our userreducer, we come to store.js to add to combine reducer
    user: userReducer
  })

//export the created store using createStore. This first arg to createStore should be rootReducer. 
//The second arg is applyMiddleware(promiseMiddlware)
export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
//Now we can go connect the redux part of our app to the react part in index.js