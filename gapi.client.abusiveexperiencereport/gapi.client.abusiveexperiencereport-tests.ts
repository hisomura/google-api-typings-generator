/* This is stub file for gapi.client.abusiveexperiencereport definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201107

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('abusiveexperiencereport', 'v1', () => {
        /** now we can use gapi.client.abusiveexperiencereport */

        run();
    });

    async function run() {
        /** Gets a site's Abusive Experience Report summary. */
        await gapi.client.abusiveexperiencereport.sites.get({
            name: "Test string",
        });
        /** Lists sites that are failing in the Abusive Experience Report. */
        await gapi.client.abusiveexperiencereport.violatingSites.list({
        });
    }
});
