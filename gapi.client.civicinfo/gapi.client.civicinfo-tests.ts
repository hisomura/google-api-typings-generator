/* This is stub file for gapi.client.civicinfo definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201022

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('civicinfo', 'v2', () => {
        /** now we can use gapi.client.civicinfo */

        run();
    });

    async function run() {
        /** Searches for political divisions by their natural name or OCD ID. */
        await gapi.client.civicinfo.divisions.search({
            query: "Test string",
        });
        /** List of available elections to query. */
        await gapi.client.civicinfo.elections.electionQuery({
        });
        /** Looks up information relevant to a voter based on the voter's registered address. */
        await gapi.client.civicinfo.elections.voterInfoQuery({
            address: "Test string",
            electionId: "Test string",
            officialOnly: true,
            returnAllAvailableData: true,
        });
        /** Looks up political geography and representative information for a single address. */
        await gapi.client.civicinfo.representatives.representativeInfoByAddress({
            address: "Test string",
            includeOffices: true,
            levels: "Test string",
            roles: "Test string",
        });
        /** Looks up representative information for a single geographic division. */
        await gapi.client.civicinfo.representatives.representativeInfoByDivision({
            levels: "Test string",
            ocdId: "Test string",
            recursive: true,
            roles: "Test string",
        });
    }
});
