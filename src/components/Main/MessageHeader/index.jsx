import React from 'react';
import styles from './message-header.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MessageHeader(props) {
  //const loading = useSelector((state) => state.messages.loading);

  const paramsId = useParams().id;
  const userdata = useSelector((state) =>
    state.contacts.contacts.find((contact) => contact._id === paramsId),
  );

  return (
    <div className={styles['message-header']}>
      <div className={styles['search-chat']}>
        <form>
          <i className="fas fa-search">{''}</i>
          <input
            className={styles['search-message']}
            type="text"
            placeholder="Search message"
          />
        </form>
      </div>
      <div className={styles['contact-title']}>
        {userdata?.fullname}
        {userdata?.online && <div className={styles.online}> </div>}
      </div>
      <div className={styles['chat-settings']}>
        <button className={styles['settings-btn']}>
          <i className="fas fa-cog">{''}</i>
        </button>
      </div>
    </div>
  );
}

export default MessageHeader;
