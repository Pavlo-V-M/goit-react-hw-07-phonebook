import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/contactsOperations';

export default function Phonebook({ contacts }) {
  const [dataName, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contactsValue = useSelector(state => state.contacts.entities);

  const chahgeInputName = evt => {
    const checkName = evt.currentTarget.value.toLowerCase();
    contactsValue.forEach(({ name }) => {
      if (name.toLowerCase() === checkName) {
        alert(`${evt.currentTarget.value} is already in contacts`);
        return;
      }
    });
  };

  const handleSubmitName = evt => {
    evt.preventDefault();
    const { name, number } = evt.target;
    const valueName = name.value;
    const valueNumber = number.value;
    const checkName = valueName.toLowerCase();

    contactsValue.forEach(({ name }) => {
      if (name.toLowerCase() === checkName) {
        alert(`${evt.currentTarget.value} is already in contacts`);
        return;
      }
    });
    const object = { name: valueName, phone: valueNumber };
    dispatch(addContacts(object));
    setName('');
    setNumber('');
  };

  const handleChangeName = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }

    chahgeInputName(evt);
  };

  return (
    <form onSubmit={handleSubmitName}>
      <label>
        Name
        <input
          value={dataName}
          type="text"
          placeholder="please, enter in full"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChangeName}
          required
        />
      </label>
      <label>
        Number
        <input
          value={number}
          type="tel"
          placeholder="example: 111-11-11"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleChangeName}
          required
        />
      </label>
      <button type="submit">
        Add contact
      </button>
    </form>
  );
}
