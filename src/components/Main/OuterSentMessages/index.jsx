import React from 'react';
import styles from './outer-sent-messages.module.css';

function OuterSentMessages (props) {
  return (
    <div className={styles['outer-sent-messages']}>
      <div className={styles['sent-messages']}>
        <div className={styles['sent-messages-text']}>
          Hi, I'm doing great, my day was also great.
          <br/>
          I wonder what happened to you???🤨
        </div>
        <div className={styles['message-data']}>
          <span className={styles.data}>13:09</span>
          <i className="fas fa-check"> </i>
        </div>
      </div>
    </div>
  );
}

export default OuterSentMessages;