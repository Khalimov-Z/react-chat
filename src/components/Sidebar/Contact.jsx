import React from 'react';
import styles from './sidebar.module.css';

function Contact() {
  return (
    <div className={styles["contact"]}>
      <div className={styles["avatarUser"]}>
        <img src="http://cdn.onlinewebfonts.com/svg/download_507357.png" alt="Avatar" className={styles["avatarName"]}/>
      </div>
      <div className={styles["name"]}>
        <div className={styles["userName"]}>Имя Фамилия</div>
        <div className={styles["user"]}>
          <div className={styles["userCheck"]}>
            <i className="fas fa-check">

            </i>
          </div>
          <div className={styles["userLastMessage"]}>
            Last message!
          </div>
        </div>
      </div>
      <div className={styles["more"]}>
        <i className="fas fa-chevron-circle-down">

        </i>
      </div>
    </div>
  );
}

export default Contact;