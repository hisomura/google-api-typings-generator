/* This is stub file for gapi.client.appsactivity definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200922

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('appsactivity', 'v1', () => {
        /** now we can use gapi.client.appsactivity */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View the activity history of your Google apps */
            'https://www.googleapis.com/auth/activity',
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
         * Returns a list of activities visible to the current logged in user. Visible activities are determined by the visibility settings of the object that was acted on, e.g. Drive files a user
         * can see. An activity is a record of past events. Multiple events may be merged if they are similar. A request is scoped to activities from a given Google service using the source
         * parameter.
         */
        await gapi.client.appsactivity.activities.list({
            "drive.ancestorId": "Test string",
            "drive.fileId": "Test string",
            groupingStrategy: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            source: "Test string",
            userId: "Test string",
        });
    }
});
