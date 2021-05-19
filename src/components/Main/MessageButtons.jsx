import React from 'react';
import styles from './main.module.css';

function MessageButtons (props) {
  return (
    <div className={styles['message-buttons']}>
      <div className={styles['investments']}>
        <i className="fas fa-paperclip">{''}</i>
      </div>
      <div className={styles.voice}>
        <i className="fas fa-microphone">{''}</i>
      </div>
      <div className={styles['send-message']}>
        <i className="fas fa-paper-plane">{''}</i>
      </div>
    </div>
  );
}

export default MessageButtons;