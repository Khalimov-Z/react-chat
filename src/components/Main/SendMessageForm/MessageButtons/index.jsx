import React from 'react';
import styles from './message-buttons.module.css';
import ScrollIntoView from 'react-scroll-into-view';

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
          <ScrollIntoView selector="#footer" >
            <div className={styles['send-message']} id={'scroll'}>
              <button onClick={props.handleAddMessage}>
                <i className="fas fa-paper-plane" />
              </button>
            </div>
          </ScrollIntoView>
        )}
      </div>
    </div>
  );
}

export default MessageButtons;