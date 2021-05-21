import React from 'react';
import styles from './main.module.css'
import MessageHeader from './MessageHeader';
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';


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