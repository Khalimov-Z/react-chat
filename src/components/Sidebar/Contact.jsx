import React from 'react';
import styles from './sidebar.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles["avatar-user"]}>
        <img src="http://cdn.onlinewebfonts.com/svg/download_507357.png" alt="Avatar" className={styles["avatar-name"]}/>
      </div>
      <div className={styles.name}>
        <div className={styles["user-name"]}>Имя Фамилия</div>
        <div className={styles.user}>
          <div className={styles["user-check"]}>
            <i className="fas fa-check">

            </i>
          </div>
          <div className={styles["user-last-message"]}>
            Last message!
          </div>
        </div>
      </div>
      <div className={styles.more}>
        <i className="fas fa-chevron-circle-down">

        </i>
      </div>
    </div>
  );
}

export default Contact;