import React from 'react';
import styles from './outer-sent-message.module.css';
import DeleteMessageButton from '../DeleteMessageButton';

function OuterSentMessage(props) {
  return (
    <div className={styles['outer-sent-messages']}>
      <div
        className={styles['sent-messages']}
        onClick={() => props.setIconDelete(!props.iconDelete)}
      >
        <div className={styles['sent-messages-text']}>
          {props.message.content}
        </div>
        <div className={styles['message-data']}>
          <span className={styles.data}>
            {new Date(props.message.time).toLocaleTimeString().slice(0, -3)}
          </span>
          {props.message.sending ? (
            <i className="far fa-clock"> </i>
          ) : (
            <i className="fas fa-check"> </i>
          )}
          <DeleteMessageButton
            message={props.message}
            iconDelete={props.iconDelete}
            setIconDelete={props.setIconDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default OuterSentMessage;
