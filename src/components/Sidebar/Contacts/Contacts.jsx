import React from 'react';
import styles from './Contacts.module.css';
import Contact from '../Contact';

function Contacts() {
  return (
    <div className={styles.scroll}>
      <Contact />
    </div>
  );
}

export default Contacts;
