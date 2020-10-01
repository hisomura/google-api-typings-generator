/* This is stub file for gapi.client.driveactivity definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200930

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('driveactivity', 'v2', () => {
        /** now we can use gapi.client.driveactivity */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and add to the activity record of files in your Google Drive */
            'https://www.googleapis.com/auth/drive.activity',
            /** View the activity record of files in your Google Drive */
            'https://www.googleapis.com/auth/drive.activity.readonly',
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
        /** Query past activity in Google Drive. */
        await gapi.client.driveactivity.activity.query({
        }, {
            ancestorName: "Test string",
            consolidationStrategy: {
                legacy: {
                },
                none: {
                },
            },
            filter: "Test string",
            itemName: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
    }
});
