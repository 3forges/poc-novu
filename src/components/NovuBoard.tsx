import React, { useState } from 'preact/compat';
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
  IMessage,
  ColorScheme,
} from '@novu/notification-center';
import { ArmchairIcon } from 'lucide-preact';

// const NOVU_SUBSCRIBER_ID='123Ronsard'
const NOVU_SUBSCRIBER_ID='65326329cd3dcc4242e43fb7'
const NOVU_APPLICATION_IDENTIFIER='5EC39fkNtEnJ'

function NovuBoard() {
  const [description, setDescription] = useState<string>('');
  function onNotificationClick(message: IMessage) {
    // your logic to handle the notification click
    console.log(`>>>>>>> MESSAGE ON CLICK: `, message.content)
    setDescription(message.content.toString())
    /*
    if (message?.cta?.data?.url) {
window.location.href = message.cta.data.url;
    }
    */
  }

  return (
    <>
      {//<ArmchairIcon />
      //subscriberId={`${NOVU_SUBSCRIBER_ID}`}
      }
      <NovuProvider
        subscriberId={`${NOVU_SUBSCRIBER_ID}`}
        applicationIdentifier={`${NOVU_APPLICATION_IDENTIFIER}`}
        initialFetchingStrategy={{
          fetchNotifications: true,
          fetchUserPreferences: true,
        }}
      >
        <PopoverNotificationCenter
          colorScheme='dark'
          onNotificationClick={onNotificationClick}
          listItem={(notification) => <div>{`${notification?.payload?.description}`}</div>}
        >
          {({ unseenCount, colorScheme, unseenBadgeColor, unseenBadgeBackgroundColor }) => <NotificationBell unseenBadgeColor={unseenBadgeColor} unseenBadgeBackgroundColor={unseenBadgeBackgroundColor} colorScheme={colorScheme} unseenCount={unseenCount} />}
        </PopoverNotificationCenter>
      </NovuProvider>
    </>
  );
}

export default NovuBoard;

