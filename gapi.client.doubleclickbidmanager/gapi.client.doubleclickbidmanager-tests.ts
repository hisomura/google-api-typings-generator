/* This is stub file for gapi.client.doubleclickbidmanager definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200928

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('doubleclickbidmanager', 'v1.1', () => {
        /** now we can use gapi.client.doubleclickbidmanager */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your reports in DoubleClick Bid Manager */
            'https://www.googleapis.com/auth/doubleclickbidmanager',
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
        /** Retrieves line items in CSV format. YouTube & partners line items are not supported. */
        await gapi.client.doubleclickbidmanager.lineitems.downloadlineitems({
        }, {
            fileSpec: "Test string",
            filterIds: [
                "Test string"            ],
            filterType: "Test string",
            format: "Test string",
        });
        /** Uploads line items in CSV format. YouTube & partners line items are not supported. */
        await gapi.client.doubleclickbidmanager.lineitems.uploadlineitems({
        }, {
            dryRun: true,
            format: "Test string",
            lineItems: "Test string",
        });
        /** Creates a query. */
        await gapi.client.doubleclickbidmanager.queries.createquery({
            asynchronous: true,
        }, {
            kind: "Test string",
            metadata: {
                dataRange: "Test string",
                format: "Test string",
                googleCloudStoragePathForLatestReport: "Test string",
                googleDrivePathForLatestReport: "Test string",
                latestReportRunTimeMs: "Test string",
                locale: "Test string",
                reportCount: 42,
                running: true,
                sendNotification: true,
                shareEmailAddress: [
                    "Test string"                ],
                title: "Test string",
            },
            params: {
                filters: [
                    {
                        type: "Test string",
                        value: "Test string",
                    }                ],
                groupBys: [
                    "Test string"                ],
                includeInviteData: true,
                metrics: [
                    "Test string"                ],
                options: {
                    includeOnlyTargetedUserLists: true,
                    pathQueryOptions: {
                        channelGrouping: {
                            fallbackName: "Test string",
                            name: "Test string",
                            rules: [
                                {
                                    disjunctiveMatchStatements: [
                                        {
                                            eventFilters: [
                                                {
                                                    dimensionFilter: {
                                                        filter: "Test string",
                                                        match: "Test string",
                                                        values: [
                                                            "Test string"                                                        ],
                                                    },
                                                }                                            ],
                                        }                                    ],
                                    name: "Test string",
                                }                            ],
                        },
                        pathFilters: [
                            {
                                eventFilters: [
                                    {
                                        dimensionFilter: {
                                            filter: "Test string",
                                            match: "Test string",
                                            values: [
                                                "Test string"                                            ],
                                        },
                                    }                                ],
                                pathMatchPosition: "Test string",
                            }                        ],
                    },
                },
                type: "Test string",
            },
            queryId: "Test string",
            reportDataEndTimeMs: "Test string",
            reportDataStartTimeMs: "Test string",
            schedule: {
                endTimeMs: "Test string",
                frequency: "Test string",
                nextRunMinuteOfDay: 42,
                nextRunTimezoneCode: "Test string",
                startTimeMs: "Test string",
            },
            timezoneCode: "Test string",
        });
        /** Deletes a stored query as well as the associated stored reports. */
        await gapi.client.doubleclickbidmanager.queries.deletequery({
            queryId: "Test string",
        });
        /** Retrieves a stored query. */
        await gapi.client.doubleclickbidmanager.queries.getquery({
            queryId: "Test string",
        });
        /** Retrieves stored queries. */
        await gapi.client.doubleclickbidmanager.queries.listqueries({
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Runs a stored query to generate a report. */
        await gapi.client.doubleclickbidmanager.queries.runquery({
            asynchronous: true,
            queryId: "Test string",
        }, {
            dataRange: "Test string",
            reportDataEndTimeMs: "Test string",
            reportDataStartTimeMs: "Test string",
            timezoneCode: "Test string",
        });
        /** Retrieves stored reports. */
        await gapi.client.doubleclickbidmanager.reports.listreports({
            pageSize: 42,
            pageToken: "Test string",
            queryId: "Test string",
        });
        /** Retrieves entities in SDF format. */
        await gapi.client.doubleclickbidmanager.sdf.download({
        }, {
            fileTypes: [
                "Test string"            ],
            filterIds: [
                "Test string"            ],
            filterType: "Test string",
            version: "Test string",
        });
    }
});
