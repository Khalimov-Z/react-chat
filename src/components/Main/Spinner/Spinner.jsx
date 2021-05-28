import React from 'react';
import styles from './spinner.module.css';

function Spinner() {
  return (
    <div className={styles['spinner-head']}>
      <div className={styles.spinner} />
      Loading...
    </div>
  );
}

export default Spinner;