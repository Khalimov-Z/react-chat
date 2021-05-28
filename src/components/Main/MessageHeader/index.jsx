import React from 'react';
import styles from './message-header.module.css';
import ChatSetting from './ChatSetting';
import FullNameContact from './FullNameContact';
import SearchMessage from './SearchMessage';

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

