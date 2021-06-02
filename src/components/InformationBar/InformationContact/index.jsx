import React from 'react';
import styles from './information-contact.module.css';
import PropTypes from "prop-types";

function InformationContact({userName,fullName}) {
  return (
    <div className={styles['information-contact']}>
      <div className={styles.avatar}>{fullName.charAt(0)}</div>
      <div className={styles.username}>{fullName}</div>
      <div className={styles.nickname}>@{userName}</div>
      <div className={styles.icons}>
        <span className={styles.icon}>
          <i className="fas fa-phone-alt" />
        </span>
        <span className={styles.icon}>
          <i className="fas fa-video" />
        </span>
        <span className={styles.icon}>
          <i className="fas fa-envelope" />
        </span>
      </div>
    </div>
  );
}
InformationContact.propTypes = {
  userName: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
};

export default InformationContact;
