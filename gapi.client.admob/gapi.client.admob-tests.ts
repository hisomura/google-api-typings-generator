/* This is stub file for gapi.client.admob definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200905

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('admob', 'v1', () => {
        /** now we can use gapi.client.admob */

        run();
    });

    async function run() {
        /** Gets information about the specified AdMob publisher account. */
        await gapi.client.admob.accounts.get({
            name: "Test string",
        });
        /** Generates an AdMob Mediation report based on the provided report specification. */
        await gapi.client.admob.accounts.mediationReport.generate({
            parent: "Test string",
        }, {
            reportSpec: {
                dateRange: {
                    endDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                    startDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                },
                dimensionFilters: [
                    {
                        dimension: "Test string",
                        matchesAny: {
                            values: [
                                "Test string"                            ],
                        },
                    }                ],
                dimensions: [
                    "Test string"                ],
                localizationSettings: {
                    currencyCode: "Test string",
                    languageCode: "Test string",
                },
                maxReportRows: 42,
                metrics: [
                    "Test string"                ],
                sortConditions: [
                    {
                        dimension: "Test string",
                        metric: "Test string",
                        order: "Test string",
                    }                ],
                timeZone: "Test string",
            },
        });
        /** Generates an AdMob Network report based on the provided report specification. */
        await gapi.client.admob.accounts.networkReport.generate({
            parent: "Test string",
        }, {
            reportSpec: {
                dateRange: {
                    endDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                    startDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                },
                dimensionFilters: [
                    {
                        dimension: "Test string",
                        matchesAny: {
                            values: [
                                "Test string"                            ],
                        },
                    }                ],
                dimensions: [
                    "Test string"                ],
                localizationSettings: {
                    currencyCode: "Test string",
                    languageCode: "Test string",
                },
                maxReportRows: 42,
                metrics: [
                    "Test string"                ],
                sortConditions: [
                    {
                        dimension: "Test string",
                        metric: "Test string",
                        order: "Test string",
                    }                ],
                timeZone: "Test string",
            },
        });
        /** Lists the AdMob publisher account accessible with the client credential. Currently, all credentials have access to at most one AdMob account. */
        await gapi.client.admob.accounts.list({
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Generates an AdMob Mediation report based on the provided report specification. */
        await gapi.client.admob.accounts.mediationReport.generate({
            parent: "Test string",
        }, {
            reportSpec: {
                dateRange: {
                    endDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                    startDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                },
                dimensionFilters: [
                    {
                        dimension: "Test string",
                        matchesAny: {
                            values: [
                                "Test string"                            ],
                        },
                    }                ],
                dimensions: [
                    "Test string"                ],
                localizationSettings: {
                    currencyCode: "Test string",
                    languageCode: "Test string",
                },
                maxReportRows: 42,
                metrics: [
                    "Test string"                ],
                sortConditions: [
                    {
                        dimension: "Test string",
                        metric: "Test string",
                        order: "Test string",
                    }                ],
                timeZone: "Test string",
            },
        });
        /** Generates an AdMob Network report based on the provided report specification. */
        await gapi.client.admob.accounts.networkReport.generate({
            parent: "Test string",
        }, {
            reportSpec: {
                dateRange: {
                    endDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                    startDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                },
                dimensionFilters: [
                    {
                        dimension: "Test string",
                        matchesAny: {
                            values: [
                                "Test string"                            ],
                        },
                    }                ],
                dimensions: [
                    "Test string"                ],
                localizationSettings: {
                    currencyCode: "Test string",
                    languageCode: "Test string",
                },
                maxReportRows: 42,
                metrics: [
                    "Test string"                ],
                sortConditions: [
                    {
                        dimension: "Test string",
                        metric: "Test string",
                        order: "Test string",
                    }                ],
                timeZone: "Test string",
            },
        });
    }
});
