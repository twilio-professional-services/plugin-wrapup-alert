<a href="https://www.twilio.com">
<img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Twilio Flex Plugin - Wrap Up Time Notifications

Twilio Flex Plugins allow you to customize the appearance and behavior of [Twilio Flex](https://www.twilio.com/flex). If you want to learn more about the capabilities and how to use the API, check out our [Flex documentation](https://www.twilio.com/docs/flex).

This plugin will displays two notifications during the wrap up phase for the tasks. The first notification will alert the agent that they are approaching the recommended wrap up time. The second notification will alert the agent that they have crossed the recommended wrap up time and that they should remember to complete the task once they have wrapped up the task.


Sample demo is provided below :

The first alert will be displayed a few seconds before the wrap up time :
![Plugin Demo](https://github.com/twilio-professional-services/plugin-wrapup-alert/blob/main/resources/first_alert.gif)

The second alert will be displayed after the agent has crossed the wrap up time :
![Plugin Demo](https://github.com/twilio-professional-services/plugin-wrapup-alert/blob/main/resources/second_alert.gif)

The agent can dismiss these notifications anytime by clicking on the dismiss label:
![Plugin Demo](https://github.com/twilio-professional-services/plugin-wrapup-alert/blob/main/resources/dismiss_alert.gif)


## Requirements

To deploy this plugin, you will need:

- An active Twilio account with Flex provisioned. Refer to the [Flex Quickstart](https://www.twilio.com/docs/flex/quickstart/flex-basics#sign-up-for-or-sign-in-to-twilio-and-create-a-new-flex-project") to create one.
- npm version 5.0.0 or later installed (type `npm -v` in your terminal to check)
- Node.js [long term support(LTS) version](https://nodejs.org/en/about/releases/)(type `node -v` in your terminal to check)



## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

1. Clone this repo:

  ```bash
  https://code.hq.twilio.com/cjose/plugin-wrapup-alert.git
  ```

2. Go to the plugin directory

  ```bash
  cd plugin-wrapup-alert
  ```

3. Copy the `.env.example` to `.env` and populate the appropriate environment variables:

  ```bash
  cp .env.example .env
  ```

4. Copy the `public/appConfig.example.js` to `public/appConfig.js` :

  ```bash
  cp public/appConfig.example.js public/appConfig.js
  ```

5. Install the dependencies

  ```bash
  # Install the dependencies of the Flex Plugin
  npm install
  ```

6. Run plugin on a local environment using :

  ```bash
  # Run the plugin on your local environment
  npm start
  ```

7. Deploy your plugin using :

  ```bash
  # Deply the plugin to your actual flex environment
  npm run deploy
  ```
