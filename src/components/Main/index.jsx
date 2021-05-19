import React from 'react';
import styles from './main.module.css'
import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import MessageHeader from './MessageHeader';

function Main () {
  return (
    <div className={styles.main}>
      <MessageHeader />
      <MessageContainer />
      <SendMessageForm />
    </div>
  );
}

export default Main;