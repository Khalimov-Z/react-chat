import React from 'react';
import styles from './chat-setting.module.css';
import PropTypes from 'prop-types';

function ChatSetting({ showProfile, setShowProfile }) {
  return (
    <button
      className={styles['chat-settings']}
      onClick={() => setShowProfile(!showProfile)}
    >
      <i className="fas fa-cog" />
    </button>
  );
}

ChatSetting.propTypes = {
  showProfile: PropTypes.bool,
  setShowProfile: PropTypes.func,
};

export default ChatSetting;