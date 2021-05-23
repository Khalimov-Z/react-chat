import React from 'react';
import styles from './SearchContacts.module.css';

function SearchContacts() {
  return (
    <div className={styles['sidebar-header']}>
      <div className={styles['head-block']}>
        <div className={styles.magnifier}>
          <i className="fas fa-search"> </i>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search contact"
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.line}> </div>
    </div>
  );
}

export default SearchContacts;
