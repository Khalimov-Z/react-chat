import React from 'react';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import styles from './contacts.module.css';

function Contacts(props) {
  const filter = useSelector((state) => state.contacts.filter);

  const contacts = useSelector((state) => state.contacts.contacts.filter(
    contact => contact.fullname.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  ));

  return (
    <div className={styles.scroll}>
      {contacts.map((contact) => {
        return <Contact contact={contact} key={contact._id} />;
      })}
    </div>
  );
}

export default Contacts;
