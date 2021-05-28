import React from 'react';
import { useSelector } from 'react-redux';
import ReceivedMessage from './ReceivedMessage';
import OuterSentMessage from './OuterSentMessage';

function Message(props) {
  const profileId = useSelector((state) => state.application._id);

  if (profileId === props.message.toUserId) {
    return <ReceivedMessage message={props.message} />;
  } else {
    return <OuterSentMessage message={props.message} />;
  }
}

export default Message;
