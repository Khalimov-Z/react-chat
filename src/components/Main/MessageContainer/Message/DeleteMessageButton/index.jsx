import React, { useState } from 'react';
import styles from './delete-message-button.module.css';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../../../../redux/ducks/messages';

function DeleteMessageButton(props) {
  const [iconDelete, setIconDelete] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(deleteMessage(_id));
  };

  return (
    <div className={styles.ellipsis} onClick={() => setIconDelete(!iconDelete)}>
      {iconDelete ? (
        <button
          className={styles['btn-delete']}
          onClick={() => handleDelete(props.message._id)}
        >
          <i className="fas fa-trash" />
        </button>
      ) : (
        <div className={styles['ellipsis-btn']}>
          <i className="fas fa-ellipsis-v" />
        </div>
      )}
    </div>
  );
}

export default DeleteMessageButton;
