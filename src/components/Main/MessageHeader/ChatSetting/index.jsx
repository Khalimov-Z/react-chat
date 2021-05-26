import React from 'react';
import styles from './chat-setting.module.css';
function ChatSetting (props) {
  return (
    <div>
      <div className={styles['chat-settings']} onClick={() => props.setIsShow(!props.isShow)}>
        <i className="fas fa-cog">{''}</i>
      </div>
    </div>
  );
}

export default ChatSetting;