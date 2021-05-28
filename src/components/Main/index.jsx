import React, { useEffect } from 'react';
import styles from './main.module.css';
import MessageHeader from './MessageHeader';
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { receivingMessages } from '../../redux/ducks/messages';

function Main(props) {
  const profileId = useSelector((state) => state.application._id);
  const loading = useSelector((state) => state.application.loading);

  const contactId = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (contactId && !loading) {
      dispatch(receivingMessages(contactId, profileId));
    }
  }, [dispatch, contactId, loading, profileId]);

  if (!contactId) {
    return (
      <div className={styles.preloader}>
        <div>Please, select a chat to start messaging</div>
      </div>
    );
  }

  if (loading) {
    return null;
  }

  return (
    <div className={styles.main}>
      <div className={styles['inner-main']}>
        <MessageHeader
          setShowProfile={props.setShowProfile}
          showProfile={props.showProfile}
        />
        <MessageContainer />
        <SendMessageForm />
      </div>
    </div>
  );
}

export default Main;
