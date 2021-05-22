import React from 'react';
import styles from './received-messages.module.css';

function ReceivedMessages (props) {
  return (
    <div className={styles['received-messages']}>
      <div className={styles['contact-avatar']}>К</div>
      <div className={styles['received-message']}>
        <div className={styles['received-message-text']}>
          Hi, how are you, how was your day?
          <br/>
          Today it was I will tell you you will not believe it!😳🤯
        </div>
        <div className={styles['message-data']}>
          12:47
        </div>
      </div>
    </div>
  );
}

export default ReceivedMessages;