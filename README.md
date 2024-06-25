# Freshdesk Serverless App

This app is developed using the Freshdesk Development Kit (FDK) and is designed to listen to various events published by Freshdesk, such as `CreateTicket`, `UpdateTicket`, `CreateContact`, `UpdateContact`, etc. It sends the event data as a payload to a backend server, which can then use the data to perform various tasks.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
  - [Manifest File](#manifest-file)
  - [Installation Parameters](#installation-parameters)
  - [Server Configuration](#server-configuration)
- [Testing](#testing)
- [Usage](#usage)
- [Notes](#notes)

## Installation

To install and deploy this app on Freshdesk, follow these steps:

1. Ensure you have the Freshdesk Development Kit (FDK) installed. If not, install it using:
   ```sh
   npm install -g fdk
2. Clone this repository and navigate to the project directory.

3. Configure the manifest and server files as described in the Configuration section.

4. Validate and pack the app using FDK:
    fdk validate
    fdk pack

5. Deploy the app on Freshdesk.

## Configuration

### Manifest File
Edit the manifest.json file to configure your app's basic details and event subscriptions.

### Installation Parameters
Edit config/iparams.json to define any installation parameters needed for your app, such as your server endpoint URL.

### Server Configuration
Edit server/server.js to handle incoming events and send the payload to your backend server. Ensure the webhook URL is updated to point to your server's endpoint or is taken as input via installation parameters.

## Testing
Use the test data available in the server/test_data directory to simulate Freshdesk events and test your handlers locally.
    fdk run --mock server/test_data/onTicketCreate.json
    
## Usage
1. Configure the manifest.json file to subscribe to the desired events.
2. Update the server/server.js file to handle these events and send the data to your backend server.
3. Use the fdk validate and fdk pack commands to validate and pack your app.
4. Deploy the app on Freshdesk and ensure your backend server is ready to receive the payloads.
## Notes
1. Ensure the webhook URL in server.js is correctly set to your backend server's endpoint.
2. Use the installation parameters to make the app more flexible and configurable for different environments.
3. Refer to the Freshdesk documentation and FDK guides for more detailed instructions and advanced configurations.



### Project folder structure explained

    .
    ├── README.md                  This file.
    ├── config                     Installation parameter configs.
    │   ├── iparams.json           Installation parameter config in English language.
    │   └── iparam_test_data.json  Installation parameter data for local testing.
    └── manifest.json              Project manifest.
    └── server                     Business logic for remote request and event handlers.
        ├── lib
        │   └── handle-response.js
        ├── server.js
        └── test_data
            ├── onAppInstall.json
            ├── onAppUninstall.json
            ├── onContactCreate.json
            ├── onContactUpdate.json
            ├── onConversationCreate.json
            ├── onExternalEvent.json
            ├── onTicketCreate.json
            └── onTicketUpdate.json

