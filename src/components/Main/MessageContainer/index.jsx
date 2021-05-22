import React from 'react';
import styles from './message-container.module.css';
import ReceivedMessages from './ReceivedMessages';
import OuterSentMessages from './OuterSentMessages';

function MessageContainer (props) {
  return (
    <div className={styles['message-container']}>
      <ReceivedMessages />
      <OuterSentMessages />
    </div>
  );
}

export default MessageContainer;