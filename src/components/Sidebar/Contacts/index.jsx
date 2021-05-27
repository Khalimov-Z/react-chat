import React from 'react';
import Contact from './Contact';
import { useSelector } from 'react-redux';
import ScrollIntoView from 'react-scroll-into-view';
import styles from './contacts.module.css';

function Contacts(props) {
  const filter = useSelector((state) => state.contacts.filter);

  const contacts = useSelector((state) => state.contacts.contacts.filter(
    contact => contact.fullname.toLowerCase().indexOf(filter.toLowerCase()) !== -1
  ));

  // const loading =useSelector(state => state.contacts.loading)

  return (
    <div className={styles.scroll}>
      {contacts.map(contact => {
        return(
          <ScrollIntoView selector="#footer">
              <Contact contact={contact} key={contact._id}/>
          </ScrollIntoView>
        )
      })}
    </div>
  );
}

export default Contacts;
