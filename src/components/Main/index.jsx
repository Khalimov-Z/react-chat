import React from 'react';
import styles from './main.module.css'
import MessageForm from './MessageForm';
import MessageContainer from './MessageContainer';

function Main () {
  return (
    <div className={styles.main}>
      <div className={styles['main-contact']}>
        <div className={styles['search-chat']}>
          <i className="fas fa-search">{''}</i>
        </div>
        <div className={styles['contact-title']}>
          Кудузов Ахмад
        </div>
        <div className={styles['chat-settings']}>
          <i className="fas fa-cog">{''}</i>
        </div>
      </div>
      <MessageContainer />
      <MessageForm />
    </div>
  );
}

export default Main;