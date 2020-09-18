/* This is stub file for gapi.client.vectortile definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200916

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('vectortile', 'v1', () => {
        /** now we can use gapi.client.vectortile */

        run();
    });

    async function run() {
        /** Gets a feature tile by its tile resource name. */
        await gapi.client.vectortile.featuretiles.get({
            "clientInfo.apiClient": "Test string",
            "clientInfo.applicationId": "Test string",
            "clientInfo.applicationVersion": "Test string",
            "clientInfo.deviceModel": "Test string",
            "clientInfo.operatingSystem": "Test string",
            "clientInfo.platform": "Test string",
            "clientInfo.userId": "Test string",
            clientTileVersionId: "Test string",
            enableDetailedHighwayTypes: true,
            enableFeatureNames: true,
            enableModeledVolumes: true,
            enablePoliticalFeatures: true,
            enablePrivateRoads: true,
            enableUnclippedBuildings: true,
            languageCode: "Test string",
            name: "Test string",
            regionCode: "Test string",
        });
        /** Gets a terrain tile by its tile resource name. */
        await gapi.client.vectortile.terraintiles.get({
            altitudePrecisionCentimeters: 42,
            "clientInfo.apiClient": "Test string",
            "clientInfo.applicationId": "Test string",
            "clientInfo.applicationVersion": "Test string",
            "clientInfo.deviceModel": "Test string",
            "clientInfo.operatingSystem": "Test string",
            "clientInfo.platform": "Test string",
            "clientInfo.userId": "Test string",
            maxElevationResolutionCells: 42,
            minElevationResolutionCells: 42,
            name: "Test string",
            terrainFormats: "Test string",
        });
    }
});
