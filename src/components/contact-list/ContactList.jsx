import css from "./ContactList.module.css";

import Contact from "../contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <Contact
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
