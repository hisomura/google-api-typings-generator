/* This is stub file for gapi.client.realtimebidding definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200923

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('realtimebidding', 'v1', () => {
        /** now we can use gapi.client.realtimebidding */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** See, create, edit, and delete your Authorized Buyers and Open Bidding account entities */
            'https://www.googleapis.com/auth/realtime-bidding',
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
         * Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds
         * the user to a user list.
         */
        await gapi.client.realtimebidding.buyers.getRemarketingTag({
            name: "Test string",
        });
        /** Creates a creative. */
        await gapi.client.realtimebidding.buyers.creatives.create({
            parent: "Test string",
        }, {
            accountId: "Test string",
            adChoicesDestinationUrl: "Test string",
            advertiserName: "Test string",
            agencyId: "Test string",
            apiUpdateTime: "Test string",
            creativeFormat: "Test string",
            creativeId: "Test string",
            creativeServingDecision: {
                adTechnologyProviders: {
                    detectedProviderIds: [
                        "Test string"                    ],
                    hasUnidentifiedProvider: true,
                },
                chinaServingStatus: {
                    status: "Test string",
                    topics: [
                        {
                            evidences: [
                                {
                                    destinationNotCrawlable: {
                                        crawledUrl: "Test string",
                                        crawlTime: "Test string",
                                        reason: "Test string",
                                    },
                                    destinationNotWorking: {
                                        dnsError: "Test string",
                                        expandedUrl: "Test string",
                                        httpError: 42,
                                        invalidPage: "Test string",
                                        lastCheckTime: "Test string",
                                        platform: "Test string",
                                        redirectionError: "Test string",
                                        urlRejected: "Test string",
                                    },
                                    destinationUrl: {
                                        destinationUrl: "Test string",
                                    },
                                    domainCall: {
                                        topHttpCallDomains: [
                                            {
                                                domain: "Test string",
                                                httpCallCount: 42,
                                            }                                        ],
                                        totalHttpCallCount: 42,
                                    },
                                    downloadSize: {
                                        topUrlDownloadSizeBreakdowns: [
                                            {
                                                downloadSizeKb: 42,
                                                normalizedUrl: "Test string",
                                            }                                        ],
                                        totalDownloadSizeKb: 42,
                                    },
                                    httpCall: {
                                        urls: [
                                            "Test string"                                        ],
                                    },
                                    httpCookie: {
                                        cookieNames: [
                                            "Test string"                                        ],
                                        maxCookieCount: 42,
                                    },
                                }                            ],
                            helpCenterUrl: "Test string",
                            policyTopic: "Test string",
                        }                    ],
                },
                dealsServingStatus: {
                    status: "Test string",
                    topics: [
                        {
                            evidences: [
                                {
                                    destinationNotCrawlable: {
                                        crawledUrl: "Test string",
                                        crawlTime: "Test string",
                                        reason: "Test string",
                                    },
                                    destinationNotWorking: {
                                        dnsError: "Test string",
                                        expandedUrl: "Test string",
                                        httpError: 42,
                                        invalidPage: "Test string",
                                        lastCheckTime: "Test string",
                                        platform: "Test string",
                                        redirectionError: "Test string",
                                        urlRejected: "Test string",
                                    },
                                    destinationUrl: {
                                        destinationUrl: "Test string",
                                    },
                                    domainCall: {
                                        topHttpCallDomains: [
                                            {
                                                domain: "Test string",
                                                httpCallCount: 42,
                                            }                                        ],
                                        totalHttpCallCount: 42,
                                    },
                                    downloadSize: {
                                        topUrlDownloadSizeBreakdowns: [
                                            {
                                                downloadSizeKb: 42,
                                                normalizedUrl: "Test string",
                                            }                                        ],
                                        totalDownloadSizeKb: 42,
                                    },
                                    httpCall: {
                                        urls: [
                                            "Test string"                                        ],
                                    },
                                    httpCookie: {
                                        cookieNames: [
                                            "Test string"                                        ],
                                        maxCookieCount: 42,
                                    },
                                }                            ],
                            helpCenterUrl: "Test string",
                            policyTopic: "Test string",
                        }                    ],
                },
                detectedAdvertisers: [
                    {
                        advertiserId: "Test string",
                        advertiserName: "Test string",
                        brandId: "Test string",
                        brandName: "Test string",
                    }                ],
                detectedAttributes: [
                    "Test string"                ],
                detectedClickThroughUrls: [
                    "Test string"                ],
                detectedDomains: [
                    "Test string"                ],
                detectedLanguages: [
                    "Test string"                ],
                detectedProductCategories: [
                    42                ],
                detectedSensitiveCategories: [
                    42                ],
                detectedVendorIds: [
                    42                ],
                lastStatusUpdate: "Test string",
                openAuctionServingStatus: {
                    status: "Test string",
                    topics: [
                        {
                            evidences: [
                                {
                                    destinationNotCrawlable: {
                                        crawledUrl: "Test string",
                                        crawlTime: "Test string",
                                        reason: "Test string",
                                    },
                                    destinationNotWorking: {
                                        dnsError: "Test string",
                                        expandedUrl: "Test string",
                                        httpError: 42,
                                        invalidPage: "Test string",
                                        lastCheckTime: "Test string",
                                        platform: "Test string",
                                        redirectionError: "Test string",
                                        urlRejected: "Test string",
                                    },
                                    destinationUrl: {
                                        destinationUrl: "Test string",
                                    },
                                    domainCall: {
                                        topHttpCallDomains: [
                                            {
                                                domain: "Test string",
                                                httpCallCount: 42,
                                            }                                        ],
                                        totalHttpCallCount: 42,
                                    },
                                    downloadSize: {
                                        topUrlDownloadSizeBreakdowns: [
                                            {
                                                downloadSizeKb: 42,
                                                normalizedUrl: "Test string",
                                            }                                        ],
                                        totalDownloadSizeKb: 42,
                                    },
                                    httpCall: {
                                        urls: [
                                            "Test string"                                        ],
                                    },
                                    httpCookie: {
                                        cookieNames: [
                                            "Test string"                                        ],
                                        maxCookieCount: 42,
                                    },
                                }                            ],
                            helpCenterUrl: "Test string",
                            policyTopic: "Test string",
                        }                    ],
                },
                russiaServingStatus: {
                    status: "Test string",
                    topics: [
                        {
                            evidences: [
                                {
                                    destinationNotCrawlable: {
                                        crawledUrl: "Test string",
                                        crawlTime: "Test string",
                                        reason: "Test string",
                                    },
                                    destinationNotWorking: {
                                        dnsError: "Test string",
                                        expandedUrl: "Test string",
                                        httpError: 42,
                                        invalidPage: "Test string",
                                        lastCheckTime: "Test string",
                                        platform: "Test string",
                                        redirectionError: "Test string",
                                        urlRejected: "Test string",
                                    },
                                    destinationUrl: {
                                        destinationUrl: "Test string",
                                    },
                                    domainCall: {
                                        topHttpCallDomains: [
                                            {
                                                domain: "Test string",
                                                httpCallCount: 42,
                                            }                                        ],
                                        totalHttpCallCount: 42,
                                    },
                                    downloadSize: {
                                        topUrlDownloadSizeBreakdowns: [
                                            {
                                                downloadSizeKb: 42,
                                                normalizedUrl: "Test string",
                                            }                                        ],
                                        totalDownloadSizeKb: 42,
                                    },
                                    httpCall: {
                                        urls: [
                                            "Test string"                                        ],
                                    },
                                    httpCookie: {
                                        cookieNames: [
                                            "Test string"                                        ],
                                        maxCookieCount: 42,
                                    },
                                }                            ],
                            helpCenterUrl: "Test string",
                            policyTopic: "Test string",
                        }                    ],
                },
            },
            dealIds: [
                "Test string"            ],
            declaredAttributes: [
                "Test string"            ],
            declaredClickThroughUrls: [
                "Test string"            ],
            declaredRestrictedCategories: [
                "Test string"            ],
            declaredVendorIds: [
                42            ],
            html: {
                height: 42,
                snippet: "Test string",
                width: 42,
            },
            impressionTrackingUrls: [
                "Test string"            ],
            name: "Test string",
            native: {
                advertiserName: "Test string",
                appIcon: {
                    height: 42,
                    url: "Test string",
                    width: 42,
                },
                body: "Test string",
                callToAction: "Test string",
                clickLinkUrl: "Test string",
                clickTrackingUrl: "Test string",
                headline: "Test string",
                image: {
                    height: 42,
                    url: "Test string",
                    width: 42,
                },
                logo: {
                    height: 42,
                    url: "Test string",
                    width: 42,
                },
                priceDisplayText: "Test string",
                starRating: 42,
                videoUrl: "Test string",
            },
            restrictedCategories: [
                "Test string"            ],
            version: 42,
            video: {
                videoMetadata: {
                    duration: "Test string",
                    isValidVast: true,
                    isVpaid: true,
                    mediaFiles: [
                        {
                            bitrate: "Test string",
                            mimeType: "Test string",
                        }                    ],
                    skipOffset: "Test string",
                    vastVersion: "Test string",
                },
                videoUrl: "Test string",
                videoVastXml: "Test string",
            },
        });
        /** Gets a creative. */
        await gapi.client.realtimebidding.buyers.creatives.get({
            name: "Test string",
            view: "Test string",
        });
        /** Lists creatives. */
        await gapi.client.realtimebidding.buyers.creatives.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            view: "Test string",
        });
        /** Updates a creative. */
        await gapi.client.realtimebidding.buyers.creatives.patch({
            name: "Test string",
            updateMask: "Test string",
        }, {
            accountId: "Test string",
            adChoicesDestinationUrl: "Test string",
            advertiserName: "Test string",
            agencyId: "Test string",
            apiUpdateTime: "Test string",
            creativeFormat: "Test string",
            creativeId: "Test string",
            creativeServingDecision: {
                adTechnologyProviders: {
                    detectedProviderIds: [
                        "Test string"                    ],
                    hasUnidentifiedProvider: true,
                },
                chinaServingStatus: {
                    status: "Test string",
                    topics: [
                        {
                            evidences: [
                                {
                                    destinationNotCrawlable: {
                                        crawledUrl: "Test string",
                                        crawlTime: "Test string",
                                        reason: "Test string",
                                    },
                                    destinationNotWorking: {
                                        dnsError: "Test string",
                                        expandedUrl: "Test string",
                                        httpError: 42,
                                        invalidPage: "Test string",
                                        lastCheckTime: "Test string",
                                        platform: "Test string",
                                        redirectionError: "Test string",
                                        urlRejected: "Test string",
                                    },
                                    destinationUrl: {
                                        destinationUrl: "Test string",
                                    },
                                    domainCall: {
                                        topHttpCallDomains: [
                                            {
                                                domain: "Test string",
                                                httpCallCount: 42,
                                            }                                        ],
                                        totalHttpCallCount: 42,
                                    },
                                    downloadSize: {
                                        topUrlDownloadSizeBreakdowns: [
                                            {
                                                downloadSizeKb: 42,
                                                normalizedUrl: "Test string",
                                            }                                        ],
                                        totalDownloadSizeKb: 42,
                                    },
                                    httpCall: {
                                        urls: [
                                            "Test string"                                        ],
                                    },
                                    httpCookie: {
                                        cookieNames: [
                                            "Test string"                                        ],
                                        maxCookieCount: 42,
                                    },
                                }                            ],
                            helpCenterUrl: "Test string",
                            policyTopic: "Test string",
                        }                    ],
                },
                dealsServingStatus: {
                    status: "Test string",
                    topics: [
                        {
                            evidences: [
                                {
                                    destinationNotCrawlable: {
                                        crawledUrl: "Test string",
                                        crawlTime: "Test string",
                                        reason: "Test string",
                                    },
                                    destinationNotWorking: {
                                        dnsError: "Test string",
                                        expandedUrl: "Test string",
                                        httpError: 42,
                                        invalidPage: "Test string",
                                        lastCheckTime: "Test string",
                                        platform: "Test string",
                                        redirectionError: "Test string",
                                        urlRejected: "Test string",
                                    },
                                    destinationUrl: {
                                        destinationUrl: "Test string",
                                    },
                                    domainCall: {
                                        topHttpCallDomains: [
                                            {
                                                domain: "Test string",
                                                httpCallCount: 42,
                                            }                                        ],
                                        totalHttpCallCount: 42,
                                    },
                                    downloadSize: {
                                        topUrlDownloadSizeBreakdowns: [
                                            {
                                                downloadSizeKb: 42,
                                                normalizedUrl: "Test string",
                                            }                                        ],
                                        totalDownloadSizeKb: 42,
                                    },
                                    httpCall: {
                                        urls: [
                                            "Test string"                                        ],
                                    },
                                    httpCookie: {
                                        cookieNames: [
                                            "Test string"                                        ],
                                        maxCookieCount: 42,
                                    },
                                }                            ],
                            helpCenterUrl: "Test string",
                            policyTopic: "Test string",
                        }                    ],
                },
                detectedAdvertisers: [
                    {
                        advertiserId: "Test string",
                        advertiserName: "Test string",
                        brandId: "Test string",
                        brandName: "Test string",
                    }                ],
                detectedAttributes: [
                    "Test string"                ],
                detectedClickThroughUrls: [
                    "Test string"                ],
                detectedDomains: [
                    "Test string"                ],
                detectedLanguages: [
                    "Test string"                ],
                detectedProductCategories: [
                    42                ],
                detectedSensitiveCategories: [
                    42                ],
                detectedVendorIds: [
                    42                ],
                lastStatusUpdate: "Test string",
                openAuctionServingStatus: {
                    status: "Test string",
                    topics: [
                        {
                            evidences: [
                                {
                                    destinationNotCrawlable: {
                                        crawledUrl: "Test string",
                                        crawlTime: "Test string",
                                        reason: "Test string",
                                    },
                                    destinationNotWorking: {
                                        dnsError: "Test string",
                                        expandedUrl: "Test string",
                                        httpError: 42,
                                        invalidPage: "Test string",
                                        lastCheckTime: "Test string",
                                        platform: "Test string",
                                        redirectionError: "Test string",
                                        urlRejected: "Test string",
                                    },
                                    destinationUrl: {
                                        destinationUrl: "Test string",
                                    },
                                    domainCall: {
                                        topHttpCallDomains: [
                                            {
                                                domain: "Test string",
                                                httpCallCount: 42,
                                            }                                        ],
                                        totalHttpCallCount: 42,
                                    },
                                    downloadSize: {
                                        topUrlDownloadSizeBreakdowns: [
                                            {
                                                downloadSizeKb: 42,
                                                normalizedUrl: "Test string",
                                            }                                        ],
                                        totalDownloadSizeKb: 42,
                                    },
                                    httpCall: {
                                        urls: [
                                            "Test string"                                        ],
                                    },
                                    httpCookie: {
                                        cookieNames: [
                                            "Test string"                                        ],
                                        maxCookieCount: 42,
                                    },
                                }                            ],
                            helpCenterUrl: "Test string",
                            policyTopic: "Test string",
                        }                    ],
                },
                russiaServingStatus: {
                    status: "Test string",
                    topics: [
                        {
                            evidences: [
                                {
                                    destinationNotCrawlable: {
                                        crawledUrl: "Test string",
                                        crawlTime: "Test string",
                                        reason: "Test string",
                                    },
                                    destinationNotWorking: {
                                        dnsError: "Test string",
                                        expandedUrl: "Test string",
                                        httpError: 42,
                                        invalidPage: "Test string",
                                        lastCheckTime: "Test string",
                                        platform: "Test string",
                                        redirectionError: "Test string",
                                        urlRejected: "Test string",
                                    },
                                    destinationUrl: {
                                        destinationUrl: "Test string",
                                    },
                                    domainCall: {
                                        topHttpCallDomains: [
                                            {
                                                domain: "Test string",
                                                httpCallCount: 42,
                                            }                                        ],
                                        totalHttpCallCount: 42,
                                    },
                                    downloadSize: {
                                        topUrlDownloadSizeBreakdowns: [
                                            {
                                                downloadSizeKb: 42,
                                                normalizedUrl: "Test string",
                                            }                                        ],
                                        totalDownloadSizeKb: 42,
                                    },
                                    httpCall: {
                                        urls: [
                                            "Test string"                                        ],
                                    },
                                    httpCookie: {
                                        cookieNames: [
                                            "Test string"                                        ],
                                        maxCookieCount: 42,
                                    },
                                }                            ],
                            helpCenterUrl: "Test string",
                            policyTopic: "Test string",
                        }                    ],
                },
            },
            dealIds: [
                "Test string"            ],
            declaredAttributes: [
                "Test string"            ],
            declaredClickThroughUrls: [
                "Test string"            ],
            declaredRestrictedCategories: [
                "Test string"            ],
            declaredVendorIds: [
                42            ],
            html: {
                height: 42,
                snippet: "Test string",
                width: 42,
            },
            impressionTrackingUrls: [
                "Test string"            ],
            name: "Test string",
            native: {
                advertiserName: "Test string",
                appIcon: {
                    height: 42,
                    url: "Test string",
                    width: 42,
                },
                body: "Test string",
                callToAction: "Test string",
                clickLinkUrl: "Test string",
                clickTrackingUrl: "Test string",
                headline: "Test string",
                image: {
                    height: 42,
                    url: "Test string",
                    width: 42,
                },
                logo: {
                    height: 42,
                    url: "Test string",
                    width: 42,
                },
                priceDisplayText: "Test string",
                starRating: 42,
                videoUrl: "Test string",
            },
            restrictedCategories: [
                "Test string"            ],
            version: 42,
            video: {
                videoMetadata: {
                    duration: "Test string",
                    isValidVast: true,
                    isVpaid: true,
                    mediaFiles: [
                        {
                            bitrate: "Test string",
                            mimeType: "Test string",
                        }                    ],
                    skipOffset: "Test string",
                    vastVersion: "Test string",
                },
                videoUrl: "Test string",
                videoVastXml: "Test string",
            },
        });
        /** Change the status of a user list to CLOSED. This prevents new users from being added to the user list. */
        await gapi.client.realtimebidding.buyers.userLists.close({
            name: "Test string",
        }, {
        });
        /** Create a new user list. */
        await gapi.client.realtimebidding.buyers.userLists.create({
            parent: "Test string",
        }, {
            description: "Test string",
            displayName: "Test string",
            membershipDurationDays: "Test string",
            name: "Test string",
            status: "Test string",
            urlRestriction: {
                endDate: {
                    day: 42,
                    month: 42,
                    year: 42,
                },
                restrictionType: "Test string",
                startDate: {
                    day: 42,
                    month: 42,
                    year: 42,
                },
                url: "Test string",
            },
        });
        /** Gets a user list by its name. */
        await gapi.client.realtimebidding.buyers.userLists.get({
            name: "Test string",
        });
        /**
         * Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds
         * the user to a user list.
         */
        await gapi.client.realtimebidding.buyers.userLists.getRemarketingTag({
            name: "Test string",
        });
        /** Lists the user lists visible to the current user. */
        await gapi.client.realtimebidding.buyers.userLists.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Change the status of a user list to OPEN. This allows new users to be added to the user list. */
        await gapi.client.realtimebidding.buyers.userLists.open({
            name: "Test string",
        }, {
        });
        /** Update the given user list. Only user lists with URLRestrictions can be updated. */
        await gapi.client.realtimebidding.buyers.userLists.update({
            name: "Test string",
        }, {
            description: "Test string",
            displayName: "Test string",
            membershipDurationDays: "Test string",
            name: "Test string",
            status: "Test string",
            urlRestriction: {
                endDate: {
                    day: 42,
                    month: 42,
                    year: 42,
                },
                restrictionType: "Test string",
                startDate: {
                    day: 42,
                    month: 42,
                    year: 42,
                },
                url: "Test string",
            },
        });
    }
});
