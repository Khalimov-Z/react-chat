import React from 'react';
import styles from './send-message-form.module.css'
import MessageButtons from './MessageButtons';

function SendMessageForm (props) {
  return (
    <div className={styles['message-form']}>
      <div className={styles['inner-message-form']}>
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
    </div>
  );
}

export default SendMessageForm;