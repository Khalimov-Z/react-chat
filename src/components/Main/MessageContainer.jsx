import React from 'react';
import styles from './main.module.css';
import OuterSentMessages from './OuterSentMessages';
import ReceivedMessages from './ReceivedMessages';

function MessageContainer (props) {
  return (
    <div className={styles['message-container']}>
      <ReceivedMessages />
      <OuterSentMessages />
    </div>
  );
}

export default MessageContainer;