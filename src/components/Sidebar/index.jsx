import React from 'react';
import styles from './sidebar.module.css';
import SearchContacts from './SearchContacts';
import Contacts from './Contacts';

function Sidebar() {
  return (
    <div className={styles.contacts}>
      <SearchContacts />
      <Contacts />
    </div>
  );
}

export default Sidebar;
