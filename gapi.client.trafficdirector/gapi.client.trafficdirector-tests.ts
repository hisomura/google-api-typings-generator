/* This is stub file for gapi.client.trafficdirector definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200828

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('trafficdirector', 'v2', () => {
        /** now we can use gapi.client.trafficdirector */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
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
        await gapi.client.trafficdirector.discovery.client_status({
        }, {
            nodeMatchers: [
                {
                    nodeId: {
                        exact: "Test string",
                        ignoreCase: true,
                        prefix: "Test string",
                        regex: "Test string",
                        safeRegex: {
                            googleRe2: {
                                maxProgramSize: 42,
                            },
                            regex: "Test string",
                        },
                        suffix: "Test string",
                    },
                    nodeMetadatas: [
                        {
                            path: [
                                {
                                    key: "Test string",
                                }                            ],
                            value: {
                                boolMatch: true,
                                doubleMatch: {
                                    exact: 42,
                                    range: {
                                        end: 42,
                                        start: 42,
                                    },
                                },
                                listMatch: {
                                    oneOf: undefined,
                                },
                                nullMatch: {
                                },
                                presentMatch: true,
                                stringMatch: {
                                    exact: "Test string",
                                    ignoreCase: true,
                                    prefix: "Test string",
                                    regex: "Test string",
                                    safeRegex: {
                                        googleRe2: {
                                            maxProgramSize: 42,
                                        },
                                        regex: "Test string",
                                    },
                                    suffix: "Test string",
                                },
                            },
                        }                    ],
                }            ],
        });
    }
});
