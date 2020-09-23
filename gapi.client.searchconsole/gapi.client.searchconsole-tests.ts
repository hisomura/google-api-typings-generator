/* This is stub file for gapi.client.searchconsole definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200922

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('searchconsole', 'v1', () => {
        /** now we can use gapi.client.searchconsole */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage Search Console data for your verified sites */
            'https://www.googleapis.com/auth/webmasters',
            /** View Search Console data for your verified sites */
            'https://www.googleapis.com/auth/webmasters.readonly',
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
         * Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When
         * date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for
         * any metric, and see which day rows are returned.
         */
        await gapi.client.searchconsole.searchanalytics.query({
            siteUrl: "Test string",
        }, {
            aggregationType: "Test string",
            dimensionFilterGroups: [
                {
                    filters: [
                        {
                            dimension: "Test string",
                            expression: "Test string",
                            operator: "Test string",
                        }                    ],
                    groupType: "Test string",
                }            ],
            dimensions: [
                "Test string"            ],
            endDate: "Test string",
            rowLimit: 42,
            searchType: "Test string",
            startDate: "Test string",
            startRow: 42,
        });
        /** Deletes a sitemap from this site. */
        await gapi.client.searchconsole.sitemaps.delete({
            feedpath: "Test string",
            siteUrl: "Test string",
        });
        /** Retrieves information about a specific sitemap. */
        await gapi.client.searchconsole.sitemaps.get({
            feedpath: "Test string",
            siteUrl: "Test string",
        });
        /** Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request). */
        await gapi.client.searchconsole.sitemaps.list({
            sitemapIndex: "Test string",
            siteUrl: "Test string",
        });
        /** Submits a sitemap for a site. */
        await gapi.client.searchconsole.sitemaps.submit({
            feedpath: "Test string",
            siteUrl: "Test string",
        });
        /** Adds a site to the set of the user's sites in Search Console. */
        await gapi.client.searchconsole.sites.add({
            siteUrl: "Test string",
        });
        /** Removes a site from the set of the user's Search Console sites. */
        await gapi.client.searchconsole.sites.delete({
            siteUrl: "Test string",
        });
        /** Retrieves information about specific site. */
        await gapi.client.searchconsole.sites.get({
            siteUrl: "Test string",
        });
        /** Lists the user's Search Console sites. */
        await gapi.client.searchconsole.sites.list({
        });
    }
});
