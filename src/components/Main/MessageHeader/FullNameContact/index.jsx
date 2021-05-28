import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './fullname-contact.module.css';

function FullNameContact (props) {
  //const loading = useSelector((state) => state.messages.loading);

  const paramsId = useParams().id;
  const userdata = useSelector((state) =>
    state.contacts.contacts.find((contact) => contact._id === paramsId),
  );

  return (
    <div>
     <div className={styles['contact-title']}>
              {userdata?.fullname}
              {userdata?.online && <div className={styles.online}> </div>}
           </div>
    </div>
  );
}

export default FullNameContact;