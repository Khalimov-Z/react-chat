import React, { useEffect } from 'react';
import styles from './outer-sent-messages.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { receivingMessages } from '../../../redux/ducks/messages';

function OuterSentMessages () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(receivingMessages());
  }, [dispatch])

  const messages = useSelector(state => state.messages.items);

  return (
    <div className={styles['outer-sent-messages']}>
      {messages.map((item) => {
        return(
          <div className={styles['sent-messages']}>
            <div className={styles['sent-messages-text']}>
              {item.content}
            </div>
            <div className={styles['message-data']}>
              <span className={styles.data}>{item.time}</span>
              <i className="fas fa-check"> </i>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default OuterSentMessages;