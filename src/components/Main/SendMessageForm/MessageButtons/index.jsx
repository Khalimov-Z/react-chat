import React from 'react';
import styles from './message-buttons.module.css';
import PropTypes from 'prop-types';

function MessageButtons({ newMessage, handleAddMessage }) {
  return (
    <div className={styles['message-buttons']}>
      <div className={styles['investments']}>
        <i className="fas fa-paperclip">{''}</i>
      </div>
      <div>
        {newMessage === '' ? (
          <div className={styles.voice}>
            <i className="fas fa-microphone" />
          </div>
        ) : (
          <div className={styles['send-message']}>
            <button className={styles['btn-add']} onClick={handleAddMessage}>
              <i className="fas fa-paper-plane" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
MessageButtons.propTypes = {
  newMessage: PropTypes.string,
  handleAddMessage: PropTypes.func,
};

export default MessageButtons;
