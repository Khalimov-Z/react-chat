import React from 'react';
import styles from './chat-setting.module.css';

function ChatSetting(props) {
  return (
    <button
      className={styles['chat-settings']}
      onClick={() => props.setShowProfile(!props.showProfile)}
    >
      <i className="fas fa-cog" />
    </div>
    </button>
  );
}

export default ChatSetting;
