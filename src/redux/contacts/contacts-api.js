import axios from 'axios';

axios.defaults.baseURL = 'https://6479b481a455e257fa6398f4.mockapi.io';

export async function fetchContact() {
  const contacts = await axios.get('/contacts');
  console.log(contacts.data);
  return contacts.data;
}

export async function addContact(contact) {
  return fetch('https://6479b481a455e257fa6398f4.mockapi.io/contacts', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(contact),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}

export async function deleteContact(id) {
  return fetch(`https://6479b481a455e257fa6398f4.mockapi.io/contacts/${id}`, {
    method: 'DELETE',
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}
