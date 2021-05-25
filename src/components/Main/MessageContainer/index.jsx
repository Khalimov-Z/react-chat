import React from 'react';
import styles from './message-container.module.css';
import { useSelector } from 'react-redux';
import Message from './Message';

function MessageContainer (props) {
  const messages = useSelector(state => state.messages.messages);
  const loading = useSelector((state) => state.messages.loading);

  if (loading) {
    return null;
  }

  return (
    <div>
      <div className={styles['message-container']} id={'asd'}>
        {messages.map((message) => (
          <div key={message._id}>
            <Message message={message}  />
          </div>
        ))}
      </div>
      <div className={styles['last-message']} id='footer'>
      </div>
    </div>
  );
}

export default MessageContainer;
//
// <OuterSentMessage messages={messages} />