import React from 'react';
import styles from './media-contact.module.css';
import PropTypes from 'prop-types';

function MediaContact ({file}) {
  return (
    <div className={styles['media-block']}>
      <div className={styles.media}>Media</div>
      <div className={styles['media-rod']}>
        <div className={styles.file} />
        <span className={styles.text}>{file}</span>
      </div>
    </div>
  );
}
MediaContact.propTypes = {
  file:PropTypes.string.isRequired
};

MediaContact.defaultProps = {
  file: "fileName",
};
export default MediaContact;