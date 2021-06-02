import React from 'react';
import styles from './message-header.module.css';
import SearchMessage from './SearchMessage';
import FullNameContact from './FullNameContact';
import ChatSetting from './ChatSetting';
import PropTypes from 'prop-types';

function MessageHeader({ showProfile, setShowProfile }) {
  return (
    <div className={styles['message-header']}>
      <SearchMessage />
      <FullNameContact />
      <ChatSetting showProfile={showProfile} setShowProfile={setShowProfile} />
    </div>
  );
}
MessageHeader.propTypes = {
  showProfile: PropTypes.bool,
  setShowProfile: PropTypes.func,
};

export default MessageHeader;
