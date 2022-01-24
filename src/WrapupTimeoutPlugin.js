import React from 'react';
import { FlexPlugin } from 'flex-plugin';
import { Icon } from '@twilio/flex-ui';
import { Actions, Notifications, NotificationType, NotificationBar, Tab, TaskHelper } from "@twilio/flex-ui";

// import the relevant components
import ApproachingWrapUpWarning from './components/ApproachingWrapUpWarning';
import WrapUpTimeOverWarning from './components/WrapUpTimeOverWarning';

const PLUGIN_NAME = 'WrapupTimeoutPlugin';

export default class WrapupTimeoutPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    // Registering first notification
    Notifications.registerNotification({
      id: "approachingWrapUpTimeWarning",       // Assign an id for the first notification
      content: <ApproachingWrapUpWarning />,    // Passing the component as content
      type: NotificationType.info,              // Specifying the type of notification
      actions: [                                // You can dismiss this notification by clicking on the Dismiss label
        <NotificationBar.Action
            onClick={(_, notification) => {
              Notifications.dismissNotificationById("approachingWrapUpTimeWarning");
            }}
            label="Dismiss"
        />
      ]
    });

    // Registering second notification
      Notifications.registerNotification({
      id: "crossedWrapUpTimeWarning",                                 // Assign an id for the second notification
      content: <WrapUpTimeOverWarning />,                             // Passing the component as content
      type: NotificationType.info,                                    // Specifying the type of notification
      icon: "Alert",                                                  // Adding an alert sign to this notification
      backgroundColor: "LightCoral",                                  // backgroundColor for the notification
      actions: [                                                      // You can dismiss this notification by clicking on the Dismiss label
        <NotificationBar.Action
            onClick={(_, notification) => {
              Notifications.dismissNotification(notification);
            }}
            label="Dismiss"
        />
      ]                                                                                   // The secondNotification should dismiss the first notification
    });

    // Execute the code below when a reservation is created
    manager.workerClient.on('reservationCreated', reservation => {

      // Check if there is a reservation and if the reservation is found then assign the value of the reservation to a variable ,
      // If the reservation is not found then find and assign the reservation source
      const trueReservation = reservation.addListener
        ? reservation
        : reservation.source;

      let firstNotification;
      let secondNotification;

      // Adding a listener for the wrap up event so that the notifications appear during the wrap up time
      trueReservation.addListener('wrapup', payload => {


      //call or execute the firstNotification using setTimeout after the specified time in the variable REACT_APP_FIRST_TIMEOUT
      firstNotification = setTimeout(() => {

          //Display the first notification
          Notifications.showNotification("approachingWrapUpTimeWarning");

        }, parseInt(process.env.REACT_APP_FIRST_TIMEOUT));

       //call or execute the secondNotification setTimeout after the specified time in the variable REACT_APP_TIMEOUT
        secondNotification = setTimeout(() => {

          //Display the second notification

          Notifications.showNotification("crossedWrapUpTimeWarning");

        }, parseInt(process.env.REACT_APP_TIMEOUT));

      });

      // Adding a listener for the completed event so that if the call is completed before the recommended wrap up times the notifications do not appear.
      trueReservation.addListener('completed', payload => {

        // Using clearTimeout to cancel the notifications if the call is completed
        clearTimeout(firstNotification);
        clearTimeout(secondNotification);

      });

    });

  }
}
