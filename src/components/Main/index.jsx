import React from 'react';
import styles from './main.module.css'

function Main () {
  return (
    <div className={styles.main}>
      <div className={styles['main-contact']}>
        <div className={styles['search-chat']}>
          <i className="fas fa-search">{''}</i>
        </div>
        <div className={styles['contact-title']}>
          Intocode
        </div>
        <div className={styles['chat-settings']}>
          <i className="fas fa-cog">{''}</i>
        </div>
      </div>
      <div className={styles['messages-block']}>
        <div className={styles['received-messages']}>
          <div className={styles['contact-avatar']}>
            I
          </div>
          <div className={styles['received-message']}>
            <div className={styles['received-message-text']}>
              Hi!
            </div>
            <div className={styles['message-data']}>
              12:47
            </div>
          </div>
        </div>
        <div className={styles['sent-messages']}>
          <div className={styles['sent-messages-text']}>
            Hello!
          </div>
          <div className={styles['message-data']}>
            13:09 ✔
          </div>
        </div>
      </div>
      <div className={styles['message-form']}>
        <div className={styles['message-text']}>
          Write a message
        </div>
        <div className={styles['message-buttons']}>
          <div className={styles['investments']}>
            <i className="fas fa-paperclip">{''}</i>
          </div>
          <div className={styles.voice}>
            <i className="fas fa-microphone">{''}</i>
          </div>
          <div className={styles['send-message']}>
            <i className="fas fa-paper-plane">{''}</i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;