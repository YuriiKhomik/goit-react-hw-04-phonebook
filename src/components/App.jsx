import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { PhonebookForm } from './PhonebookForm';
import { ContactList } from './ContactList';
import { Box } from './Box';
import { Filter } from './Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    const match = contacts.find(contact => contact.name === newContact.name);

    if (match) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <Box p="4">
      <h1>Phonebook</h1>
      <PhonebookForm onSubmit={addContact} />
      <h1>Contacts</h1>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Box>
  );
}

// export class App extends Component {
//   state = {
//     // contacts: [],
// contacts: [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ],
//     filter: '',
//   };

//   addContact = ({ name, number }) => {
// const newContact = {
//   id: nanoid(),
//   name: name,
//   number: number,
// };

//     this.setState(prevState => {
//       const { contacts } = prevState;
//       const match = contacts.find(contact => contact.name === newContact.name);
//       return match
// ? alert(`${newContact.name} is already in contacts.`)
// : {
//     contacts: [newContact, ...prevState.contacts],
//   };
//     });
//   };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// changeFilter = e => {
//   this.setState({
//     filter: e.target.value,
//   });
// };

// getVisibleContacts = () => {
//   const { filter, contacts } = this.state;
//   const normalizedFilter = filter.toLowerCase();

// return contacts.filter(contact =>
//   contact.name.toLowerCase().includes(normalizedFilter)
// );
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();
// return (
//   <Box p="4">
//     <h1>Phonebook</h1>
//     <PhonebookForm onSubmit={this.addContact} />
//     <h1>Contacts</h1>
//     <Filter value={filter} onChange={this.changeFilter} />
//     <ContactList
//       contacts={visibleContacts}
//       onDeleteContact={this.deleteContact}
//     />
//   </Box>
// );
//   }
// }
