import React from 'react';
import styles from './message-buttons.module.css';

function MessageButtons(props) {
  return (
    <div className={styles['message-buttons']}>
      <div className={styles['investments']}>
        <i className="fas fa-paperclip">{''}</i>
      </div>
      <div>
        {(
          <div className={styles.voice}>
            <i className="fas fa-microphone" />
          </div>
        ) && (
          <div className={styles['send-message']}>
            <button onClick={props.handleAddMessage}>
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageButtons;
