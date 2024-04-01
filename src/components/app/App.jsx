import css from "./App.module.css";
import { useState, useEffect } from "react";

import ContactForm from "../contact-form/ContactForm";
import SearchBox from "../search-box/SearchBox";
import ContactList from "../contact-list/ContactList";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem("contacts"));

    if (savedContacts === null) {
      return initialContacts;
    }

    return savedContacts;
  });

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  };

  const deleteContact = contactId => {
    const updatedContacts = contacts.filter(contact => {
      return contact.id !== contactId;
    });

    setContacts(updatedContacts);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  console.log(filteredContacts);

  return (
    <div className={css.appContainer}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filterValue={filterValue} setFilterValue={setFilterValue} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
