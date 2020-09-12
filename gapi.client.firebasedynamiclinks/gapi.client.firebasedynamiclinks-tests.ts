/* This is stub file for gapi.client.firebasedynamiclinks definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200911

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('firebasedynamiclinks', 'v1', () => {
        /** now we can use gapi.client.firebasedynamiclinks */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and administer all your Firebase data and settings */
            'https://www.googleapis.com/auth/firebase',
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
         * Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will
         * not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must
         * be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the
         * request must be owned by requester's Firebase project.
         */
        await gapi.client.firebasedynamiclinks.managedShortLinks.create({
        }, {
            dynamicLinkInfo: {
                analyticsInfo: {
                    googlePlayAnalytics: {
                        gclid: "Test string",
                        utmCampaign: "Test string",
                        utmContent: "Test string",
                        utmMedium: "Test string",
                        utmSource: "Test string",
                        utmTerm: "Test string",
                    },
                    itunesConnectAnalytics: {
                        at: "Test string",
                        ct: "Test string",
                        mt: "Test string",
                        pt: "Test string",
                    },
                },
                androidInfo: {
                    androidFallbackLink: "Test string",
                    androidLink: "Test string",
                    androidMinPackageVersionCode: "Test string",
                    androidPackageName: "Test string",
                },
                desktopInfo: {
                    desktopFallbackLink: "Test string",
                },
                domainUriPrefix: "Test string",
                dynamicLinkDomain: "Test string",
                iosInfo: {
                    iosAppStoreId: "Test string",
                    iosBundleId: "Test string",
                    iosCustomScheme: "Test string",
                    iosFallbackLink: "Test string",
                    iosIpadBundleId: "Test string",
                    iosIpadFallbackLink: "Test string",
                    iosMinimumVersion: "Test string",
                },
                link: "Test string",
                navigationInfo: {
                    enableForcedRedirect: true,
                },
                socialMetaTagInfo: {
                    socialDescription: "Test string",
                    socialImageLink: "Test string",
                    socialTitle: "Test string",
                },
            },
            longDynamicLink: "Test string",
            name: "Test string",
            sdkVersion: "Test string",
            suffix: {
                customSuffix: "Test string",
                option: "Test string",
            },
        });
        /**
         * Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not
         * expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by
         * requester's Firebase project.
         */
        await gapi.client.firebasedynamiclinks.shortLinks.create({
        }, {
            dynamicLinkInfo: {
                analyticsInfo: {
                    googlePlayAnalytics: {
                        gclid: "Test string",
                        utmCampaign: "Test string",
                        utmContent: "Test string",
                        utmMedium: "Test string",
                        utmSource: "Test string",
                        utmTerm: "Test string",
                    },
                    itunesConnectAnalytics: {
                        at: "Test string",
                        ct: "Test string",
                        mt: "Test string",
                        pt: "Test string",
                    },
                },
                androidInfo: {
                    androidFallbackLink: "Test string",
                    androidLink: "Test string",
                    androidMinPackageVersionCode: "Test string",
                    androidPackageName: "Test string",
                },
                desktopInfo: {
                    desktopFallbackLink: "Test string",
                },
                domainUriPrefix: "Test string",
                dynamicLinkDomain: "Test string",
                iosInfo: {
                    iosAppStoreId: "Test string",
                    iosBundleId: "Test string",
                    iosCustomScheme: "Test string",
                    iosFallbackLink: "Test string",
                    iosIpadBundleId: "Test string",
                    iosIpadFallbackLink: "Test string",
                    iosMinimumVersion: "Test string",
                },
                link: "Test string",
                navigationInfo: {
                    enableForcedRedirect: true,
                },
                socialMetaTagInfo: {
                    socialDescription: "Test string",
                    socialImageLink: "Test string",
                    socialTitle: "Test string",
                },
            },
            longDynamicLink: "Test string",
            sdkVersion: "Test string",
            suffix: {
                customSuffix: "Test string",
                option: "Test string",
            },
        });
        /** Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens. */
        await gapi.client.firebasedynamiclinks.v1.getLinkStats({
            durationDays: "Test string",
            dynamicLink: "Test string",
            sdkVersion: "Test string",
        });
        /** Get iOS strong/weak-match info for post-install attribution. */
        await gapi.client.firebasedynamiclinks.v1.installAttribution({
        }, {
            appInstallationTime: "Test string",
            bundleId: "Test string",
            device: {
                deviceModelName: "Test string",
                languageCode: "Test string",
                languageCodeFromWebview: "Test string",
                languageCodeRaw: "Test string",
                screenResolutionHeight: "Test string",
                screenResolutionWidth: "Test string",
                timezone: "Test string",
            },
            iosVersion: "Test string",
            retrievalMethod: "Test string",
            sdkVersion: "Test string",
            uniqueMatchLinkToCheck: "Test string",
            visualStyle: "Test string",
        });
        /** Get iOS reopen attribution for app universal link open deeplinking. */
        await gapi.client.firebasedynamiclinks.v1.reopenAttribution({
        }, {
            bundleId: "Test string",
            requestedLink: "Test string",
            sdkVersion: "Test string",
        });
    }
});
