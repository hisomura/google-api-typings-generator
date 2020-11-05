/* This is stub file for gapi.client.bigqueryreservation definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201031

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('bigqueryreservation', 'v1', () => {
        /** now we can use gapi.client.bigqueryreservation */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data in Google BigQuery */
            'https://www.googleapis.com/auth/bigquery',
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
        /**
         * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support
         * this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
         */
        await gapi.client.bigqueryreservation.operations.delete({
            name: "Test string",
        });
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to
         * override the binding to use different resource name schemes, such as `users/∗/operations`. To override the binding, API services can add a binding such as
         * `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must
         * ensure the name binding is the parent resource, without the operations collection id.
         */
        await gapi.client.bigqueryreservation.operations.list({
            filter: "Test string",
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
    }
});
