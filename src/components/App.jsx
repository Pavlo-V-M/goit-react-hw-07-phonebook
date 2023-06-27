import { useSelector, useDispatch } from 'react-redux';

import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContacts,
} from 'redux/contacts/contactsOperations';

export const App = () => {
  const dispatch = useDispatch();

  const addContactFulfilled = useSelector(
    state => state.contacts.addContactFulfilled
  );
  const deleteContactFulfilled = useSelector(
    state => state.contacts.deleteContactFulfilled
  );

  const deletName = evt => {
    dispatch(deleteContacts(evt.target.id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (addContactFulfilled) {
      dispatch(fetchContacts());
    }
  }, [dispatch, addContactFulfilled]);

  useEffect(() => {
    if (deleteContactFulfilled) {
      dispatch(fetchContacts());
    }
  }, [dispatch, deleteContactFulfilled]);

  return (
    <div className="AppWrap">
      <h1>PhoneBook</h1>
      <Phonebook />
      <h1>Contacts</h1>
      <Filter />
      <Contacts onClick={deletName} />
    </div>
  );
};
