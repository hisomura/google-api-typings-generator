/* This is stub file for gapi.client.adexchangebuyer2 definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201125

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('adexchangebuyer2', 'v2beta1', () => {
        /** now we can use gapi.client.adexchangebuyer2 */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage your Ad Exchange buyer account configuration */
            'https://www.googleapis.com/auth/adexchange.buyer',
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
