/* This is stub file for gapi.client.cloudsearch definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201110

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('cloudsearch', 'v1', () => {
        /** now we can use gapi.client.cloudsearch */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Index and serve your organization's data with Cloud Search */
            'https://www.googleapis.com/auth/cloud_search',
            /** Index and serve your organization's data with Cloud Search */
            'https://www.googleapis.com/auth/cloud_search.debug',
            /** Index and serve your organization's data with Cloud Search */
            'https://www.googleapis.com/auth/cloud_search.indexing',
            /** Search your organization's data in the Cloud Search index */
            'https://www.googleapis.com/auth/cloud_search.query',
            /** Index and serve your organization's data with Cloud Search */
            'https://www.googleapis.com/auth/cloud_search.settings',
            /** Index and serve your organization's data with Cloud Search */
            'https://www.googleapis.com/auth/cloud_search.settings.indexing',
            /** Index and serve your organization's data with Cloud Search */
            'https://www.googleapis.com/auth/cloud_search.settings.query',
            /** Index and serve your organization's data with Cloud Search */
            'https://www.googleapis.com/auth/cloud_search.stats',
            /** Index and serve your organization's data with Cloud Search */
            'https://www.googleapis.com/auth/cloud_search.stats.indexing',
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
         * Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index
         * requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload
         * with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the
         * UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the
         * [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content
         * connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.
         */
        await gapi.client.cloudsearch.media.upload({
            resourceName: "Test string",
        }, {
            resourceName: "Test string",
        });
        /** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
        await gapi.client.cloudsearch.operations.get({
            name: "Test string",
        });
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to
         * override the binding to use different resource name schemes, such as `users/∗/operations`. To override the binding, API services can add a binding such as
         * `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must
         * ensure the name binding is the parent resource, without the operations collection id.
         */
        await gapi.client.cloudsearch.operations.lro.list({
            filter: "Test string",
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from G Suite Apps, such as Gmail or Google Drive,
         * or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API
         * requests directly; to use a service account to perform queries, set up [G Suite domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
         */
        await gapi.client.cloudsearch.query.search({
        }, {
            dataSourceRestrictions: [
                {
                    filterOptions: [
                        {
                            filter: {
                                compositeFilter: {
                                    logicOperator: "Test string",
                                    subFilters: undefined,
                                },
                                valueFilter: {
                                    operatorName: "Test string",
                                    value: {
                                        booleanValue: true,
                                        dateValue: {
                                            day: 42,
                                            month: 42,
                                            year: 42,
                                        },
                                        doubleValue: 42,
                                        integerValue: "Test string",
                                        stringValue: "Test string",
                                        timestampValue: "Test string",
                                    },
                                },
                            },
                            objectType: "Test string",
                        }                    ],
                    source: {
                        name: "Test string",
                        predefinedSource: "Test string",
                    },
                }            ],
            facetOptions: [
                {
                    numFacetBuckets: 42,
                    objectType: "Test string",
                    operatorName: "Test string",
                    sourceName: "Test string",
                }            ],
            pageSize: 42,
            query: "Test string",
            queryInterpretationOptions: {
                disableNlInterpretation: true,
                enableVerbatimMode: true,
            },
            requestOptions: {
                debugOptions: {
                    enableDebugging: true,
                },
                languageCode: "Test string",
                searchApplicationId: "Test string",
                timeZone: "Test string",
            },
            sortOptions: {
                operatorName: "Test string",
                sortOrder: "Test string",
            },
            start: 42,
        });
        /**
         * Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API
         * requests directly; to use a service account to perform queries, set up [G Suite domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
         */
        await gapi.client.cloudsearch.query.sources.list({
            pageToken: "Test string",
            "requestOptions.debugOptions.enableDebugging": true,
            "requestOptions.languageCode": "Test string",
            "requestOptions.searchApplicationId": "Test string",
            "requestOptions.timeZone": "Test string",
        });
        /**
         * Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to
         * use a service account to perform queries, set up [G Suite domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
         */
        await gapi.client.cloudsearch.query.suggest({
        }, {
            dataSourceRestrictions: [
                {
                    filterOptions: [
                        {
                            filter: {
                                compositeFilter: {
                                    logicOperator: "Test string",
                                    subFilters: undefined,
                                },
                                valueFilter: {
                                    operatorName: "Test string",
                                    value: {
                                        booleanValue: true,
                                        dateValue: {
                                            day: 42,
                                            month: 42,
                                            year: 42,
                                        },
                                        doubleValue: 42,
                                        integerValue: "Test string",
                                        stringValue: "Test string",
                                        timestampValue: "Test string",
                                    },
                                },
                            },
                            objectType: "Test string",
                        }                    ],
                    source: {
                        name: "Test string",
                        predefinedSource: "Test string",
                    },
                }            ],
            query: "Test string",
            requestOptions: {
                debugOptions: {
                    enableDebugging: true,
                },
                languageCode: "Test string",
                searchApplicationId: "Test string",
                timeZone: "Test string",
            },
        });
        /**
         * Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API
         * requests directly; to use a service account to perform queries, set up [G Suite domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
         */
        await gapi.client.cloudsearch.query.sources.list({
            pageToken: "Test string",
            "requestOptions.debugOptions.enableDebugging": true,
            "requestOptions.languageCode": "Test string",
            "requestOptions.searchApplicationId": "Test string",
            "requestOptions.timeZone": "Test string",
        });
        /**
         * Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This
         * API requires a standard end user account to execute.
         */
        await gapi.client.cloudsearch.stats.getIndex({
            "fromDate.day": 42,
            "fromDate.month": 42,
            "fromDate.year": 42,
            "toDate.day": 42,
            "toDate.month": 42,
            "toDate.year": 42,
        });
        /** Get the query statistics for customer. **Note:** This API requires a standard end user account to execute. */
        await gapi.client.cloudsearch.stats.getQuery({
            "fromDate.day": 42,
            "fromDate.month": 42,
            "fromDate.year": 42,
            "toDate.day": 42,
            "toDate.month": 42,
            "toDate.year": 42,
        });
        /** Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute. */
        await gapi.client.cloudsearch.stats.getSession({
            "fromDate.day": 42,
            "fromDate.month": 42,
            "fromDate.year": 42,
            "toDate.day": 42,
            "toDate.month": 42,
            "toDate.year": 42,
        });
        /** Get the users statistics for customer. **Note:** This API requires a standard end user account to execute. */
        await gapi.client.cloudsearch.stats.getUser({
            "fromDate.day": 42,
            "fromDate.month": 42,
            "fromDate.year": 42,
            "toDate.day": 42,
            "toDate.month": 42,
            "toDate.year": 42,
        });
    }
});
