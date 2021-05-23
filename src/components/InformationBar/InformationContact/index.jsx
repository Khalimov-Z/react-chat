import React from 'react';
import styles from './information-contact.module.css';

function InformationContact (props) {
  return (
    <div className={styles["information-contact"]}>
      <div className={styles.avatar}>k</div>
      <div className={styles.username}>Name</div>
      <div className={styles.nickname}>@Name</div>
      <div className={styles.icons}>
        <span className={styles.icon}><i className="fas fa-phone-alt" /></span>
        <span className={styles.icon}><i className="fas fa-video"/></span>
        <span className={styles.icon}><i className="fas fa-envelope"/></span>
      </div>
    </div>
  );
}

export default InformationContact;