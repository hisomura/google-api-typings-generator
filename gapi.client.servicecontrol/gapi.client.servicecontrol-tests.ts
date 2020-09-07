/* This is stub file for gapi.client.servicecontrol definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200821

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('servicecontrol', 'v2', () => {
        /** now we can use gapi.client.servicecontrol */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** Manage your Google Service Control data */
            'https://www.googleapis.com/auth/servicecontrol',
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
         * Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service
         * Infrastructure](/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the
         * operation is executed. For more information, see [Admission Control](/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation
         * delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation refers
         * to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified service. For more
         * information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
         */
        await gapi.client.servicecontrol.services.check({
            serviceName: "Test string",
        }, {
            attributes: {
                api: {
                    operation: "Test string",
                    protocol: "Test string",
                    service: "Test string",
                    version: "Test string",
                },
                destination: {
                    ip: "Test string",
                    labels: {
                        A: "Test string"                    },
                    port: "Test string",
                    principal: "Test string",
                    regionCode: "Test string",
                },
                extensions: [
                    {
                        A: 42                    }                ],
                origin: {
                    ip: "Test string",
                    labels: {
                        A: "Test string"                    },
                    port: "Test string",
                    principal: "Test string",
                    regionCode: "Test string",
                },
                request: {
                    auth: {
                        accessLevels: [
                            "Test string"                        ],
                        audiences: [
                            "Test string"                        ],
                        claims: {
                            A: 42                        },
                        presenter: "Test string",
                        principal: "Test string",
                    },
                    headers: {
                        A: "Test string"                    },
                    host: "Test string",
                    id: "Test string",
                    method: "Test string",
                    path: "Test string",
                    protocol: "Test string",
                    query: "Test string",
                    reason: "Test string",
                    scheme: "Test string",
                    size: "Test string",
                    time: "Test string",
                },
                resource: {
                    labels: {
                        A: "Test string"                    },
                    name: "Test string",
                    service: "Test string",
                    type: "Test string",
                },
                response: {
                    code: "Test string",
                    headers: {
                        A: "Test string"                    },
                    size: "Test string",
                    time: "Test string",
                },
                source: {
                    ip: "Test string",
                    labels: {
                        A: "Test string"                    },
                    port: "Test string",
                    principal: "Test string",
                    regionCode: "Test string",
                },
            },
            resources: [
                {
                    name: "Test string",
                    permission: "Test string",
                    type: "Test string",
                }            ],
            serviceConfigId: "Test string",
        });
        /**
         * Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service
         * Infrastructure](/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more
         * information, see [Telemetry Reporting](/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call. It
         * is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see
         * [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
         */
        await gapi.client.servicecontrol.services.report({
            serviceName: "Test string",
        }, {
            operations: [
                {
                    api: {
                        operation: "Test string",
                        protocol: "Test string",
                        service: "Test string",
                        version: "Test string",
                    },
                    destination: {
                        ip: "Test string",
                        labels: {
                            A: "Test string"                        },
                        port: "Test string",
                        principal: "Test string",
                        regionCode: "Test string",
                    },
                    extensions: [
                        {
                            A: 42                        }                    ],
                    origin: {
                        ip: "Test string",
                        labels: {
                            A: "Test string"                        },
                        port: "Test string",
                        principal: "Test string",
                        regionCode: "Test string",
                    },
                    request: {
                        auth: {
                            accessLevels: [
                                "Test string"                            ],
                            audiences: [
                                "Test string"                            ],
                            claims: {
                                A: 42                            },
                            presenter: "Test string",
                            principal: "Test string",
                        },
                        headers: {
                            A: "Test string"                        },
                        host: "Test string",
                        id: "Test string",
                        method: "Test string",
                        path: "Test string",
                        protocol: "Test string",
                        query: "Test string",
                        reason: "Test string",
                        scheme: "Test string",
                        size: "Test string",
                        time: "Test string",
                    },
                    resource: {
                        labels: {
                            A: "Test string"                        },
                        name: "Test string",
                        service: "Test string",
                        type: "Test string",
                    },
                    response: {
                        code: "Test string",
                        headers: {
                            A: "Test string"                        },
                        size: "Test string",
                        time: "Test string",
                    },
                    source: {
                        ip: "Test string",
                        labels: {
                            A: "Test string"                        },
                        port: "Test string",
                        principal: "Test string",
                        regionCode: "Test string",
                    },
                }            ],
            serviceConfigId: "Test string",
        });
    }
});
