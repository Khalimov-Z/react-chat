import React from 'react';
import styles from './social-contact.module.css';
import PropTypes from 'prop-types';

function SocialContact ({socials}) {
  return (
    <div className={styles['social-block']}>
      <div className={styles.social}>Social</div>
      <div className={styles.messengers}>
        {socials?.instagram && (
          <div className={styles.instagram}>
            <i className="ico fab fa-instagram" />
            <span className={styles.user}>
                  {socials.instagram}
                </span>
          </div>
        )}
        {socials?.twitter && (
          <div className={styles.twitter}>
            <i className="ico fab fa-twitter" />
            <span className={styles.user}>{socials.twitter}</span>
          </div>
        )}
        {socials?.facebook && (
          <div className={styles.facebook}>
            <i className="ico fab fa-facebook-f" />
            <span className={styles['user-facebook']}>
                  {socials.facebook}
                </span>
          </div>
        )}
      </div>
    </div>
  );
}
SocialContact.propTypes = {
  socials: PropTypes.object
}

export default SocialContact;