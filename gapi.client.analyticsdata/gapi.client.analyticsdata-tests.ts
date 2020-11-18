/* This is stub file for gapi.client.analyticsdata definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201117

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('analyticsdata', 'v1alpha', () => {
        /** now we can use gapi.client.analyticsdata */

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
        /**
         * Returns metadata for dimensions and metrics available in reporting methods. Used to explore the dimensions and metrics. In this method, a Google Analytics GA4 Property Identifier is
         * specified in the request, and the metadata response includes Custom dimensions and metrics as well as Universal metadata. For example if a custom metric with parameter name
         * `levels_unlocked` is registered to a property, the Metadata response will contain `customEvent:levels_unlocked`. Universal metadata are dimensions and metrics applicable to any property
         * such as `country` and `totalUsers`.
         */
        await gapi.client.analyticsdata.properties.getMetadata({
            name: "Test string",
        });
        /** The Google Analytics Realtime API returns a customized report of realtime event data for your property. These reports show events and usage from the last 30 minutes. */
        await gapi.client.analyticsdata.properties.runRealtimeReport({
            property: "Test string",
        }, {
            dimensionFilter: {
                andGroup: {
                    expressions: undefined,
                },
                filter: {
                    betweenFilter: {
                        fromValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                        toValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    fieldName: "Test string",
                    inListFilter: {
                        caseSensitive: true,
                        values: [
                            "Test string"                        ],
                    },
                    nullFilter: true,
                    numericFilter: {
                        operation: "Test string",
                        value: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    stringFilter: {
                        caseSensitive: true,
                        matchType: "Test string",
                        value: "Test string",
                    },
                },
                notExpression: undefined,
                orGroup: {
                    expressions: undefined,
                },
            },
            dimensions: [
                {
                    dimensionExpression: {
                        concatenate: {
                            delimiter: "Test string",
                            dimensionNames: [
                                "Test string"                            ],
                        },
                        lowerCase: {
                            dimensionName: "Test string",
                        },
                        upperCase: {
                            dimensionName: "Test string",
                        },
                    },
                    name: "Test string",
                }            ],
            limit: "Test string",
            metricAggregations: [
                "Test string"            ],
            metricFilter: {
                andGroup: {
                    expressions: undefined,
                },
                filter: {
                    betweenFilter: {
                        fromValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                        toValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    fieldName: "Test string",
                    inListFilter: {
                        caseSensitive: true,
                        values: [
                            "Test string"                        ],
                    },
                    nullFilter: true,
                    numericFilter: {
                        operation: "Test string",
                        value: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    stringFilter: {
                        caseSensitive: true,
                        matchType: "Test string",
                        value: "Test string",
                    },
                },
                notExpression: undefined,
                orGroup: {
                    expressions: undefined,
                },
            },
            metrics: [
                {
                    expression: "Test string",
                    invisible: true,
                    name: "Test string",
                }            ],
            orderBys: [
                {
                    desc: true,
                    dimension: {
                        dimensionName: "Test string",
                        orderType: "Test string",
                    },
                    metric: {
                        metricName: "Test string",
                    },
                    pivot: {
                        metricName: "Test string",
                        pivotSelections: [
                            {
                                dimensionName: "Test string",
                                dimensionValue: "Test string",
                            }                        ],
                    },
                }            ],
            returnPropertyQuota: true,
        });
        /** Returns multiple pivot reports in a batch. All reports must be for the same Entity. */
        await gapi.client.analyticsdata.v1alpha.batchRunPivotReports({
        }, {
            entity: {
                propertyId: "Test string",
            },
            requests: [
                {
                    cohortSpec: {
                        cohortReportSettings: {
                            accumulate: true,
                        },
                        cohorts: [
                            {
                                dateRange: {
                                    endDate: "Test string",
                                    name: "Test string",
                                    startDate: "Test string",
                                },
                                dimension: "Test string",
                                name: "Test string",
                            }                        ],
                        cohortsRange: {
                            endOffset: 42,
                            granularity: "Test string",
                            startOffset: 42,
                        },
                    },
                    currencyCode: "Test string",
                    dateRanges: [
                        {
                            endDate: "Test string",
                            name: "Test string",
                            startDate: "Test string",
                        }                    ],
                    dimensionFilter: {
                        andGroup: {
                            expressions: undefined,
                        },
                        filter: {
                            betweenFilter: {
                                fromValue: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                                toValue: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                            },
                            fieldName: "Test string",
                            inListFilter: {
                                caseSensitive: true,
                                values: [
                                    "Test string"                                ],
                            },
                            nullFilter: true,
                            numericFilter: {
                                operation: "Test string",
                                value: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                            },
                            stringFilter: {
                                caseSensitive: true,
                                matchType: "Test string",
                                value: "Test string",
                            },
                        },
                        notExpression: undefined,
                        orGroup: {
                            expressions: undefined,
                        },
                    },
                    dimensions: [
                        {
                            dimensionExpression: {
                                concatenate: {
                                    delimiter: "Test string",
                                    dimensionNames: [
                                        "Test string"                                    ],
                                },
                                lowerCase: {
                                    dimensionName: "Test string",
                                },
                                upperCase: {
                                    dimensionName: "Test string",
                                },
                            },
                            name: "Test string",
                        }                    ],
                    entity: {
                        propertyId: "Test string",
                    },
                    keepEmptyRows: true,
                    metricFilter: {
                        andGroup: {
                            expressions: undefined,
                        },
                        filter: {
                            betweenFilter: {
                                fromValue: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                                toValue: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                            },
                            fieldName: "Test string",
                            inListFilter: {
                                caseSensitive: true,
                                values: [
                                    "Test string"                                ],
                            },
                            nullFilter: true,
                            numericFilter: {
                                operation: "Test string",
                                value: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                            },
                            stringFilter: {
                                caseSensitive: true,
                                matchType: "Test string",
                                value: "Test string",
                            },
                        },
                        notExpression: undefined,
                        orGroup: {
                            expressions: undefined,
                        },
                    },
                    metrics: [
                        {
                            expression: "Test string",
                            invisible: true,
                            name: "Test string",
                        }                    ],
                    pivots: [
                        {
                            fieldNames: [
                                "Test string"                            ],
                            limit: "Test string",
                            metricAggregations: [
                                "Test string"                            ],
                            offset: "Test string",
                            orderBys: [
                                {
                                    desc: true,
                                    dimension: {
                                        dimensionName: "Test string",
                                        orderType: "Test string",
                                    },
                                    metric: {
                                        metricName: "Test string",
                                    },
                                    pivot: {
                                        metricName: "Test string",
                                        pivotSelections: [
                                            {
                                                dimensionName: "Test string",
                                                dimensionValue: "Test string",
                                            }                                        ],
                                    },
                                }                            ],
                        }                    ],
                    returnPropertyQuota: true,
                }            ],
        });
        /** Returns multiple reports in a batch. All reports must be for the same Entity. */
        await gapi.client.analyticsdata.v1alpha.batchRunReports({
        }, {
            entity: {
                propertyId: "Test string",
            },
            requests: [
                {
                    cohortSpec: {
                        cohortReportSettings: {
                            accumulate: true,
                        },
                        cohorts: [
                            {
                                dateRange: {
                                    endDate: "Test string",
                                    name: "Test string",
                                    startDate: "Test string",
                                },
                                dimension: "Test string",
                                name: "Test string",
                            }                        ],
                        cohortsRange: {
                            endOffset: 42,
                            granularity: "Test string",
                            startOffset: 42,
                        },
                    },
                    currencyCode: "Test string",
                    dateRanges: [
                        {
                            endDate: "Test string",
                            name: "Test string",
                            startDate: "Test string",
                        }                    ],
                    dimensionFilter: {
                        andGroup: {
                            expressions: undefined,
                        },
                        filter: {
                            betweenFilter: {
                                fromValue: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                                toValue: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                            },
                            fieldName: "Test string",
                            inListFilter: {
                                caseSensitive: true,
                                values: [
                                    "Test string"                                ],
                            },
                            nullFilter: true,
                            numericFilter: {
                                operation: "Test string",
                                value: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                            },
                            stringFilter: {
                                caseSensitive: true,
                                matchType: "Test string",
                                value: "Test string",
                            },
                        },
                        notExpression: undefined,
                        orGroup: {
                            expressions: undefined,
                        },
                    },
                    dimensions: [
                        {
                            dimensionExpression: {
                                concatenate: {
                                    delimiter: "Test string",
                                    dimensionNames: [
                                        "Test string"                                    ],
                                },
                                lowerCase: {
                                    dimensionName: "Test string",
                                },
                                upperCase: {
                                    dimensionName: "Test string",
                                },
                            },
                            name: "Test string",
                        }                    ],
                    entity: {
                        propertyId: "Test string",
                    },
                    keepEmptyRows: true,
                    limit: "Test string",
                    metricAggregations: [
                        "Test string"                    ],
                    metricFilter: {
                        andGroup: {
                            expressions: undefined,
                        },
                        filter: {
                            betweenFilter: {
                                fromValue: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                                toValue: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                            },
                            fieldName: "Test string",
                            inListFilter: {
                                caseSensitive: true,
                                values: [
                                    "Test string"                                ],
                            },
                            nullFilter: true,
                            numericFilter: {
                                operation: "Test string",
                                value: {
                                    doubleValue: 42,
                                    int64Value: "Test string",
                                },
                            },
                            stringFilter: {
                                caseSensitive: true,
                                matchType: "Test string",
                                value: "Test string",
                            },
                        },
                        notExpression: undefined,
                        orGroup: {
                            expressions: undefined,
                        },
                    },
                    metrics: [
                        {
                            expression: "Test string",
                            invisible: true,
                            name: "Test string",
                        }                    ],
                    offset: "Test string",
                    orderBys: [
                        {
                            desc: true,
                            dimension: {
                                dimensionName: "Test string",
                                orderType: "Test string",
                            },
                            metric: {
                                metricName: "Test string",
                            },
                            pivot: {
                                metricName: "Test string",
                                pivotSelections: [
                                    {
                                        dimensionName: "Test string",
                                        dimensionValue: "Test string",
                                    }                                ],
                            },
                        }                    ],
                    returnPropertyQuota: true,
                }            ],
        });
        /**
         * Returns a customized pivot report of your Google Analytics event data. Pivot reports are more advanced and expressive formats than regular reports. In a pivot report, dimensions are
         * only visible if they are included in a pivot. Multiple pivots can be specified to further dissect your data.
         */
        await gapi.client.analyticsdata.v1alpha.runPivotReport({
        }, {
            cohortSpec: {
                cohortReportSettings: {
                    accumulate: true,
                },
                cohorts: [
                    {
                        dateRange: {
                            endDate: "Test string",
                            name: "Test string",
                            startDate: "Test string",
                        },
                        dimension: "Test string",
                        name: "Test string",
                    }                ],
                cohortsRange: {
                    endOffset: 42,
                    granularity: "Test string",
                    startOffset: 42,
                },
            },
            currencyCode: "Test string",
            dateRanges: [
                {
                    endDate: "Test string",
                    name: "Test string",
                    startDate: "Test string",
                }            ],
            dimensionFilter: {
                andGroup: {
                    expressions: undefined,
                },
                filter: {
                    betweenFilter: {
                        fromValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                        toValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    fieldName: "Test string",
                    inListFilter: {
                        caseSensitive: true,
                        values: [
                            "Test string"                        ],
                    },
                    nullFilter: true,
                    numericFilter: {
                        operation: "Test string",
                        value: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    stringFilter: {
                        caseSensitive: true,
                        matchType: "Test string",
                        value: "Test string",
                    },
                },
                notExpression: undefined,
                orGroup: {
                    expressions: undefined,
                },
            },
            dimensions: [
                {
                    dimensionExpression: {
                        concatenate: {
                            delimiter: "Test string",
                            dimensionNames: [
                                "Test string"                            ],
                        },
                        lowerCase: {
                            dimensionName: "Test string",
                        },
                        upperCase: {
                            dimensionName: "Test string",
                        },
                    },
                    name: "Test string",
                }            ],
            entity: {
                propertyId: "Test string",
            },
            keepEmptyRows: true,
            metricFilter: {
                andGroup: {
                    expressions: undefined,
                },
                filter: {
                    betweenFilter: {
                        fromValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                        toValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    fieldName: "Test string",
                    inListFilter: {
                        caseSensitive: true,
                        values: [
                            "Test string"                        ],
                    },
                    nullFilter: true,
                    numericFilter: {
                        operation: "Test string",
                        value: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    stringFilter: {
                        caseSensitive: true,
                        matchType: "Test string",
                        value: "Test string",
                    },
                },
                notExpression: undefined,
                orGroup: {
                    expressions: undefined,
                },
            },
            metrics: [
                {
                    expression: "Test string",
                    invisible: true,
                    name: "Test string",
                }            ],
            pivots: [
                {
                    fieldNames: [
                        "Test string"                    ],
                    limit: "Test string",
                    metricAggregations: [
                        "Test string"                    ],
                    offset: "Test string",
                    orderBys: [
                        {
                            desc: true,
                            dimension: {
                                dimensionName: "Test string",
                                orderType: "Test string",
                            },
                            metric: {
                                metricName: "Test string",
                            },
                            pivot: {
                                metricName: "Test string",
                                pivotSelections: [
                                    {
                                        dimensionName: "Test string",
                                        dimensionValue: "Test string",
                                    }                                ],
                            },
                        }                    ],
                }            ],
            returnPropertyQuota: true,
        });
        /**
         * Returns a customized report of your Google Analytics event data. Reports contain statistics derived from data collected by the Google Analytics tracking code. The data returned from the
         * API is as a table with columns for the requested dimensions and metrics. Metrics are individual measurements of user activity on your property, such as active users or event count.
         * Dimensions break down metrics across some common criteria, such as country or event name.
         */
        await gapi.client.analyticsdata.v1alpha.runReport({
        }, {
            cohortSpec: {
                cohortReportSettings: {
                    accumulate: true,
                },
                cohorts: [
                    {
                        dateRange: {
                            endDate: "Test string",
                            name: "Test string",
                            startDate: "Test string",
                        },
                        dimension: "Test string",
                        name: "Test string",
                    }                ],
                cohortsRange: {
                    endOffset: 42,
                    granularity: "Test string",
                    startOffset: 42,
                },
            },
            currencyCode: "Test string",
            dateRanges: [
                {
                    endDate: "Test string",
                    name: "Test string",
                    startDate: "Test string",
                }            ],
            dimensionFilter: {
                andGroup: {
                    expressions: undefined,
                },
                filter: {
                    betweenFilter: {
                        fromValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                        toValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    fieldName: "Test string",
                    inListFilter: {
                        caseSensitive: true,
                        values: [
                            "Test string"                        ],
                    },
                    nullFilter: true,
                    numericFilter: {
                        operation: "Test string",
                        value: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    stringFilter: {
                        caseSensitive: true,
                        matchType: "Test string",
                        value: "Test string",
                    },
                },
                notExpression: undefined,
                orGroup: {
                    expressions: undefined,
                },
            },
            dimensions: [
                {
                    dimensionExpression: {
                        concatenate: {
                            delimiter: "Test string",
                            dimensionNames: [
                                "Test string"                            ],
                        },
                        lowerCase: {
                            dimensionName: "Test string",
                        },
                        upperCase: {
                            dimensionName: "Test string",
                        },
                    },
                    name: "Test string",
                }            ],
            entity: {
                propertyId: "Test string",
            },
            keepEmptyRows: true,
            limit: "Test string",
            metricAggregations: [
                "Test string"            ],
            metricFilter: {
                andGroup: {
                    expressions: undefined,
                },
                filter: {
                    betweenFilter: {
                        fromValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                        toValue: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    fieldName: "Test string",
                    inListFilter: {
                        caseSensitive: true,
                        values: [
                            "Test string"                        ],
                    },
                    nullFilter: true,
                    numericFilter: {
                        operation: "Test string",
                        value: {
                            doubleValue: 42,
                            int64Value: "Test string",
                        },
                    },
                    stringFilter: {
                        caseSensitive: true,
                        matchType: "Test string",
                        value: "Test string",
                    },
                },
                notExpression: undefined,
                orGroup: {
                    expressions: undefined,
                },
            },
            metrics: [
                {
                    expression: "Test string",
                    invisible: true,
                    name: "Test string",
                }            ],
            offset: "Test string",
            orderBys: [
                {
                    desc: true,
                    dimension: {
                        dimensionName: "Test string",
                        orderType: "Test string",
                    },
                    metric: {
                        metricName: "Test string",
                    },
                    pivot: {
                        metricName: "Test string",
                        pivotSelections: [
                            {
                                dimensionName: "Test string",
                                dimensionValue: "Test string",
                            }                        ],
                    },
                }            ],
            returnPropertyQuota: true,
        });
    }
});
