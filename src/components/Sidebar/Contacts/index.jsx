import React from 'react';
import { useSelector } from 'react-redux';
import ScrollIntoView from 'react-scroll-into-view';
import styles from './contacts.module.css';
import Contact from './Contact';


function Contacts() {
  const contacts = useSelector((state) => state.contacts.contacts);
  // const loading =useSelector(state => state.contacts.loading)


  return (
    <div className={styles.scroll}>
      {contacts.map(contact => {
        return(
          <ScrollIntoView selector="#footer">
              <Contact contact={contact} key={contact.id}/>
          </ScrollIntoView>
        )
      })}
    </div>
  );
}

export default Contacts;
