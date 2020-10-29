/* This is stub file for gapi.client.analyticsreporting definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201029

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('analyticsreporting', 'v4', () => {
        /** now we can use gapi.client.analyticsreporting */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your Google Analytics data */
            'https://www.googleapis.com/auth/analytics',
            /** View your Google Analytics data */
            'https://www.googleapis.com/auth/analytics.readonly',
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
        /** Returns the Analytics data. */
        await gapi.client.analyticsreporting.reports.batchGet({
        }, {
            reportRequests: [
                {
                    cohortGroup: {
                        cohorts: [
                            {
                                dateRange: {
                                    endDate: "Test string",
                                    startDate: "Test string",
                                },
                                name: "Test string",
                                type: "Test string",
                            }                        ],
                        lifetimeValue: true,
                    },
                    dateRanges: [
                        {
                            endDate: "Test string",
                            startDate: "Test string",
                        }                    ],
                    dimensionFilterClauses: [
                        {
                            filters: [
                                {
                                    caseSensitive: true,
                                    dimensionName: "Test string",
                                    expressions: [
                                        "Test string"                                    ],
                                    not: true,
                                    operator: "Test string",
                                }                            ],
                            operator: "Test string",
                        }                    ],
                    dimensions: [
                        {
                            histogramBuckets: [
                                "Test string"                            ],
                            name: "Test string",
                        }                    ],
                    filtersExpression: "Test string",
                    hideTotals: true,
                    hideValueRanges: true,
                    includeEmptyRows: true,
                    metricFilterClauses: [
                        {
                            filters: [
                                {
                                    comparisonValue: "Test string",
                                    metricName: "Test string",
                                    not: true,
                                    operator: "Test string",
                                }                            ],
                            operator: "Test string",
                        }                    ],
                    metrics: [
                        {
                            alias: "Test string",
                            expression: "Test string",
                            formattingType: "Test string",
                        }                    ],
                    orderBys: [
                        {
                            fieldName: "Test string",
                            orderType: "Test string",
                            sortOrder: "Test string",
                        }                    ],
                    pageSize: 42,
                    pageToken: "Test string",
                    pivots: [
                        {
                            dimensionFilterClauses: [
                                {
                                    filters: [
                                        {
                                            caseSensitive: true,
                                            dimensionName: "Test string",
                                            expressions: [
                                                "Test string"                                            ],
                                            not: true,
                                            operator: "Test string",
                                        }                                    ],
                                    operator: "Test string",
                                }                            ],
                            dimensions: [
                                {
                                    histogramBuckets: [
                                        "Test string"                                    ],
                                    name: "Test string",
                                }                            ],
                            maxGroupCount: 42,
                            metrics: [
                                {
                                    alias: "Test string",
                                    expression: "Test string",
                                    formattingType: "Test string",
                                }                            ],
                            startGroup: 42,
                        }                    ],
                    samplingLevel: "Test string",
                    segments: [
                        {
                            dynamicSegment: {
                                name: "Test string",
                                sessionSegment: {
                                    segmentFilters: [
                                        {
                                            not: true,
                                            sequenceSegment: {
                                                firstStepShouldMatchFirstHit: true,
                                                segmentSequenceSteps: [
                                                    {
                                                        matchType: "Test string",
                                                        orFiltersForSegment: [
                                                            {
                                                                segmentFilterClauses: [
                                                                    {
                                                                        dimensionFilter: {
                                                                            caseSensitive: true,
                                                                            dimensionName: "Test string",
                                                                            expressions: [
                                                                                "Test string"                                                                            ],
                                                                            maxComparisonValue: "Test string",
                                                                            minComparisonValue: "Test string",
                                                                            operator: "Test string",
                                                                        },
                                                                        metricFilter: {
                                                                            comparisonValue: "Test string",
                                                                            maxComparisonValue: "Test string",
                                                                            metricName: "Test string",
                                                                            operator: "Test string",
                                                                            scope: "Test string",
                                                                        },
                                                                        not: true,
                                                                    }                                                                ],
                                                            }                                                        ],
                                                    }                                                ],
                                            },
                                            simpleSegment: {
                                                orFiltersForSegment: [
                                                    {
                                                        segmentFilterClauses: [
                                                            {
                                                                dimensionFilter: {
                                                                    caseSensitive: true,
                                                                    dimensionName: "Test string",
                                                                    expressions: [
                                                                        "Test string"                                                                    ],
                                                                    maxComparisonValue: "Test string",
                                                                    minComparisonValue: "Test string",
                                                                    operator: "Test string",
                                                                },
                                                                metricFilter: {
                                                                    comparisonValue: "Test string",
                                                                    maxComparisonValue: "Test string",
                                                                    metricName: "Test string",
                                                                    operator: "Test string",
                                                                    scope: "Test string",
                                                                },
                                                                not: true,
                                                            }                                                        ],
                                                    }                                                ],
                                            },
                                        }                                    ],
                                },
                                userSegment: {
                                    segmentFilters: [
                                        {
                                            not: true,
                                            sequenceSegment: {
                                                firstStepShouldMatchFirstHit: true,
                                                segmentSequenceSteps: [
                                                    {
                                                        matchType: "Test string",
                                                        orFiltersForSegment: [
                                                            {
                                                                segmentFilterClauses: [
                                                                    {
                                                                        dimensionFilter: {
                                                                            caseSensitive: true,
                                                                            dimensionName: "Test string",
                                                                            expressions: [
                                                                                "Test string"                                                                            ],
                                                                            maxComparisonValue: "Test string",
                                                                            minComparisonValue: "Test string",
                                                                            operator: "Test string",
                                                                        },
                                                                        metricFilter: {
                                                                            comparisonValue: "Test string",
                                                                            maxComparisonValue: "Test string",
                                                                            metricName: "Test string",
                                                                            operator: "Test string",
                                                                            scope: "Test string",
                                                                        },
                                                                        not: true,
                                                                    }                                                                ],
                                                            }                                                        ],
                                                    }                                                ],
                                            },
                                            simpleSegment: {
                                                orFiltersForSegment: [
                                                    {
                                                        segmentFilterClauses: [
                                                            {
                                                                dimensionFilter: {
                                                                    caseSensitive: true,
                                                                    dimensionName: "Test string",
                                                                    expressions: [
                                                                        "Test string"                                                                    ],
                                                                    maxComparisonValue: "Test string",
                                                                    minComparisonValue: "Test string",
                                                                    operator: "Test string",
                                                                },
                                                                metricFilter: {
                                                                    comparisonValue: "Test string",
                                                                    maxComparisonValue: "Test string",
                                                                    metricName: "Test string",
                                                                    operator: "Test string",
                                                                    scope: "Test string",
                                                                },
                                                                not: true,
                                                            }                                                        ],
                                                    }                                                ],
                                            },
                                        }                                    ],
                                },
                            },
                            segmentId: "Test string",
                        }                    ],
                    viewId: "Test string",
                }            ],
            useResourceQuotas: true,
        });
        /** Returns User Activity data. */
        await gapi.client.analyticsreporting.userActivity.search({
        }, {
            activityTypes: [
                "Test string"            ],
            dateRange: {
                endDate: "Test string",
                startDate: "Test string",
            },
            pageSize: 42,
            pageToken: "Test string",
            user: {
                type: "Test string",
                userId: "Test string",
            },
            viewId: "Test string",
        });
    }
});
