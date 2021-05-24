import React from 'react';
import styles from './Contacts.module.css';
import Contact from './Contact';
import { useSelector } from 'react-redux';

function Contacts() {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div className={styles.scroll}>
      {contacts.map((contact) => {
        return <Contact contact={contact} key={contact._id} />;
      })}
    </div>
  );
}

export default Contacts;
