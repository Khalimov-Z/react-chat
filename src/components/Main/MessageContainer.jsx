import React from 'react';
import styles from './main.module.css';

function MessageContainer (props) {
  return (
    <div className={styles['message-container']}>
      <div className={styles['received-messages']}>
        <div className={styles['contact-avatar']}>
          К
        </div>
        <div className={styles['received-message']}>
          <div className={styles['received-message-text']}>
            Hi!
          </div>
          <div className={styles['message-data']}>
            12:47
          </div>
        </div>
      </div>
      <div className={styles['sent-messages']}>
        <div className={styles['sent-messages-text']}>
          Hello!
        </div>
        <div className={styles['message-data']}>
          13:09 ✔
        </div>
      </div>

    </div>
  );
}

export default MessageContainer;