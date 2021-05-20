import React from 'react';
import styles from './main.module.css';

function MessageContainer (props) {
  return (
    <div className={styles['message-container']}>
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
      <div className={styles['sent-messages']}>
        <div className={styles['sent-messages-text']}>
          Hello!
          ffjhjhhjhgjhghgqwerewrwerwer
          werwerewrwer
          werwerew
          <br/>
          vjgvjhjvjhjhvjhvjhvjhvjhviih
        </div>
        <div className={styles['message-data']}>
          <span className={styles.data}>13:09</span>
          <i className="fas fa-check"> </i>
        </div>
      </div>
    </div>
  );
}

export default MessageContainer;