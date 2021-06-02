import React from 'react';
import styles from './message-container.module.css';
import { useSelector } from 'react-redux';
import Message from './Message';
function MessageContainer() {
  const loading = useSelector((state) => state.messages.loading);
  const presetText = useSelector((state) => state.messages.searchWord);
  const messages = useSelector((state) =>
    state.messages.messages.filter(
      (message) =>
        message.content.toLowerCase().indexOf(presetText.toLowerCase()) !== -1,
    ),
  );
  if (loading) {
    return null;
  }
  return (
    <div>
      <div className={styles['message-container']} id={'asd'}>
        {messages.map((message) => (
          <div key={message._id}>
            <Message message={message} />
          </div>
        ))}
      </div>
      <div className={styles['last-message']} id="footer">
        {''}
      </div>
    </div>
  );
}
export default MessageContainer;