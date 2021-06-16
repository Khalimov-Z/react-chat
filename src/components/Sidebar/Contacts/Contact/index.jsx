import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from '../../../../redux/ducks/contacts';
import PropTypes from 'prop-types';

function Contact({ contact }) {
  const selectedContactId = useSelector(
    (state) => state.contacts.selectedContactId,
  );

  const dispatch = useDispatch();

  const handleSelectContact = () => {
    dispatch(selectContact(contact?._id));
  };

  return (
    <div>
      <NavLink
        to={`/${contact?._id}`}
        activeClassName={styles['contact-active']}
      >
        <div
          className={`${styles.contact} ${
            selectedContactId === contact?._id ? styles.selected : false
          } `}
          onClick={handleSelectContact}
        >
          <div className={styles['user-avatar']}>
            <div className={styles['user-image']}>
              <div className={contact?.online ? styles.online : styles.offline}>
                {' '}
              </div>
              <div className={styles.image}>{contact?.fullname.charAt(0)}</div>
            </div>
          </div>
          <div className={styles['user-head-title']}>
            <div className={styles['user-name']}>{contact?.fullname}</div>
            <div className={styles['user-title']}>
              <div className={styles['user-last-message']}>
                {contact?.lastMessage?.content}
              </div>
            </div>
          </div>
          <div className={styles['user-menu']}>
            <div className={styles['user-more']}>
              <i className="fas fa-ellipsis-h"> </i>
            </div>
            <div className={styles['user-last-time']}>
              {contact?.lastMessage?.time ? (
                new Date(contact?.lastMessage?.time)
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
Contact.prototype = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
