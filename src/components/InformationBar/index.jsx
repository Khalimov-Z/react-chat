import React from 'react';
import styles from './information-bar.module.css';
import InformationContact from './InformationContact';

function InformationBar (props) {
  return (
    <div className={styles["information-bar"]}>
      <div className={styles["inner-information-bar"]}>
        <InformationContact />
        <div className={styles["social-block"]}>
          <div className={styles.social}>Social</div>
          <div className={styles.messengers}>
              <div className={styles.instagram}>
                <i className="ico fab fa-instagram" />
                <span className={styles.user}>
                  Kuduzow
                </span>
              </div>
              <div className={styles.twitter}>
                <i className="ico fab fa-twitter" />
                <span className={styles.user}>
                  Kuduzow
                </span>
              </div>
              <div className={styles.facebook}>
                <i className="ico fab fa-facebook-f" />
                <span className={styles['user-facebook']}>
                  Kuduzow
                </span>
              </div>
          </div>
        </div>
        <div className={styles["media-block"]}>
          <div className={styles.media}>
            Media
          </div>
          <div className={styles["media-rod"]}>
            <div className={styles.file}/>
            <span className={styles.text}>wdsdsdsd </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationBar;