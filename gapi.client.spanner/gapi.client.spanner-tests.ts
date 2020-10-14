/* This is stub file for gapi.client.spanner definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201006

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('spanner', 'v1', () => {
        /** now we can use gapi.client.spanner */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** Administer your Spanner databases */
            'https://www.googleapis.com/auth/spanner.admin',
            /** View and manage the contents of your Spanner databases */
            'https://www.googleapis.com/auth/spanner.data',
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
    }
});
