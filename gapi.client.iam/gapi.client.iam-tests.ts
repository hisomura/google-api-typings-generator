/* This is stub file for gapi.client.iam definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200910

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('iam', 'v1', () => {
        /** now we can use gapi.client.iam */

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
        /**
         * Lints, or validates, an IAM policy. Currently checks the google.iam.v1.Binding.condition field, which contains a condition expression for a role binding. Successful calls to this method
         * always return an HTTP `200 OK` status code, even if the linter detects an issue in the IAM policy.
         */
        await gapi.client.iam.iamPolicies.lintPolicy({
        }, {
            condition: {
                description: "Test string",
                expression: "Test string",
                location: "Test string",
                title: "Test string",
            },
            fullResourceName: "Test string",
        });
        /**
         * Returns a list of services that allow you to opt into audit logs that are not generated by default. To learn more about audit logs, see the [Logging
         * documentation](https://cloud.google.com/logging/docs/audit).
         */
        await gapi.client.iam.iamPolicies.queryAuditableServices({
        }, {
            fullResourceName: "Test string",
        });
        /** Lists every permission that you can test on a resource. A permission is testable if you can check whether a member has that permission on the resource. */
        await gapi.client.iam.permissions.queryTestablePermissions({
        }, {
            fullResourceName: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Gets the definition of a Role. */
        await gapi.client.iam.roles.get({
            name: "Test string",
        });
        /** Lists every predefined Role that IAM supports, or every custom role that is defined for an organization or project. */
        await gapi.client.iam.roles.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            showDeleted: true,
            view: "Test string",
        });
        /** Lists roles that can be granted on a Google Cloud resource. A role is grantable if the IAM policy for the resource can contain bindings to the role. */
        await gapi.client.iam.roles.queryGrantableRoles({
        }, {
            fullResourceName: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            view: "Test string",
        });
    }
});
