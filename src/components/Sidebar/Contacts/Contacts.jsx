import React from 'react';
import styles from './Contacts.module.css';
import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';


function Contacts() {
  const contacts = useSelector((state) => state.contacts.contacts);
  // const loading =useSelector(state => state.contacts.loading)


  return (
    <div className={styles.scroll}>
      {contacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />
      })}
    </div>
  );
}

export default Contacts;
