import React from 'react';
import {Channel, useChatContext} from 'stream-chat-react';

import {ChannelInner, CreateChannel, EditChannel, TeamMessage} from './';

const ChannelContainer = ({isCreating, setIsCreating, setIsEditing, isEditing, createType}) => {

  const {channel} = useChatContext();

  if(isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    )
  }

  if(isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    )
  }

  return <div>Channel Container</div>;
};

export default ChannelContainer;
