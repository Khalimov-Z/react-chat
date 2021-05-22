import React from 'react';
import styles from './sidebar.module.css';

function Contact(props) {
  return (
    <div>
      <div className={styles.contact}>
        <div className={styles['contacts-container']}>
          <div className={styles['user-avatar']}>
            <div className={styles['user-image']}>
              <div className={props.contact.online ? styles.online : styles.offline}> </div>
              <div className={styles.image}>{props.contact.fullname.charAt(0)}</div>
            </div>
          </div>
          <div className={styles['user-head-title']}>
            <div className={styles['user-name']}>{props.contact.fullname}</div>
            <div className={styles['user-title']}>
              <div className={styles['user-last-message']}>
                Last message in user...
              </div>
            </div>
          </div>
        </div>
        <div className={styles['user-menu']}>
          <div className={styles['user-more']}>
            <i className="fas fa-ellipsis-h"> </i>
          </div>
          <div className={styles['user-last-time']}>9:00</div>
        </div>
      </div>
      <div className={styles['half-line']}> </div>
    </div>
  );
}

export default Contact;
