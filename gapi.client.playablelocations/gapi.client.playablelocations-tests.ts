/* This is stub file for gapi.client.playablelocations definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201022

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('playablelocations', 'v3', () => {
        /** now we can use gapi.client.playablelocations */

        run();
    });

    async function run() {
        /**
         * Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request
         * succeeds, or no impressions are saved, and this request fails.
         */
        await gapi.client.playablelocations.v3.logImpressions({
        }, {
            clientInfo: {
                apiClient: "Test string",
                applicationId: "Test string",
                applicationVersion: "Test string",
                deviceModel: "Test string",
                languageCode: "Test string",
                operatingSystem: "Test string",
                operatingSystemBuild: "Test string",
                platform: "Test string",
            },
            impressions: [
                {
                    gameObjectType: 42,
                    impressionType: "Test string",
                    locationName: "Test string",
                }            ],
            requestId: "Test string",
        });
        /**
         * Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this
         * request fails.
         */
        await gapi.client.playablelocations.v3.logPlayerReports({
        }, {
            clientInfo: {
                apiClient: "Test string",
                applicationId: "Test string",
                applicationVersion: "Test string",
                deviceModel: "Test string",
                languageCode: "Test string",
                operatingSystem: "Test string",
                operatingSystemBuild: "Test string",
                platform: "Test string",
            },
            playerReports: [
                {
                    languageCode: "Test string",
                    locationName: "Test string",
                    reasonDetails: "Test string",
                    reasons: [
                        "Test string"                    ],
                }            ],
            requestId: "Test string",
        });
        /**
         * Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different
         * results as the state of the world changes over time.
         */
        await gapi.client.playablelocations.v3.samplePlayableLocations({
        }, {
            areaFilter: {
                s2CellId: "Test string",
            },
            criteria: [
                {
                    fieldsToReturn: "Test string",
                    filter: {
                        includedTypes: [
                            "Test string"                        ],
                        maxLocationCount: 42,
                        spacing: {
                            minSpacingMeters: 42,
                            pointType: "Test string",
                        },
                    },
                    gameObjectType: 42,
                }            ],
        });
    }
});
