/* This is stub file for gapi.client.cloudbilling definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200821

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('cloudbilling', 'v1', () => {
        /** now we can use gapi.client.cloudbilling */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your Google Cloud Platform billing accounts */
            'https://www.googleapis.com/auth/cloud-billing',
            /** View your Google Cloud Platform billing accounts */
            'https://www.googleapis.com/auth/cloud-billing.readonly',
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
         * Creates a billing account. This method can only be used to create [billing subaccounts](https://cloud.google.com/billing/docs/concepts) by Google Cloud resellers. When creating a
         * subaccount, the current authenticated user must have the `billing.accounts.update` IAM permission on the master account, which is typically given to billing account
         * [administrators](https://cloud.google.com/billing/docs/how-to/billing-access). This method will return an error if the master account has not been provisioned as a reseller account.
         */
        await gapi.client.cloudbilling.billingAccounts.create({
        }, {
            displayName: "Test string",
            masterBillingAccount: "Test string",
            name: "Test string",
            open: true,
        });
        /**
         * Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing
         * account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
         */
        await gapi.client.cloudbilling.billingAccounts.projects.list({
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Gets information about a billing account. The current authenticated user must be a [viewer of the billing account](https://cloud.google.com/billing/docs/how-to/billing-access). */
        await gapi.client.cloudbilling.billingAccounts.get({
            name: "Test string",
        });
        /**
         * Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing
         * account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
         */
        await gapi.client.cloudbilling.billingAccounts.projects.list({
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Gets the access control policy for a billing account. The caller must have the `billing.accounts.getIamPolicy` permission on the account, which is often given to billing account
         * [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
         */
        await gapi.client.cloudbilling.billingAccounts.getIamPolicy({
            "options.requestedPolicyVersion": 42,
            resource: "Test string",
        });
        /**
         * Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing
         * account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
         */
        await gapi.client.cloudbilling.billingAccounts.projects.list({
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Lists the billing accounts that the current authenticated user has permission to [view](https://cloud.google.com/billing/docs/how-to/billing-access). */
        await gapi.client.cloudbilling.billingAccounts.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing
         * account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
         */
        await gapi.client.cloudbilling.billingAccounts.projects.list({
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Updates a billing account's fields. Currently the only field that can be edited is `display_name`. The current authenticated user must have the `billing.accounts.update` IAM permission,
         * which is typically given to the [administrator](https://cloud.google.com/billing/docs/how-to/billing-access) of the billing account.
         */
        await gapi.client.cloudbilling.billingAccounts.patch({
            name: "Test string",
            updateMask: "Test string",
        }, {
            displayName: "Test string",
            masterBillingAccount: "Test string",
            name: "Test string",
            open: true,
        });
        /**
         * Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing
         * account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
         */
        await gapi.client.cloudbilling.billingAccounts.projects.list({
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Sets the access control policy for a billing account. Replaces any existing policy. The caller must have the `billing.accounts.setIamPolicy` permission on the account, which is often
         * given to billing account [administrators](https://cloud.google.com/billing/docs/how-to/billing-access).
         */
        await gapi.client.cloudbilling.billingAccounts.setIamPolicy({
            resource: "Test string",
        }, {
            policy: {
                auditConfigs: [
                    {
                        auditLogConfigs: [
                            {
                                exemptedMembers: [
                                    "Test string"                                ],
                                logType: "Test string",
                            }                        ],
                        service: "Test string",
                    }                ],
                bindings: [
                    {
                        condition: {
                            description: "Test string",
                            expression: "Test string",
                            location: "Test string",
                            title: "Test string",
                        },
                        members: [
                            "Test string"                        ],
                        role: "Test string",
                    }                ],
                etag: "Test string",
                version: 42,
            },
            updateMask: "Test string",
        });
        /**
         * Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing
         * account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
         */
        await gapi.client.cloudbilling.billingAccounts.projects.list({
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Tests the access control policy for a billing account. This method takes the resource and a set of permissions as input and returns the subset of the input permissions that the caller
         * is allowed for that resource.
         */
        await gapi.client.cloudbilling.billingAccounts.testIamPermissions({
            resource: "Test string",
        }, {
            permissions: [
                "Test string"            ],
        });
        /**
         * Lists the projects associated with a billing account. The current authenticated user must have the `billing.resourceAssociations.list` IAM permission, which is often given to billing
         * account [viewers](https://cloud.google.com/billing/docs/how-to/billing-access).
         */
        await gapi.client.cloudbilling.billingAccounts.projects.list({
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Gets the billing information for a project. The current authenticated user must have [permission to view the project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
         * ).
         */
        await gapi.client.cloudbilling.projects.getBillingInfo({
            name: "Test string",
        });
        /**
         * Sets or updates the billing account associated with a project. You specify the new billing account by setting the `billing_account_name` in the `ProjectBillingInfo` resource to the
         * resource name of a billing account. Associating a project with an open billing account enables billing on the project and allows charges for resource usage. If the project already had a
         * billing account, this method changes the billing account used for resource usage charges. *Note:* Incurred charges that have not yet been reported in the transaction history of the
         * Google Cloud Console might be billed to the new billing account, even if the charge occurred before the new billing account was assigned to the project. The current authenticated user
         * must have ownership privileges for both the [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo ) and the [billing
         * account](https://cloud.google.com/billing/docs/how-to/billing-access). You can disable billing on the project by setting the `billing_account_name` field to empty. This action
         * disassociates the current billing account from the project. Any billable activity of your in-use services will stop, and your application could stop functioning as expected. Any
         * unbilled charges to date will be billed to the previously associated account. The current authenticated user must be either an owner of the project or an owner of the billing account
         * for the project. Note that associating a project with a *closed* billing account will have much the same effect as disabling billing on the project: any paid resources used by the
         * project will be shut down. Thus, unless you wish to disable billing, you should always call this method with the name of an *open* billing account.
         */
        await gapi.client.cloudbilling.projects.updateBillingInfo({
            name: "Test string",
        }, {
            billingAccountName: "Test string",
            billingEnabled: true,
            name: "Test string",
            projectId: "Test string",
        });
        /** Lists all public cloud services. */
        await gapi.client.cloudbilling.services.list({
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Lists all publicly available SKUs for a given cloud service. */
        await gapi.client.cloudbilling.services.skus.list({
            currencyCode: "Test string",
            endTime: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            startTime: "Test string",
        });
    }
});
