/* This is stub file for gapi.client.cloudresourcemanager definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200907

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('cloudresourcemanager', 'v2', () => {
        /** now we can use gapi.client.cloudresourcemanager */

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
        /**
         * Creates a Folder in the resource hierarchy. Returns an Operation which can be used to track the progress of the folder creation workflow. Upon success the Operation.response field will
         * be populated with the created Folder. In order to succeed, the addition of this new Folder must not violate the Folder naming, height or fanout constraints. + The Folder's display_name
         * must be distinct from all other Folder's that share its parent. + The addition of the Folder must not cause the active Folder hierarchy to exceed a height of 4. Note, the full active +
         * deleted Folder hierarchy is allowed to reach a height of 8; this provides additional headroom when moving folders that contain deleted folders. + The addition of the Folder must not
         * cause the total number of Folders under its parent to exceed 100. If the operation fails due to a folder constraint violation, some errors may be returned by the CreateFolder request,
         * with status code FAILED_PRECONDITION and an error description. Other folder constraint violations will be communicated in the Operation, with the specific PreconditionFailure returned
         * via the details list in the Operation.error field. The caller must have `resourcemanager.folders.create` permission on the identified parent.
         */
        await gapi.client.cloudresourcemanager.folders.create({
            parent: "Test string",
        }, {
            createTime: "Test string",
            displayName: "Test string",
            lifecycleState: "Test string",
            name: "Test string",
            parent: "Test string",
        });
        /**
         * Requests deletion of a Folder. The Folder is moved into the DELETE_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on an empty
         * Folder in the ACTIVE state, where a Folder is empty if it doesn't contain any Folders or Projects in the ACTIVE state. The caller must have `resourcemanager.folders.delete` permission
         * on the identified folder.
         */
        await gapi.client.cloudresourcemanager.folders.delete({
            name: "Test string",
        });
        /**
         * Retrieves a Folder identified by the supplied resource name. Valid Folder resource names have the format `folders/{folder_id}` (for example, `folders/1234`). The caller must have
         * `resourcemanager.folders.get` permission on the identified folder.
         */
        await gapi.client.cloudresourcemanager.folders.get({
            name: "Test string",
        });
        /**
         * Gets the access control policy for a Folder. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the Folder's resource name, e.g.
         * "folders/1234". The caller must have `resourcemanager.folders.getIamPolicy` permission on the identified folder.
         */
        await gapi.client.cloudresourcemanager.folders.getIamPolicy({
            resource: "Test string",
        }, {
            options: {
                requestedPolicyVersion: 42,
            },
        });
        /**
         * Lists the Folders that are direct descendants of supplied parent resource. List provides a strongly consistent view of the Folders underneath the specified parent resource. List returns
         * Folders sorted based upon the (ascending) lexical ordering of their display_name. The caller must have `resourcemanager.folders.list` permission on the identified parent.
         */
        await gapi.client.cloudresourcemanager.folders.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            showDeleted: true,
        });
        /**
         * Moves a Folder under a new resource parent. Returns an Operation which can be used to track the progress of the folder move workflow. Upon success the Operation.response field will be
         * populated with the moved Folder. Upon failure, a FolderOperationError categorizing the failure cause will be returned - if the failure occurs synchronously then the FolderOperationError
         * will be returned via the Status.details field and if it occurs asynchronously then the FolderOperation will be returned via the Operation.error field. In addition, the
         * Operation.metadata field will be populated with a FolderOperation message as an aid to stateless clients. Folder moves will be rejected if they violate either the naming, height or
         * fanout constraints described in the CreateFolder documentation. The caller must have `resourcemanager.folders.move` permission on the folder's current and proposed new parent.
         */
        await gapi.client.cloudresourcemanager.folders.move({
            name: "Test string",
        }, {
            destinationParent: "Test string",
        });
        /**
         * Updates a Folder, changing its display_name. Changes to the folder display_name will be rejected if they violate either the display_name formatting rules or naming constraints described
         * in the CreateFolder documentation. The Folder's display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer
         * than 30 characters. This is captured by the regular expression: [\p{L}\p{N}]([\p{L}\p{N}_- ]{0,28}[\p{L}\p{N}])?. The caller must have `resourcemanager.folders.update` permission on the
         * identified folder. If the update fails due to the unique name constraint then a PreconditionFailure explaining this violation will be returned in the Status.details field.
         */
        await gapi.client.cloudresourcemanager.folders.patch({
            name: "Test string",
            updateMask: "Test string",
        }, {
            createTime: "Test string",
            displayName: "Test string",
            lifecycleState: "Test string",
            name: "Test string",
            parent: "Test string",
        });
        /**
         * Search for folders that match specific filter criteria. Search provides an eventually consistent view of the folders a user has access to which meet the specified filter criteria. This
         * will only return folders on which the caller has the permission `resourcemanager.folders.get`.
         */
        await gapi.client.cloudresourcemanager.folders.search({
        }, {
            pageSize: 42,
            pageToken: "Test string",
            query: "Test string",
        });
        /**
         * Sets the access control policy on a Folder, replacing any existing policy. The `resource` field should be the Folder's resource name, e.g. "folders/1234". The caller must have
         * `resourcemanager.folders.setIamPolicy` permission on the identified folder.
         */
        await gapi.client.cloudresourcemanager.folders.setIamPolicy({
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
                        bindingId: "Test string",
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
         * Returns permissions that a caller has on the specified Folder. The `resource` field should be the Folder's resource name, e.g. "folders/1234". There are no permissions required for
         * making this API call.
         */
        await gapi.client.cloudresourcemanager.folders.testIamPermissions({
            resource: "Test string",
        }, {
            permissions: [
                "Test string"            ],
        });
        /**
         * Cancels the deletion request for a Folder. This method may only be called on a Folder in the DELETE_REQUESTED state. In order to succeed, the Folder's parent must be in the ACTIVE
         * state. In addition, reintroducing the folder into the tree must not violate folder naming, height and fanout constraints described in the CreateFolder documentation. The caller must
         * have `resourcemanager.folders.undelete` permission on the identified folder.
         */
        await gapi.client.cloudresourcemanager.folders.undelete({
            name: "Test string",
        }, {
        });
        /** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
        await gapi.client.cloudresourcemanager.operations.get({
            name: "Test string",
        });
    }
});
