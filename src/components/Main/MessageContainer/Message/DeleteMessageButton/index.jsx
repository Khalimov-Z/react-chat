import React from 'react';
import styles from './delete-message-button.module.css';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../../../../redux/ducks/messages';
import PropTypes from 'prop-types';

function DeleteMessageButton({ iconDelete, message }) {
  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(deleteMessage(_id));
  };

  return (
    <div className={styles.ellipsis}>
      {iconDelete ? (
        <button
          className={styles['btn-delete']}
          onClick={() => handleDelete(message._id)}
        >
          <i className="fas fa-trash"> Delete </i>
        </button>
      ) : (
        <div className={styles['ellipsis-btn']}>
          <i className="fas fa-ellipsis-v" />
        </div>
      )}
    </div>
  );
}
DeleteMessageButton.propTypes = {
  message: PropTypes.object,
  iconDelete: PropTypes.bool,
};

export default DeleteMessageButton;
