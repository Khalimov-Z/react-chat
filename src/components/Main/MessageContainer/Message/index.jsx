import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReceivedMessage from './ReceivedMessage';
import OuterSentMessage from './OuterSentMessage';
import PropTypes from 'prop-types';

function Message({ message }) {
  const [iconDelete, setIconDelete] = useState(false);

  const profileId = useSelector((state) => state.application._id);

  if (profileId === message.toUserId) {
    return (
      <ReceivedMessage
        message={message}
        iconDelete={iconDelete}
        setIconDelete={setIconDelete}
      />
    );
  } else {
    return (
      <OuterSentMessage
        message={message}
        iconDelete={iconDelete}
        setIconDelete={setIconDelete}
      />
    );
  }
}
Message.propTypes = {
  message: PropTypes.object,
};

export default Message;
