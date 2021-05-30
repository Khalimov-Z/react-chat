import React from 'react';
import styles from './spinner-contact.module.css';

function SpinnerContact() {
  return (
    <div className={styles['spinner-head']}>
      <div className={styles['spinner-contact']}>
        <i className="fas fa-sync"> </i>
      </div>
      <div className={styles.updating}>
        Updating...
      </div>
    </div>
  );
}

export default SpinnerContact;