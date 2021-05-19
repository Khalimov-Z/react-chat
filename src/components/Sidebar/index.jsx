import React from 'react';
import styles from './sidebar.module.css';
import SearchContact from './SearchContact';
import Contacts from './Contacts';

function Sidebar() {
  return (
    <div className={styles.contacts}>
      <SearchContact />
      <Contacts />
    </div>
  );
}

export default Sidebar;
