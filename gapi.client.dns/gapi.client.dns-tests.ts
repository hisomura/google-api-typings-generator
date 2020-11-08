/* This is stub file for gapi.client.dns definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201031

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('dns', 'v1', () => {
        /** now we can use gapi.client.dns */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform.read-only',
            /** View your DNS records hosted by Google Cloud DNS */
            'https://www.googleapis.com/auth/ndev.clouddns.readonly',
            /** View and manage your DNS records hosted by Google Cloud DNS */
            'https://www.googleapis.com/auth/ndev.clouddns.readwrite',
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
        /** Atomically update the ResourceRecordSet collection. */
        await gapi.client.dns.changes.create({
            clientOperationId: "Test string",
            managedZone: "Test string",
            project: "Test string",
        }, {
            additions: [
                {
                    kind: "Test string",
                    name: "Test string",
                    routingPolicy: {
                        geoPolicy: {
                            failovers: [
                                {
                                    kind: "Test string",
                                    location: "Test string",
                                    rrdatas: [
                                        "Test string"                                    ],
                                    signatureRrdatas: [
                                        "Test string"                                    ],
                                }                            ],
                            items: [
                                {
                                    kind: "Test string",
                                    location: "Test string",
                                    rrdatas: [
                                        "Test string"                                    ],
                                    signatureRrdatas: [
                                        "Test string"                                    ],
                                }                            ],
                            kind: "Test string",
                        },
                        kind: "Test string",
                        wrrPolicy: {
                            items: [
                                {
                                    kind: "Test string",
                                    rrdatas: [
                                        "Test string"                                    ],
                                    signatureRrdatas: [
                                        "Test string"                                    ],
                                    weight: 42,
                                }                            ],
                            kind: "Test string",
                        },
                    },
                    rrdatas: [
                        "Test string"                    ],
                    signatureRrdatas: [
                        "Test string"                    ],
                    ttl: 42,
                    type: "Test string",
                }            ],
            deletions: [
                {
                    kind: "Test string",
                    name: "Test string",
                    routingPolicy: {
                        geoPolicy: {
                            failovers: [
                                {
                                    kind: "Test string",
                                    location: "Test string",
                                    rrdatas: [
                                        "Test string"                                    ],
                                    signatureRrdatas: [
                                        "Test string"                                    ],
                                }                            ],
                            items: [
                                {
                                    kind: "Test string",
                                    location: "Test string",
                                    rrdatas: [
                                        "Test string"                                    ],
                                    signatureRrdatas: [
                                        "Test string"                                    ],
                                }                            ],
                            kind: "Test string",
                        },
                        kind: "Test string",
                        wrrPolicy: {
                            items: [
                                {
                                    kind: "Test string",
                                    rrdatas: [
                                        "Test string"                                    ],
                                    signatureRrdatas: [
                                        "Test string"                                    ],
                                    weight: 42,
                                }                            ],
                            kind: "Test string",
                        },
                    },
                    rrdatas: [
                        "Test string"                    ],
                    signatureRrdatas: [
                        "Test string"                    ],
                    ttl: 42,
                    type: "Test string",
                }            ],
            id: "Test string",
            isServing: true,
            kind: "Test string",
            startTime: "Test string",
            status: "Test string",
        });
        /** Fetch the representation of an existing Change. */
        await gapi.client.dns.changes.get({
            changeId: "Test string",
            clientOperationId: "Test string",
            managedZone: "Test string",
            project: "Test string",
        });
        /** Enumerate Changes to a ResourceRecordSet collection. */
        await gapi.client.dns.changes.list({
            managedZone: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            project: "Test string",
            sortBy: "Test string",
            sortOrder: "Test string",
        });
        /** Fetch the representation of an existing DnsKey. */
        await gapi.client.dns.dnsKeys.get({
            clientOperationId: "Test string",
            digestType: "Test string",
            dnsKeyId: "Test string",
            managedZone: "Test string",
            project: "Test string",
        });
        /** Enumerate DnsKeys to a ResourceRecordSet collection. */
        await gapi.client.dns.dnsKeys.list({
            digestType: "Test string",
            managedZone: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            project: "Test string",
        });
        /** Fetch the representation of an existing Operation. */
        await gapi.client.dns.managedZoneOperations.get({
            clientOperationId: "Test string",
            managedZone: "Test string",
            operation: "Test string",
            project: "Test string",
        });
        /** Enumerate Operations for the given ManagedZone. */
        await gapi.client.dns.managedZoneOperations.list({
            managedZone: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            project: "Test string",
            sortBy: "Test string",
        });
        /** Create a new ManagedZone. */
        await gapi.client.dns.managedZones.create({
            clientOperationId: "Test string",
            project: "Test string",
        }, {
            creationTime: "Test string",
            description: "Test string",
            dnsName: "Test string",
            dnssecConfig: {
                defaultKeySpecs: [
                    {
                        algorithm: "Test string",
                        keyLength: 42,
                        keyType: "Test string",
                        kind: "Test string",
                    }                ],
                kind: "Test string",
                nonExistence: "Test string",
                state: "Test string",
            },
            forwardingConfig: {
                kind: "Test string",
                targetNameServers: [
                    {
                        forwardingPath: "Test string",
                        ipv4Address: "Test string",
                        kind: "Test string",
                    }                ],
            },
            id: "Test string",
            kind: "Test string",
            labels: {
                A: "Test string"            },
            name: "Test string",
            nameServers: [
                "Test string"            ],
            nameServerSet: "Test string",
            peeringConfig: {
                kind: "Test string",
                targetNetwork: {
                    deactivateTime: "Test string",
                    kind: "Test string",
                    networkUrl: "Test string",
                },
            },
            privateVisibilityConfig: {
                kind: "Test string",
                networks: [
                    {
                        kind: "Test string",
                        networkUrl: "Test string",
                    }                ],
            },
            reverseLookupConfig: {
                kind: "Test string",
            },
            visibility: "Test string",
        });
        /** Delete a previously created ManagedZone. */
        await gapi.client.dns.managedZones.delete({
            clientOperationId: "Test string",
            managedZone: "Test string",
            project: "Test string",
        });
        /** Fetch the representation of an existing ManagedZone. */
        await gapi.client.dns.managedZones.get({
            clientOperationId: "Test string",
            managedZone: "Test string",
            project: "Test string",
        });
        /** Enumerate ManagedZones that have been created but not yet deleted. */
        await gapi.client.dns.managedZones.list({
            dnsName: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            project: "Test string",
        });
        /** Apply a partial update to an existing ManagedZone. */
        await gapi.client.dns.managedZones.patch({
            clientOperationId: "Test string",
            managedZone: "Test string",
            project: "Test string",
        }, {
            creationTime: "Test string",
            description: "Test string",
            dnsName: "Test string",
            dnssecConfig: {
                defaultKeySpecs: [
                    {
                        algorithm: "Test string",
                        keyLength: 42,
                        keyType: "Test string",
                        kind: "Test string",
                    }                ],
                kind: "Test string",
                nonExistence: "Test string",
                state: "Test string",
            },
            forwardingConfig: {
                kind: "Test string",
                targetNameServers: [
                    {
                        forwardingPath: "Test string",
                        ipv4Address: "Test string",
                        kind: "Test string",
                    }                ],
            },
            id: "Test string",
            kind: "Test string",
            labels: {
                A: "Test string"            },
            name: "Test string",
            nameServers: [
                "Test string"            ],
            nameServerSet: "Test string",
            peeringConfig: {
                kind: "Test string",
                targetNetwork: {
                    deactivateTime: "Test string",
                    kind: "Test string",
                    networkUrl: "Test string",
                },
            },
            privateVisibilityConfig: {
                kind: "Test string",
                networks: [
                    {
                        kind: "Test string",
                        networkUrl: "Test string",
                    }                ],
            },
            reverseLookupConfig: {
                kind: "Test string",
            },
            visibility: "Test string",
        });
        /** Update an existing ManagedZone. */
        await gapi.client.dns.managedZones.update({
            clientOperationId: "Test string",
            managedZone: "Test string",
            project: "Test string",
        }, {
            creationTime: "Test string",
            description: "Test string",
            dnsName: "Test string",
            dnssecConfig: {
                defaultKeySpecs: [
                    {
                        algorithm: "Test string",
                        keyLength: 42,
                        keyType: "Test string",
                        kind: "Test string",
                    }                ],
                kind: "Test string",
                nonExistence: "Test string",
                state: "Test string",
            },
            forwardingConfig: {
                kind: "Test string",
                targetNameServers: [
                    {
                        forwardingPath: "Test string",
                        ipv4Address: "Test string",
                        kind: "Test string",
                    }                ],
            },
            id: "Test string",
            kind: "Test string",
            labels: {
                A: "Test string"            },
            name: "Test string",
            nameServers: [
                "Test string"            ],
            nameServerSet: "Test string",
            peeringConfig: {
                kind: "Test string",
                targetNetwork: {
                    deactivateTime: "Test string",
                    kind: "Test string",
                    networkUrl: "Test string",
                },
            },
            privateVisibilityConfig: {
                kind: "Test string",
                networks: [
                    {
                        kind: "Test string",
                        networkUrl: "Test string",
                    }                ],
            },
            reverseLookupConfig: {
                kind: "Test string",
            },
            visibility: "Test string",
        });
        /** Create a new Policy */
        await gapi.client.dns.policies.create({
            clientOperationId: "Test string",
            project: "Test string",
        }, {
            alternativeNameServerConfig: {
                kind: "Test string",
                targetNameServers: [
                    {
                        forwardingPath: "Test string",
                        ipv4Address: "Test string",
                        kind: "Test string",
                    }                ],
            },
            description: "Test string",
            enableInboundForwarding: true,
            enableLogging: true,
            id: "Test string",
            kind: "Test string",
            name: "Test string",
            networks: [
                {
                    kind: "Test string",
                    networkUrl: "Test string",
                }            ],
        });
        /** Delete a previously created Policy. Will fail if the policy is still being referenced by a network. */
        await gapi.client.dns.policies.delete({
            clientOperationId: "Test string",
            policy: "Test string",
            project: "Test string",
        });
        /** Fetch the representation of an existing Policy. */
        await gapi.client.dns.policies.get({
            clientOperationId: "Test string",
            policy: "Test string",
            project: "Test string",
        });
        /** Enumerate all Policies associated with a project. */
        await gapi.client.dns.policies.list({
            maxResults: 42,
            pageToken: "Test string",
            project: "Test string",
        });
        /** Apply a partial update to an existing Policy. */
        await gapi.client.dns.policies.patch({
            clientOperationId: "Test string",
            policy: "Test string",
            project: "Test string",
        }, {
            alternativeNameServerConfig: {
                kind: "Test string",
                targetNameServers: [
                    {
                        forwardingPath: "Test string",
                        ipv4Address: "Test string",
                        kind: "Test string",
                    }                ],
            },
            description: "Test string",
            enableInboundForwarding: true,
            enableLogging: true,
            id: "Test string",
            kind: "Test string",
            name: "Test string",
            networks: [
                {
                    kind: "Test string",
                    networkUrl: "Test string",
                }            ],
        });
        /** Update an existing Policy. */
        await gapi.client.dns.policies.update({
            clientOperationId: "Test string",
            policy: "Test string",
            project: "Test string",
        }, {
            alternativeNameServerConfig: {
                kind: "Test string",
                targetNameServers: [
                    {
                        forwardingPath: "Test string",
                        ipv4Address: "Test string",
                        kind: "Test string",
                    }                ],
            },
            description: "Test string",
            enableInboundForwarding: true,
            enableLogging: true,
            id: "Test string",
            kind: "Test string",
            name: "Test string",
            networks: [
                {
                    kind: "Test string",
                    networkUrl: "Test string",
                }            ],
        });
        /** Fetch the representation of an existing Project. */
        await gapi.client.dns.projects.get({
            clientOperationId: "Test string",
            project: "Test string",
        });
        /** Enumerate ResourceRecordSets that have been created but not yet deleted. */
        await gapi.client.dns.resourceRecordSets.list({
            managedZone: "Test string",
            maxResults: 42,
            name: "Test string",
            pageToken: "Test string",
            project: "Test string",
            type: "Test string",
        });
    }
});
