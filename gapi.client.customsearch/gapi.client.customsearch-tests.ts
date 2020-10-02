/* This is stub file for gapi.client.customsearch definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201001

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('customsearch', 'v1', () => {
        /** now we can use gapi.client.customsearch */

        run();
    });

    async function run() {
        /** Returns metadata about the search performed, metadata about the engine used for the search, and the search results. */
        await gapi.client.customsearch.cse.list({
            c2coff: "Test string",
            cr: "Test string",
            cx: "Test string",
            dateRestrict: "Test string",
            exactTerms: "Test string",
            excludeTerms: "Test string",
            fileType: "Test string",
            filter: "Test string",
            gl: "Test string",
            googlehost: "Test string",
            highRange: "Test string",
            hl: "Test string",
            hq: "Test string",
            imgColorType: "Test string",
            imgDominantColor: "Test string",
            imgSize: "Test string",
            imgType: "Test string",
            linkSite: "Test string",
            lowRange: "Test string",
            lr: "Test string",
            num: 42,
            orTerms: "Test string",
            q: "Test string",
            relatedSite: "Test string",
            rights: "Test string",
            safe: "Test string",
            searchType: "Test string",
            siteSearch: "Test string",
            siteSearchFilter: "Test string",
            sort: "Test string",
            start: 42,
        });
        /** Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns. */
        await gapi.client.customsearch.cse.siterestrict.list({
            c2coff: "Test string",
            cr: "Test string",
            cx: "Test string",
            dateRestrict: "Test string",
            exactTerms: "Test string",
            excludeTerms: "Test string",
            fileType: "Test string",
            filter: "Test string",
            gl: "Test string",
            googlehost: "Test string",
            highRange: "Test string",
            hl: "Test string",
            hq: "Test string",
            imgColorType: "Test string",
            imgDominantColor: "Test string",
            imgSize: "Test string",
            imgType: "Test string",
            linkSite: "Test string",
            lowRange: "Test string",
            lr: "Test string",
            num: 42,
            orTerms: "Test string",
            q: "Test string",
            relatedSite: "Test string",
            rights: "Test string",
            safe: "Test string",
            searchType: "Test string",
            siteSearch: "Test string",
            siteSearchFilter: "Test string",
            sort: "Test string",
            start: 42,
        });
    }
});
