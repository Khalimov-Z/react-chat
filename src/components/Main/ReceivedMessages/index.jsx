import React from 'react';
import styles from './received-messages.module.css';

function ReceivedMessages (props) {
  return (
    <div className={styles['received-messages']}>
      <div className={styles['contact-avatar']}>К</div>
      <div className={styles['received-message']}>
        <div className={styles['received-message-text']}>
          Hi!
          werwerewrwer
          werwerew
          <br/>
          vjgvjhjvjhjhvjhvjhvjhvjhv
        </div>
        <div className={styles['message-data']}>
          12:47
        </div>
      </div>
    </div>
  );
}

export default ReceivedMessages;