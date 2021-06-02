import React from 'react';
import styles from './information-bar.module.css';
import InformationContact from './InformationContact';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SocialContact from './SocialContact';
import MediaContact from './MediaContact';

function InformationBar() {
  const paramsId = useParams().id;

  const userdata = useSelector((state) =>
    state.contacts.contacts.find((item) => item._id === paramsId),
  );

  return (
    <div className={styles['information-bar']}>
      <div className={styles.animate}>
        <div className={styles['inner-information-bar']}>
          <InformationContact />
          <div className={styles['social-block']}>
            <div className={styles.social}>Social</div>
            <div className={styles.messengers}>
              {userdata?.socials?.instagram && (
                <div className={styles.instagram}>
                  <i className="ico fab fa-instagram" />
                  <span className={styles.user}>
                    {userdata.socials.instagram}
                  </span>
                </div>
              )}
              {userdata?.socials?.twitter && (
                <div className={styles.twitter}>
                  <i className="ico fab fa-twitter" />
                  <span className={styles.user}>
                    {userdata.socials.twitter}
                  </span>
                </div>
              )}
              {userdata?.socials?.facebook && (
                <div className={styles.facebook}>
                  <i className="ico fab fa-facebook-f" />
                  <span className={styles['user-facebook']}>
                    {userdata.socials.facebook}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className={styles['media-block']}>
            <div className={styles.media}>Media</div>
            <div className={styles['media-rod']}>
              <div className={styles.file} />
              <span className={styles.text}>{'filename.pdf'}</span>
            </div>
          </div>
          <InformationContact
            userName={userdata?.username}
            fullName={userdata?.fullname}
          />
          <SocialContact socials={userdata?.socials} />
          <MediaContact file={"filename.pdf"} />
        </div>
      </div>
    </div>
  );
}

export default InformationBar;
