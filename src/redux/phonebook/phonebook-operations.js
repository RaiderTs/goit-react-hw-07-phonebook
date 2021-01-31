import axios from 'axios';
import {
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

axios.defaults.baseURL = 'http://localhost:4000/';

const fetchUserContact = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error.message)));
};

// const fetchUserContact = () => async dispatch => {
//   dispatch(fetchContactRequest());
//   try {
//     const { data } = await axios.get('contacts');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error.message));
//   }
// };

const addUserContact = ({ name, phone }) => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('contacts', { name, phone })
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const deleteUserContact = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

export { fetchUserContact, addUserContact, deleteUserContact };
