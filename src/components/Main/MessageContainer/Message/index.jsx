import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReceivedMessage from './ReceivedMessage';
import OuterSentMessage from './OuterSentMessage';

function Message(props) {
  const [iconDelete, setIconDelete] = useState(false);

  const profileId = useSelector((state) => state.application._id);

  if (profileId === props.message.toUserId) {
    return (
      <ReceivedMessage
        message={props.message}
        iconDelete={iconDelete}
        setIconDelete={setIconDelete}
      />
    );
  } else {
    return (
      <OuterSentMessage
        message={props.message}
        iconDelete={iconDelete}
        setIconDelete={setIconDelete}
      />
    );
  }
}

export default Message;
