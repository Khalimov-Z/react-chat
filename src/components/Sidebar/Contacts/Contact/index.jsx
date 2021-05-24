import React from 'react';
import styles from './Contact.module.css';
import { NavLink } from 'react-router-dom';

function Contact(props) {
  return (
    <div>
      <NavLink
        to={`/${props.contact._id}`}
        activeClassName={styles['contact-active']}
      >
        <div className={styles.contact}>
          <div className={styles['contacts-container']}>
            <div className={styles['user-avatar']}>
              <div className={styles['user-image']}>
                <div
                  className={
                    props.contact.online ? styles.online : styles.offline
                  }
                >
                  {' '}
                </div>
                <div className={styles.image}>
                  {props.contact.fullname.charAt(0)}
                </div>
              </div>
            </div>
            <div className={styles['user-head-title']}>
              <div className={styles['user-name']}>
                {props.contact.fullname}
              </div>
              <div className={styles['user-title']}>
                <div className={styles['user-last-message']}>
                  {props.contact.lastMessage?.content}
                </div>
              </div>
            </div>
          </div>
          <div className={styles['user-menu']}>
            <div className={styles['user-more']}>
              <i className="fas fa-ellipsis-h"> </i>
            </div>
            <div className={styles['user-last-time']}>
              {props.contact.lastMessage?.time ? (
                new Date(props.contact.lastMessage?.time)
                  .toLocaleTimeString()
                  .slice(0, -3)
              ) : (
                <div>9:00</div>
              )}
            </div>
          </div>
        </div>
        <div className={styles['half-line']}> </div>
      </NavLink>
    </div>
  );
}

export default Contact;
