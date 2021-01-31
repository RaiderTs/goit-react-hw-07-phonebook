import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import style from './ContactList.module.css';
import Loader from '../Loader/Loader';
// import { deleteContact } from '../../redux/phonebook/phonebook-action';
// import { onFilterContacts } from '../../redux/phonebook/phonebook-selectors';

import {
  fetchUserContact,
  deleteUserContact,
} from '../../redux/phonebook/phonebook-operations';
import {
  loading,
  error,
  onFilterContacts,
} from '../../redux/phonebook/phonebook-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(onFilterContacts);
  const loadingContacts = useSelector(loading);
  const errorFetch = useSelector(error);

  useEffect(() => {
    dispatch(fetchUserContact());
  }, [dispatch]);

  return (
    <>
      {loadingContacts && <Loader />}
      {errorFetch && (
        <error>Something went wrong... {errorFetch}! Try again later!</error>
      )}
      {!loadingContacts && !errorFetch && items && items.length > 0 ? (
        <ul className={style.list}>
          {items.map(({ id, name, phone }) => (
            <li className={style.item} key={id}>
              <p className={style.info}>
                {name}: {phone}
              </p>
              <button
                className={style.btn}
                onClick={() => dispatch(deleteUserContact(id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default ContactList;
