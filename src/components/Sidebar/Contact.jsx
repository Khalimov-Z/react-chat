import React from 'react';
import styles from './sidebar.module.css';

function Contact() {
  return (
    <div>
      <div className={styles.contact}>
        <div className={styles['user-avatar']}>
          <div className={styles['user-image']}>
            <div className={styles.online}> </div>
            <div className={styles.image}>N</div>
          </div>
        </div>
        <div className={styles['user-head-title']}>
          <div className={styles['user-name']}>Name Surname</div>
          <div className={styles['user-title']}>
            <div className={styles['user-check']}>
              <i className="fas fa-check"> </i>
            </div>
            <div className={styles['user-last-message']}>
              Last message in user...
            </div>
          </div>
        </div>
        <div className={styles['user-menu']}>
          <div className={styles['user-more']}>
            <i className="fas fa-ellipsis-h"> </i>
          </div>
          <div className={styles['user-last-time']}>5 min</div>
        </div>
      </div>
      <div className={styles['half-line']}> </div>
    </div>
  );
}

export default Contact;
