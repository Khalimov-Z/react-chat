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
      <ChatSetting setIsShow={props.setIsShow} isShow={props.isShow}/>
    </div>
  );
}

export default MessageHeader;

