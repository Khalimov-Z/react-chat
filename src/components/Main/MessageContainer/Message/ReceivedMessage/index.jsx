import React from 'react';
import styles from './received-message.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeleteMessageButton from '../DeleteMessageButton';
import PropTypes from 'prop-types';

function ReceivedMessage({ message, iconDelete, setIconDelete }) {
  const paramsId = useParams().id;

  const userdata = useSelector((state) =>
    state.contacts.contacts.find((contact) => contact._id === paramsId),
  );

  return (
    <div className={styles['received-messages']}>
      <div className={styles['contact-avatar']}>
        {userdata?.fullname.charAt(0)}
      </div>
      <div
        className={styles['received-message']}
        onClick={() => setIconDelete(!iconDelete)}
      >
        <div className={styles['received-message-text']}>{message.content}</div>
        <div className={styles['message-data']}>
          <div>{new Date(message.time).toLocaleTimeString().slice(0, -3)}</div>
          <DeleteMessageButton message={message} iconDelete={iconDelete} />
        </div>
      </div>
    </div>
  );
}
ReceivedMessage.propTypes = {
  message: PropTypes.object,
  iconDelete: PropTypes.bool,
  setIconDelete: PropTypes.func,
};

export default ReceivedMessage;
