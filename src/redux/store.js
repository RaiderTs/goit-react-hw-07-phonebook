import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import phonebookReducer from './phonebook/phonebook-reducer';

const rootReducer = combineReducers ({
  contacts: phonebookReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);


export default store;
