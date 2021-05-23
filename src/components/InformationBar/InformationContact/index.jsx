import React from 'react';
import styles from './information-contact.module.css';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
function InformationContact (props) {
  const paramsId = useParams().id;

  const userdata = useSelector((state) =>
    state.contacts.contacts.find((item) => item._id === paramsId)
  );
  return (
    <div className={styles["information-contact"]}>
      <div className={styles.avatar}>{userdata?.fullname.charAt(0)}</div>
      <div className={styles.username}>{userdata?.fullname}</div>
      <div className={styles.nickname}>@{userdata?.username}</div>
      <div className={styles.icons}>
        <span className={styles.icon}><i className="fas fa-phone-alt" /></span>
        <span className={styles.icon}><i className="fas fa-video"/></span>
        <span className={styles.icon}><i className="fas fa-envelope"/></span>
      </div>
    </div>
  );
}

export default InformationContact;