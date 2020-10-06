/* This is stub file for gapi.client.genomics definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201005

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('genomics', 'v1', () => {
        /** now we can use gapi.client.genomics */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View and manage Genomics data */
            'https://www.googleapis.com/auth/genomics',
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
         * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. Clients may use
         * Operations.GetOperation or Operations.ListOperations to check whether the cancellation succeeded or the operation completed despite cancellation. Authorization requires the following
         * [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.cancel`
         */
        await gapi.client.genomics.operations.cancel({
            name: "Test string",
        }, {
        });
        /**
         * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. Authorization requires the
         * following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.get`
         */
        await gapi.client.genomics.operations.get({
            name: "Test string",
        });
        /** Lists operations that match the specified filter in the request. Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission: * `genomics.operations.list` */
        await gapi.client.genomics.operations.list({
            filter: "Test string",
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
    }
});
