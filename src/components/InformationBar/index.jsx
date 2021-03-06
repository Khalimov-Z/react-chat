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
      <InformationContact
        userName={userdata?.username}
        fullName={userdata?.fullname}
      />
      <SocialContact socials={userdata?.socials} />
      <MediaContact file={'filename.pdf'} />
    </div>
  );
}

export default InformationBar;
