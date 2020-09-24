/* This is stub file for gapi.client.testing definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200918

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('testing', 'v1', () => {
        /** now we can use gapi.client.testing */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform.read-only',
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
        /** Gets the details of an Android application APK. */
        await gapi.client.testing.applicationDetailService.getApkDetails({
        }, {
            gcsPath: "Test string",
        });
        /**
         * Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment
         * type does not exist - INTERNAL - if an internal error occurred
         */
        await gapi.client.testing.testEnvironmentCatalog.get({
            environmentType: "Test string",
            projectId: "Test string",
        });
    }
});
