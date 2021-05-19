import React from 'react';
import styles from './sidebar.module.css';
import SearchContact from './SearchContact';
import Contact from './Contact';

function Sidebar () {
  return (
    <div className={styles["contacts"]}>
      <SearchContact />
      <div className={styles["scroll"]}>
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
}

export default Sidebar;