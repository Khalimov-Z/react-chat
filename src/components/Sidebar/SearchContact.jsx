import React from 'react';
import styles from './sidebar.module.css';

function SearchContact() {
  return (
    <div>
      <div className={styles.dummy}>
        <div className={styles.search}>
          <i className="fas fa-search">

          </i>
        </div>
        <div className={styles.type}>
          <input
            type="text"
            className={styles.typing}
            placeholder="Search Contacts"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchContact;
