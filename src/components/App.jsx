import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length === 0) return;

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = contact => {
    if (
      contacts.some(c => c.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    const finalContact = {
      id: nanoid(),
      ...contact,
    };

    setContacts(prev => [finalContact, ...prev]);
  };

  const filterContacts = filterValue => {
    setFilter(filterValue);
  };

  const onDeleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div style={{ margin: 20 }}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <h2>Contacts</h2>
      <Filter filterContacts={filterContacts} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};
