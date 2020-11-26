/* This is stub file for gapi.client.youtubereporting definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201125

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('youtubereporting', 'v1', () => {
        /** now we can use gapi.client.youtubereporting */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
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
        /** Creates a job and returns it. */
        await gapi.client.youtubereporting.jobs.create({
            onBehalfOfContentOwner: "Test string",
        }, {
            createTime: "Test string",
            expireTime: "Test string",
            id: "Test string",
            name: "Test string",
            reportTypeId: "Test string",
            systemManaged: true,
        });
        /** Gets the metadata of a specific report. */
        await gapi.client.youtubereporting.jobs.reports.get({
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
            reportId: "Test string",
        });
        /** Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist. */
        await gapi.client.youtubereporting.jobs.reports.list({
            createdAfter: "Test string",
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            startTimeAtOrAfter: "Test string",
            startTimeBefore: "Test string",
        });
        /** Deletes a job. */
        await gapi.client.youtubereporting.jobs.delete({
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
        });
        /** Gets the metadata of a specific report. */
        await gapi.client.youtubereporting.jobs.reports.get({
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
            reportId: "Test string",
        });
        /** Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist. */
        await gapi.client.youtubereporting.jobs.reports.list({
            createdAfter: "Test string",
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            startTimeAtOrAfter: "Test string",
            startTimeBefore: "Test string",
        });
        /** Gets a job. */
        await gapi.client.youtubereporting.jobs.get({
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
        });
        /** Gets the metadata of a specific report. */
        await gapi.client.youtubereporting.jobs.reports.get({
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
            reportId: "Test string",
        });
        /** Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist. */
        await gapi.client.youtubereporting.jobs.reports.list({
            createdAfter: "Test string",
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            startTimeAtOrAfter: "Test string",
            startTimeBefore: "Test string",
        });
        /** Lists jobs. */
        await gapi.client.youtubereporting.jobs.list({
            includeSystemManaged: true,
            onBehalfOfContentOwner: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Gets the metadata of a specific report. */
        await gapi.client.youtubereporting.jobs.reports.get({
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
            reportId: "Test string",
        });
        /** Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist. */
        await gapi.client.youtubereporting.jobs.reports.list({
            createdAfter: "Test string",
            jobId: "Test string",
            onBehalfOfContentOwner: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            startTimeAtOrAfter: "Test string",
            startTimeBefore: "Test string",
        });
        /** Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`. */
        await gapi.client.youtubereporting.media.download({
            resourceName: "Test string",
        });
        /** Lists report types. */
        await gapi.client.youtubereporting.reportTypes.list({
            includeSystemManaged: true,
            onBehalfOfContentOwner: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
    }
});
