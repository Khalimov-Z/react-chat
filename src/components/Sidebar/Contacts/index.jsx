import React, { useEffect } from 'react';
import styles from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../../redux/ducks/contacts';
import Contact from './Contact';


function Contacts() {
  const contacts = useSelector((state) => state.contacts.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts())
  }, [dispatch]);

  return (
    <div className={styles.scroll}>
      {contacts.map(contact => {
        return <Contact contact={contact} key={contact.id} />
      })}
    </div>
  );
}

export default Contacts;
