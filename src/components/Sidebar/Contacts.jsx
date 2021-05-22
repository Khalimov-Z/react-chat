import React, { useEffect } from 'react';
import styles from './sidebar.module.css';
import Contact from './Contact';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';

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
