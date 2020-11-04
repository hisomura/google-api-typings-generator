/* This is stub file for gapi.client.serviceconsumermanagement definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201103

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('serviceconsumermanagement', 'v1', () => {
        /** now we can use gapi.client.serviceconsumermanagement */

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
         * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this
         * method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation
         * completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of
         * 1, corresponding to `Code.CANCELLED`.
         */
        await gapi.client.serviceconsumermanagement.operations.cancel({
            name: "Test string",
        }, {
        });
        /**
         * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support
         * this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
         */
        await gapi.client.serviceconsumermanagement.operations.delete({
            name: "Test string",
        });
        /** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
        await gapi.client.serviceconsumermanagement.operations.get({
            name: "Test string",
        });
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to
         * override the binding to use different resource name schemes, such as `users/∗/operations`. To override the binding, API services can add a binding such as
         * `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must
         * ensure the name binding is the parent resource, without the operations collection id.
         */
        await gapi.client.serviceconsumermanagement.operations.list({
            filter: "Test string",
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Search tenancy units for a managed service. */
        await gapi.client.serviceconsumermanagement.services.search({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            query: "Test string",
        });
        /**
         * Add a new tenant project to the tenancy unit. There can be a maximum of 1024 tenant projects in a tenancy unit. If there are previously failed `AddTenantProject` calls, you might need
         * to call `RemoveTenantProject` first to resolve them before you can make another call to `AddTenantProject` with the same tag. Operation.
         */
        await gapi.client.serviceconsumermanagement.services.tenancyUnits.addProject({
            parent: "Test string",
        }, {
            projectConfig: {
                billingConfig: {
                    billingAccount: "Test string",
                },
                folder: "Test string",
                labels: {
                    A: "Test string"                },
                serviceAccountConfig: {
                    accountId: "Test string",
                    tenantProjectRoles: [
                        "Test string"                    ],
                },
                services: [
                    "Test string"                ],
                tenantProjectPolicy: {
                    policyBindings: [
                        {
                            members: [
                                "Test string"                            ],
                            role: "Test string",
                        }                    ],
                },
            },
            tag: "Test string",
        });
        /**
         * Apply a configuration to an existing tenant project. This project must exist in an active state and have the original owner account. The caller must have permission to add a project to
         * the given tenancy unit. The configuration is applied, but any existing settings on the project aren't modified. Specified policy bindings are applied. Existing bindings aren't modified.
         * Specified services are activated. No service is deactivated. If specified, new billing configuration is applied. Omit a billing configuration to keep the existing one. A service account
         * in the project is created if previously non existed. Specified labels will be appended to tenant project, note that the value of existing label key will be updated if the same label key
         * is requested. The specified folder is ignored, as moving a tenant project to a different folder isn't supported. The operation fails if any of the steps fail, but no rollback of already
         * applied configuration changes is attempted. Operation.
         */
        await gapi.client.serviceconsumermanagement.services.tenancyUnits.applyProjectConfig({
            name: "Test string",
        }, {
            projectConfig: {
                billingConfig: {
                    billingAccount: "Test string",
                },
                folder: "Test string",
                labels: {
                    A: "Test string"                },
                serviceAccountConfig: {
                    accountId: "Test string",
                    tenantProjectRoles: [
                        "Test string"                    ],
                },
                services: [
                    "Test string"                ],
                tenantProjectPolicy: {
                    policyBindings: [
                        {
                            members: [
                                "Test string"                            ],
                            role: "Test string",
                        }                    ],
                },
            },
            tag: "Test string",
        });
        /**
         * Attach an existing project to the tenancy unit as a new tenant resource. The project could either be the tenant project reserved by calling `AddTenantProject` under a tenancy unit of a
         * service producer's project of a managed service, or from a separate project. The caller is checked against a set of permissions as if calling `AddTenantProject` on the same service
         * consumer. To trigger the attachment, the targeted tenant project must be in a folder. Make sure the ServiceConsumerManagement service account is the owner of that project. These two
         * requirements are already met if the project is reserved by calling `AddTenantProject`. Operation.
         */
        await gapi.client.serviceconsumermanagement.services.tenancyUnits.attachProject({
            name: "Test string",
        }, {
            externalResource: "Test string",
            reservedResource: "Test string",
            tag: "Test string",
        });
        /**
         * Creates a tenancy unit with no tenant resources. If tenancy unit already exists, it will be returned, however, in this case, returned TenancyUnit does not have tenant_resources field
         * set and ListTenancyUnits has to be used to get a complete TenancyUnit with all fields populated.
         */
        await gapi.client.serviceconsumermanagement.services.tenancyUnits.create({
            parent: "Test string",
        }, {
            tenancyUnitId: "Test string",
        });
        /** Delete a tenancy unit. Before you delete the tenancy unit, there should be no tenant resources in it that aren't in a DELETED state. Operation. */
        await gapi.client.serviceconsumermanagement.services.tenancyUnits.delete({
            name: "Test string",
        });
        /**
         * Deletes the specified project resource identified by a tenant resource tag. The mothod removes a project lien with a 'TenantManager' origin if that was added. It will then attempt to
         * delete the project. If that operation fails, this method also fails. After the project has been deleted, the tenant resource state is set to DELETED. To permanently remove resource
         * metadata, call the `RemoveTenantProject` method. New resources with the same tag can't be added if there are existing resources in a DELETED state. Operation.
         */
        await gapi.client.serviceconsumermanagement.services.tenancyUnits.deleteProject({
            name: "Test string",
        }, {
            tag: "Test string",
        });
        /**
         * Find the tenancy unit for a managed service and service consumer. This method shouldn't be used in a service producer's runtime path, for example to find the tenant project number when
         * creating VMs. Service producers must persist the tenant project's information after the project is created.
         */
        await gapi.client.serviceconsumermanagement.services.tenancyUnits.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /**
         * Removes the specified project resource identified by a tenant resource tag. The method removes the project lien with 'TenantManager' origin if that was added. It then attempts to delete
         * the project. If that operation fails, this method also fails. Calls to remove already removed or non-existent tenant project succeed. After the project has been deleted, or if was
         * already in a DELETED state, resource metadata is permanently removed from the tenancy unit. Operation.
         */
        await gapi.client.serviceconsumermanagement.services.tenancyUnits.removeProject({
            name: "Test string",
        }, {
            tag: "Test string",
        });
        /**
         * Attempts to undelete a previously deleted tenant project. The project must be in a DELETED state. There are no guarantees that an undeleted project will be in a fully restored and
         * functional state. Call the `ApplyTenantProjectConfig` method to update its configuration and then validate all managed service resources. Operation.
         */
        await gapi.client.serviceconsumermanagement.services.tenancyUnits.undeleteProject({
            name: "Test string",
        }, {
            tag: "Test string",
        });
    }
});
