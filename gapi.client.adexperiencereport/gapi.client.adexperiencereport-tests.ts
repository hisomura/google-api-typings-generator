/* This is stub file for gapi.client.adexperiencereport definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200910

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('adexperiencereport', 'v1', () => {
        /** now we can use gapi.client.adexperiencereport */

        run();
    });

    async function run() {
        /** Gets a site's Ad Experience Report summary. */
        await gapi.client.adexperiencereport.sites.get({
            name: "Test string",
        });
        /** Lists sites that are failing in the Ad Experience Report on at least one platform. */
        await gapi.client.adexperiencereport.violatingSites.list({
        });
    }
});
