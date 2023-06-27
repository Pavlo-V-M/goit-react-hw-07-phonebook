import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/contactsOperations';

const Contacts = () => {
  const filterValue = useSelector(state => state.valueFilter);
  const contactsValue = useSelector(state => state.contacts.entities);
  const dispatch = useDispatch();

  const visibleContacts = useMemo(() => {
    const normalizeFilter = filterValue.toLowerCase();
    return contactsValue.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  }, [contactsValue, filterValue]);

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <button
            type="submit"
            id={id}
            onClick={evt => dispatch(deleteContacts(evt.target.id))}
          >
            Delet
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
