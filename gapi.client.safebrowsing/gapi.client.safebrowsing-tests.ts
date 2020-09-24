/* This is stub file for gapi.client.safebrowsing definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200922

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('safebrowsing', 'v4', () => {
        /** now we can use gapi.client.safebrowsing */

        run();
    });

    async function run() {
        await gapi.client.safebrowsing.encodedFullHashes.get({
            clientId: "Test string",
            clientVersion: "Test string",
            encodedRequest: "Test string",
        });
        await gapi.client.safebrowsing.encodedUpdates.get({
            clientId: "Test string",
            clientVersion: "Test string",
            encodedRequest: "Test string",
        });
        /** Finds the full hashes that match the requested hash prefixes. */
        await gapi.client.safebrowsing.fullHashes.find({
        }, {
            apiClient: {
                clientId: "Test string",
                clientVersion: "Test string",
            },
            client: {
                clientId: "Test string",
                clientVersion: "Test string",
            },
            clientStates: [
                "Test string"            ],
            threatInfo: {
                platformTypes: [
                    "Test string"                ],
                threatEntries: [
                    {
                        digest: "Test string",
                        hash: "Test string",
                        url: "Test string",
                    }                ],
                threatEntryTypes: [
                    "Test string"                ],
                threatTypes: [
                    "Test string"                ],
            },
        });
        /** Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method. */
        await gapi.client.safebrowsing.threatHits.create({
        }, {
            clientInfo: {
                clientId: "Test string",
                clientVersion: "Test string",
            },
            entry: {
                digest: "Test string",
                hash: "Test string",
                url: "Test string",
            },
            platformType: "Test string",
            resources: [
                {
                    referrer: "Test string",
                    remoteIp: "Test string",
                    type: "Test string",
                    url: "Test string",
                }            ],
            threatType: "Test string",
            userInfo: {
                regionCode: "Test string",
                userId: "Test string",
            },
        });
        /** Lists the Safe Browsing threat lists available for download. */
        await gapi.client.safebrowsing.threatLists.list({
        });
        /** Fetches the most recent threat list updates. A client can request updates for multiple lists at once. */
        await gapi.client.safebrowsing.threatListUpdates.fetch({
        }, {
            client: {
                clientId: "Test string",
                clientVersion: "Test string",
            },
            listUpdateRequests: [
                {
                    constraints: {
                        deviceLocation: "Test string",
                        language: "Test string",
                        maxDatabaseEntries: 42,
                        maxUpdateEntries: 42,
                        region: "Test string",
                        supportedCompressions: [
                            "Test string"                        ],
                    },
                    platformType: "Test string",
                    state: "Test string",
                    threatEntryType: "Test string",
                    threatType: "Test string",
                }            ],
        });
        /** Finds the threat entries that match the Safe Browsing lists. */
        await gapi.client.safebrowsing.threatMatches.find({
        }, {
            client: {
                clientId: "Test string",
                clientVersion: "Test string",
            },
            threatInfo: {
                platformTypes: [
                    "Test string"                ],
                threatEntries: [
                    {
                        digest: "Test string",
                        hash: "Test string",
                        url: "Test string",
                    }                ],
                threatEntryTypes: [
                    "Test string"                ],
                threatTypes: [
                    "Test string"                ],
            },
        });
    }
});
