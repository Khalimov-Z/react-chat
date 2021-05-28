import React from 'react';
import styles from './message-header.module.css';
import SearchMessage from './SearchMessage';
import FullNameContact from './FullNameContact';
import ChatSetting from './ChatSetting';

function MessageHeader(props) {
  return (
    <div className={styles['message-header']}>
      <SearchMessage />
      <FullNameContact />
      <ChatSetting
        setShowProfile={props.setShowProfile}
        showProfile={props.showProfile}
      />
    </div>
  );
}

export default MessageHeader;
