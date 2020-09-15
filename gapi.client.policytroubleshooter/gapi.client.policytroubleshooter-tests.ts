/* This is stub file for gapi.client.policytroubleshooter definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200912

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('policytroubleshooter', 'v1', () => {
        /** now we can use gapi.client.policytroubleshooter */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
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
        /** Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission. */
        await gapi.client.policytroubleshooter.iam.troubleshoot({
        }, {
            accessTuple: {
                fullResourceName: "Test string",
                permission: "Test string",
                principal: "Test string",
            },
        });
    }
});
