/* This is stub file for gapi.client.kgsearch definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200809

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('kgsearch', 'v1', () => {
        /** now we can use gapi.client.kgsearch */

        run();
    });

    async function run() {
        /**
         * Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with
         * http://schema.org
         */
        await gapi.client.kgsearch.entities.search({
            ids: "Test string",
            indent: true,
            languages: "Test string",
            limit: 42,
            prefix: true,
            query: "Test string",
            types: "Test string",
        });
    }
});
