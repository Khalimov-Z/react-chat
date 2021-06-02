import React from 'react';
import styles from './outer-sent-message.module.css';
import DeleteMessageButton from '../DeleteMessageButton';
import PropTypes from 'prop-types';

function OuterSentMessage({ message, iconDelete, setIconDelete }) {
  return (
    <div className={styles['outer-sent-messages']}>
      <div
        className={styles['sent-messages']}
        onClick={() => setIconDelete(!iconDelete)}
      >
        <div className={styles['sent-messages-text']}>{message.content}</div>
        <div className={styles['message-data']}>
          <span className={styles.data}>
            {new Date(message.time).toLocaleTimeString().slice(0, -3)}
          </span>
          {message.sending ? (
            <i className="far fa-clock"> </i>
          ) : (
            <i className="fas fa-check"> </i>
          )}
          <DeleteMessageButton message={message} iconDelete={iconDelete} />
        </div>
      </div>
    </div>
  );
}

OuterSentMessage.propTypes = {
  message: PropTypes.object,
  iconDelete: PropTypes.bool,
  setIconDelete: PropTypes.func,
};

export default OuterSentMessage;
