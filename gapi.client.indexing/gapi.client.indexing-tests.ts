/* This is stub file for gapi.client.indexing definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201103

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('indexing', 'v3', () => {
        /** now we can use gapi.client.indexing */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Submit data to Google for indexing */
            'https://www.googleapis.com/auth/indexing',
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
         * Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest
         * `UrlNotification` received via this API.
         */
        await gapi.client.indexing.urlNotifications.getMetadata({
            url: "Test string",
        });
        /** Notifies that a URL has been updated or deleted. */
        await gapi.client.indexing.urlNotifications.publish({
        }, {
            notifyTime: "Test string",
            type: "Test string",
            url: "Test string",
        });
    }
});
