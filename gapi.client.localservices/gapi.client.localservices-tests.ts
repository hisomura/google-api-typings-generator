/* This is stub file for gapi.client.localservices definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('localservices', 'v1', () => {
        /** now we can use gapi.client.localservices */

        run();
    });

    async function run() {
        /**
         * Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them
         * read permissions on their linked accounts.
         */
        await gapi.client.localservices.accountReports.search({
            "endDate.day": 42,
            "endDate.month": 42,
            "endDate.year": 42,
            pageSize: 42,
            pageToken: "Test string",
            query: "Test string",
            "startDate.day": 42,
            "startDate.month": 42,
            "startDate.year": 42,
        });
        /**
         * Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that
         * allows them read permissions on their linked accounts.
         */
        await gapi.client.localservices.detailedLeadReports.search({
            "endDate.day": 42,
            "endDate.month": 42,
            "endDate.year": 42,
            pageSize: 42,
            pageToken: "Test string",
            query: "Test string",
            "startDate.day": 42,
            "startDate.month": 42,
            "startDate.year": 42,
        });
    }
});