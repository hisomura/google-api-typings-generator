/* This is stub file for gapi.client.clouderrorreporting definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('clouderrorreporting', 'v1beta1', () => {
        /** now we can use gapi.client.clouderrorreporting */

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
        /** Deletes all error events of a given project. */
        await gapi.client.clouderrorreporting.projects.deleteEvents({
            projectName: "Test string",
        });
        /** Lists the specified events. */
        await gapi.client.clouderrorreporting.projects.events.list({
            groupId: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            projectName: "Test string",
            "serviceFilter.resourceType": "Test string",
            "serviceFilter.service": "Test string",
            "serviceFilter.version": "Test string",
            "timeRange.period": "Test string",
        });
        /**
         * Report an individual error event.
         *
         * This endpoint accepts &#42;&#42;either&#42;&#42; an OAuth token,
         * &#42;&#42;or&#42;&#42; an [API key](https://support.google.com/cloud/answer/6158862)
         * for authentication. To use an API key, append it to the URL as the value of
         * a `key` parameter. For example:
         *
         * `POST
         * https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456`
         */
        await gapi.client.clouderrorreporting.projects.events.report({
            projectName: "Test string",
        }, {
            context: {
                httpRequest: {
                    method: "Test string",
                    referrer: "Test string",
                    remoteIp: "Test string",
                    responseStatusCode: 42,
                    url: "Test string",
                    userAgent: "Test string",
                },
                reportLocation: {
                    filePath: "Test string",
                    functionName: "Test string",
                    lineNumber: 42,
                },
                sourceReferences: [
                    {
                        repository: "Test string",
                        revisionId: "Test string",
                    }                ],
                user: "Test string",
            },
            eventTime: "Test string",
            message: "Test string",
            serviceContext: {
                resourceType: "Test string",
                service: "Test string",
                version: "Test string",
            },
        });
        /** Get the specified group. */
        await gapi.client.clouderrorreporting.projects.groups.get({
            groupName: "Test string",
        });
        /**
         * Replace the data for the specified group.
         * Fails if the group does not exist.
         */
        await gapi.client.clouderrorreporting.projects.groups.update({
            name: "Test string",
        }, {
            groupId: "Test string",
            name: "Test string",
            resolutionStatus: "Test string",
            trackingIssues: [
                {
                    url: "Test string",
                }            ],
        });
        /** Lists the specified groups. */
        await gapi.client.clouderrorreporting.projects.groupStats.list({
            alignment: "Test string",
            alignmentTime: "Test string",
            groupId: "Test string",
            order: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            projectName: "Test string",
            "serviceFilter.resourceType": "Test string",
            "serviceFilter.service": "Test string",
            "serviceFilter.version": "Test string",
            timedCountDuration: "Test string",
            "timeRange.period": "Test string",
        });
    }
});
