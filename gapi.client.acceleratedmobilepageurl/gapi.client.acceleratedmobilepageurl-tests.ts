/* This is stub file for gapi.client.acceleratedmobilepageurl definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200727

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('acceleratedmobilepageurl', 'v1', () => {
        /** now we can use gapi.client.acceleratedmobilepageurl */

        run();
    });

    async function run() {
        /**
         * Returns AMP URL(s) and equivalent
         * [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
         */
        await gapi.client.acceleratedmobilepageurl.ampUrls.batchGet({
        }, {
            lookupStrategy: "Test string",
            urls: [
                "Test string"            ],
        });
    }
});