/* This is stub file for gapi.client.homegraph definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201016

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('homegraph', 'v1', () => {
        /** now we can use gapi.client.homegraph */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** New Service: https://www.googleapis.com/auth/homegraph */
            'https://www.googleapis.com/auth/homegraph',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /**
         * Unlinks the given third-party user from your smart home Action. All data related to this user will be deleted. For more details on how users link their accounts, see [fulfillment and
         * authentication](https://developers.google.com/assistant/smarthome/concepts/fulfillment-authentication). The third-party user's identity is passed in via the `agent_user_id` (see
         * DeleteAgentUserRequest). This request must be authorized using service account credentials from your Actions console project.
         */
        await gapi.client.homegraph.agentUsers.delete({
            agentUserId: "Test string",
            requestId: "Test string",
        });
        /**
         * Gets the current states in Home Graph for the given set of the third-party user's devices. The third-party user's identity is passed in via the `agent_user_id` (see QueryRequest). This
         * request must be authorized using service account credentials from your Actions console project.
         */
        await gapi.client.homegraph.devices.query({
        }, {
            agentUserId: "Test string",
            inputs: [
                {
                    payload: {
                        devices: [
                            {
                                id: "Test string",
                            }                        ],
                    },
                }            ],
            requestId: "Test string",
        });
        /**
         * Reports device state and optionally sends device notifications. Called by your smart home Action when the state of a third-party device changes or you need to send a notification about
         * the device. See [Implement Report State](https://developers.google.com/assistant/smarthome/develop/report-state) for more information. This method updates the device state according to
         * its declared [traits](https://developers.google.com/assistant/smarthome/concepts/devices-traits). Publishing a new state value outside of these traits will result in an
         * `INVALID_ARGUMENT` error response. The third-party user's identity is passed in via the `agent_user_id` (see ReportStateAndNotificationRequest). This request must be authorized using
         * service account credentials from your Actions console project.
         */
        await gapi.client.homegraph.devices.reportStateAndNotification({
        }, {
            agentUserId: "Test string",
            eventId: "Test string",
            followUpToken: "Test string",
            payload: {
                devices: {
                    notifications: {
                        A: 42                    },
                    states: {
                        A: 42                    },
                },
            },
            requestId: "Test string",
        });
        /**
         * Requests Google to send an `action.devices.SYNC` [intent](https://developers.google.com/assistant/smarthome/reference/intent/sync) to your smart home Action to update device metadata
         * for the given user. The third-party user's identity is passed via the `agent_user_id` (see RequestSyncDevicesRequest). This request must be authorized using service account credentials
         * from your Actions console project.
         */
        await gapi.client.homegraph.devices.requestSync({
        }, {
            agentUserId: "Test string",
            async: true,
        });
        /**
         * Gets all the devices associated with the given third-party user. The third-party user's identity is passed in via the `agent_user_id` (see SyncRequest). This request must be authorized
         * using service account credentials from your Actions console project.
         */
        await gapi.client.homegraph.devices.sync({
        }, {
            agentUserId: "Test string",
            requestId: "Test string",
        });
    }
});
