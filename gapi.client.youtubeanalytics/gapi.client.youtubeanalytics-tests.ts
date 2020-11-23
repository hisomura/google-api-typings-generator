/* This is stub file for gapi.client.youtubeanalytics definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201121

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('youtubeanalytics', 'v2', () => {
        /** now we can use gapi.client.youtubeanalytics */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage your YouTube account */
            'https://www.googleapis.com/auth/youtube',
            /** View your YouTube account */
            'https://www.googleapis.com/auth/youtube.readonly',
            /** View and manage your assets and associated content on YouTube */
            'https://www.googleapis.com/auth/youtubepartner',
            /** View monetary and non-monetary YouTube Analytics reports for your YouTube content */
            'https://www.googleapis.com/auth/yt-analytics-monetary.readonly',
            /** View YouTube Analytics reports for your YouTube content */
            'https://www.googleapis.com/auth/yt-analytics.readonly',
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
        /** Removes an item from a group. */
        await gapi.client.youtubeanalytics.groupItems.delete({
            id: "Test string",
            onBehalfOfContentOwner: "Test string",
        });
        /** Creates a group item. */
        await gapi.client.youtubeanalytics.groupItems.insert({
            onBehalfOfContentOwner: "Test string",
        }, {
            errors: {
                code: "Test string",
                error: [
                    {
                        argument: [
                            "Test string"                        ],
                        code: "Test string",
                        debugInfo: "Test string",
                        domain: "Test string",
                        externalErrorMessage: "Test string",
                        location: "Test string",
                        locationType: "Test string",
                    }                ],
                requestId: "Test string",
            },
            etag: "Test string",
            groupId: "Test string",
            id: "Test string",
            kind: "Test string",
            resource: {
                id: "Test string",
                kind: "Test string",
            },
        });
        /** Returns a collection of group items that match the API request parameters. */
        await gapi.client.youtubeanalytics.groupItems.list({
            groupId: "Test string",
            onBehalfOfContentOwner: "Test string",
        });
        /** Deletes a group. */
        await gapi.client.youtubeanalytics.groups.delete({
            id: "Test string",
            onBehalfOfContentOwner: "Test string",
        });
        /** Creates a group. */
        await gapi.client.youtubeanalytics.groups.insert({
            onBehalfOfContentOwner: "Test string",
        }, {
            contentDetails: {
                itemCount: "Test string",
                itemType: "Test string",
            },
            errors: {
                code: "Test string",
                error: [
                    {
                        argument: [
                            "Test string"                        ],
                        code: "Test string",
                        debugInfo: "Test string",
                        domain: "Test string",
                        externalErrorMessage: "Test string",
                        location: "Test string",
                        locationType: "Test string",
                    }                ],
                requestId: "Test string",
            },
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            snippet: {
                publishedAt: "Test string",
                title: "Test string",
            },
        });
        /**
         * Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups
         * by their unique IDs.
         */
        await gapi.client.youtubeanalytics.groups.list({
            id: "Test string",
            mine: true,
            onBehalfOfContentOwner: "Test string",
            pageToken: "Test string",
        });
        /** Modifies a group. For example, you could change a group's title. */
        await gapi.client.youtubeanalytics.groups.update({
            onBehalfOfContentOwner: "Test string",
        }, {
            contentDetails: {
                itemCount: "Test string",
                itemType: "Test string",
            },
            errors: {
                code: "Test string",
                error: [
                    {
                        argument: [
                            "Test string"                        ],
                        code: "Test string",
                        debugInfo: "Test string",
                        domain: "Test string",
                        externalErrorMessage: "Test string",
                        location: "Test string",
                        locationType: "Test string",
                    }                ],
                requestId: "Test string",
            },
            etag: "Test string",
            id: "Test string",
            kind: "Test string",
            snippet: {
                publishedAt: "Test string",
                title: "Test string",
            },
        });
        /** Retrieve your YouTube Analytics reports. */
        await gapi.client.youtubeanalytics.reports.query({
            currency: "Test string",
            dimensions: "Test string",
            endDate: "Test string",
            filters: "Test string",
            ids: "Test string",
            includeHistoricalChannelData: true,
            maxResults: 42,
            metrics: "Test string",
            sort: "Test string",
            startDate: "Test string",
            startIndex: 42,
        });
    }
});
