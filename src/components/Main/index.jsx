import React from 'react';
import styles from './main.module.css'
import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import MessageHeader from './MessageHeader';

function Main () {
  return (
    <div className={styles.main}>
      <div className={styles['inner-main']}>
        <MessageHeader />
        <MessageContainer />
        <SendMessageForm />
      </div>
    </div>
  );
}

export default Main;