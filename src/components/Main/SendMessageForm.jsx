import React from 'react';
import styles from './main.module.css';
import MessageButtons from './MessageButtons';

function SendMessageForm (props) {
  return (
    <div className={styles['message-form']}>
      <form>
        <input
          className={styles['message-text']}
          type="text"
          value="Write a message"
          placeholder="Write a message"
        />
      </form>
      <MessageButtons />
    </div>
  );
}

export default SendMessageForm;