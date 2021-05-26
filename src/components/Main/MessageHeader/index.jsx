import { useState } from 'react';
import styles from './message-header.module.css';
import SearchMessage from './SearchMessage';
import FullnameContact from './FullnameContact';
import ChatSetting from './ChatSetting';

function MessageHeader(props) {

  return (
    <div className={styles['message-header']}>
      <SearchMessage />
      <FullnameContact />
      <ChatSetting />
    </div>
  );
}

export default MessageHeader;

