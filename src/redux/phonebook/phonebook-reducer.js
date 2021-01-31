import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  filterContact,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './phonebook-action';

const fetchContact = (_, { payload }) => {
  return [...payload];
};

const addContact = (state, { payload }) => {
  return [...state, payload];
};

const deleteContact = (state, { payload }) => {
  return state.filter(({ id }) => id !== payload);
};

const items = createReducer([], {
  [fetchContactSuccess]: fetchContact,
  [addContactSuccess]: addContact,
  [deleteContactSuccess]: deleteContact,
});

const filter = createReducer('', {
  [filterContact.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(false, {
  [fetchContactRequest]: () => '',
  [fetchContactSuccess]: () => '',
  [fetchContactError]: (_, { payload }) => payload,

  [addContactRequest]: () => '',
  [addContactSuccess]: () => '',
  [addContactError]: (_, { payload }) => payload,

  [deleteContactRequest]: () => '',
  [deleteContactSuccess]: () => '',
  [deleteContactError]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default phonebookReducer;
