/* This is stub file for gapi.client.cloudasset definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200911

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('cloudasset', 'v1', () => {
        /** now we can use gapi.client.cloudasset */

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
        /** Creates a feed in a parent project/folder/organization to listen to its asset updates. */
        await gapi.client.cloudasset.feeds.create({
            parent: "Test string",
        }, {
            feed: {
                assetNames: [
                    "Test string"                ],
                assetTypes: [
                    "Test string"                ],
                condition: {
                    description: "Test string",
                    expression: "Test string",
                    location: "Test string",
                    title: "Test string",
                },
                contentType: "Test string",
                feedOutputConfig: {
                    pubsubDestination: {
                        topic: "Test string",
                    },
                },
                name: "Test string",
            },
            feedId: "Test string",
        });
        /** Deletes an asset feed. */
        await gapi.client.cloudasset.feeds.delete({
            name: "Test string",
        });
        /** Gets details about an asset feed. */
        await gapi.client.cloudasset.feeds.get({
            name: "Test string",
        });
        /** Lists all asset feeds in a parent project/folder/organization. */
        await gapi.client.cloudasset.feeds.list({
            parent: "Test string",
        });
        /** Updates an asset feed configuration. */
        await gapi.client.cloudasset.feeds.patch({
            name: "Test string",
        }, {
            feed: {
                assetNames: [
                    "Test string"                ],
                assetTypes: [
                    "Test string"                ],
                condition: {
                    description: "Test string",
                    expression: "Test string",
                    location: "Test string",
                    title: "Test string",
                },
                contentType: "Test string",
                feedOutputConfig: {
                    pubsubDestination: {
                        topic: "Test string",
                    },
                },
                name: "Test string",
            },
            updateMask: "Test string",
        });
        /** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
        await gapi.client.cloudasset.operations.get({
            name: "Test string",
        });
        /**
         * Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can
         * create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an
         * INVALID_ARGUMENT error.
         */
        await gapi.client.cloudasset.v1.batchGetAssetsHistory({
            assetNames: "Test string",
            contentType: "Test string",
            parent: "Test string",
            "readTimeWindow.endTime": "Test string",
            "readTimeWindow.startTime": "Test string",
        });
        /**
         * Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each
         * line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the
         * google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result.
         * For regular-size resource parent, the export operation usually finishes within 5 minutes.
         */
        await gapi.client.cloudasset.v1.exportAssets({
            parent: "Test string",
        }, {
            assetTypes: [
                "Test string"            ],
            contentType: "Test string",
            outputConfig: {
                bigqueryDestination: {
                    dataset: "Test string",
                    force: true,
                    partitionSpec: {
                        partitionKey: "Test string",
                    },
                    separateTablesPerAssetType: true,
                    table: "Test string",
                },
                gcsDestination: {
                    uri: "Test string",
                    uriPrefix: "Test string",
                },
            },
            readTime: "Test string",
        });
        /**
         * Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on
         * the desired scope, otherwise the request will be rejected.
         */
        await gapi.client.cloudasset.v1.searchAllIamPolicies({
            pageSize: 42,
            pageToken: "Test string",
            query: "Test string",
            scope: "Test string",
        });
        /**
         * Searches all Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on
         * the desired scope, otherwise the request will be rejected.
         */
        await gapi.client.cloudasset.v1.searchAllResources({
            assetTypes: "Test string",
            orderBy: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            query: "Test string",
            scope: "Test string",
        });
    }
});
