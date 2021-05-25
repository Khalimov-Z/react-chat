import React from 'react';
import styles from './sidebar.module.css';
import Contacts from './Contacts';
import SearchContacts from './SearchContacts';

function Sidebar() {
  return (
    <div className={styles.contacts}>
      <SearchContacts />
      <Contacts />
    </div>
  );
}

export default Sidebar;
