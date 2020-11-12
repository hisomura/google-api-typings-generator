/* This is stub file for gapi.client.servicenetworking definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201111

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('servicenetworking', 'v1', () => {
        /** now we can use gapi.client.servicenetworking */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** Manage your Google API service configuration */
            'https://www.googleapis.com/auth/service.management',
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
         * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this
         * method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation
         * completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of
         * 1, corresponding to `Code.CANCELLED`.
         */
        await gapi.client.servicenetworking.operations.cancel({
            name: "Test string",
        }, {
        });
        /**
         * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support
         * this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
         */
        await gapi.client.servicenetworking.operations.delete({
            name: "Test string",
        });
        /** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
        await gapi.client.servicenetworking.operations.get({
            name: "Test string",
        });
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to
         * override the binding to use different resource name schemes, such as `users/∗/operations`. To override the binding, API services can add a binding such as
         * `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must
         * ensure the name binding is the parent resource, without the operations collection id.
         */
        await gapi.client.servicenetworking.operations.list({
            filter: "Test string",
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * For service producers, provisions a new subnet in a peered service's shared VPC network in the requested region and with the requested size that's expressed as a CIDR range (number of
         * leading bits of ipV4 network mask). The method checks against the assigned allocated ranges to find a non-conflicting IP address range. The method will reuse a subnet if subsequent
         * calls contain the same subnet name, region, and prefix length. This method will make producer's tenant project to be a shared VPC service project as needed.
         */
        await gapi.client.servicenetworking.services.addSubnetwork({
            parent: "Test string",
        }, {
            consumer: "Test string",
            consumerNetwork: "Test string",
            description: "Test string",
            ipPrefixLength: 42,
            region: "Test string",
            requestedAddress: "Test string",
            secondaryIpRangeSpecs: [
                {
                    ipPrefixLength: 42,
                    rangeName: "Test string",
                    requestedAddress: "Test string",
                }            ],
            subnetwork: "Test string",
            subnetworkUsers: [
                "Test string"            ],
        });
        /**
         * Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC
         * network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used
         * for all supported services in the service producer's organization, so it only needs to be invoked once.
         */
        await gapi.client.servicenetworking.services.connections.create({
            parent: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** List the private connections that are configured in a service consumer's VPC network. */
        await gapi.client.servicenetworking.services.connections.list({
            network: "Test string",
            parent: "Test string",
        });
        /** Updates the allocated ranges that are assigned to a connection. */
        await gapi.client.servicenetworking.services.connections.patch({
            force: true,
            name: "Test string",
            updateMask: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.update({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            existingDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            newDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsSuffix: "Test string",
            name: "Test string",
        });
        /** Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            name: "Test string",
        });
        /**
         * Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set
         * of roles. Each role is applied at only the granularity specified in the allowlist.
         */
        await gapi.client.servicenetworking.services.roles.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            policyBinding: [
                {
                    member: "Test string",
                    role: "Test string",
                }            ],
        });
        /** Disables VPC service controls for a connection. */
        await gapi.client.servicenetworking.services.disableVpcServiceControls({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
        });
        /**
         * Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC
         * network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used
         * for all supported services in the service producer's organization, so it only needs to be invoked once.
         */
        await gapi.client.servicenetworking.services.connections.create({
            parent: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** List the private connections that are configured in a service consumer's VPC network. */
        await gapi.client.servicenetworking.services.connections.list({
            network: "Test string",
            parent: "Test string",
        });
        /** Updates the allocated ranges that are assigned to a connection. */
        await gapi.client.servicenetworking.services.connections.patch({
            force: true,
            name: "Test string",
            updateMask: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.update({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            existingDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            newDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsSuffix: "Test string",
            name: "Test string",
        });
        /** Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            name: "Test string",
        });
        /**
         * Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set
         * of roles. Each role is applied at only the granularity specified in the allowlist.
         */
        await gapi.client.servicenetworking.services.roles.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            policyBinding: [
                {
                    member: "Test string",
                    role: "Test string",
                }            ],
        });
        /** Enables VPC service controls for a connection. */
        await gapi.client.servicenetworking.services.enableVpcServiceControls({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
        });
        /**
         * Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC
         * network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used
         * for all supported services in the service producer's organization, so it only needs to be invoked once.
         */
        await gapi.client.servicenetworking.services.connections.create({
            parent: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** List the private connections that are configured in a service consumer's VPC network. */
        await gapi.client.servicenetworking.services.connections.list({
            network: "Test string",
            parent: "Test string",
        });
        /** Updates the allocated ranges that are assigned to a connection. */
        await gapi.client.servicenetworking.services.connections.patch({
            force: true,
            name: "Test string",
            updateMask: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.update({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            existingDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            newDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsSuffix: "Test string",
            name: "Test string",
        });
        /** Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            name: "Test string",
        });
        /**
         * Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set
         * of roles. Each role is applied at only the granularity specified in the allowlist.
         */
        await gapi.client.servicenetworking.services.roles.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            policyBinding: [
                {
                    member: "Test string",
                    role: "Test string",
                }            ],
        });
        /**
         * Service producers can use this method to find a currently unused range within consumer allocated ranges. This returned range is not reserved, and not guaranteed to remain unused. It
         * will validate previously provided allocated ranges, find non-conflicting sub-range of requested size (expressed in number of leading bits of ipv4 network mask, as in CIDR range
         * notation).
         */
        await gapi.client.servicenetworking.services.searchRange({
            parent: "Test string",
        }, {
            ipPrefixLength: 42,
            network: "Test string",
        });
        /**
         * Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC
         * network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used
         * for all supported services in the service producer's organization, so it only needs to be invoked once.
         */
        await gapi.client.servicenetworking.services.connections.create({
            parent: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** List the private connections that are configured in a service consumer's VPC network. */
        await gapi.client.servicenetworking.services.connections.list({
            network: "Test string",
            parent: "Test string",
        });
        /** Updates the allocated ranges that are assigned to a connection. */
        await gapi.client.servicenetworking.services.connections.patch({
            force: true,
            name: "Test string",
            updateMask: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.update({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            existingDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            newDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsSuffix: "Test string",
            name: "Test string",
        });
        /** Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            name: "Test string",
        });
        /**
         * Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set
         * of roles. Each role is applied at only the granularity specified in the allowlist.
         */
        await gapi.client.servicenetworking.services.roles.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            policyBinding: [
                {
                    member: "Test string",
                    role: "Test string",
                }            ],
        });
        /**
         * Service producers use this method to validate if the consumer provided network, project and requested range are valid. This allows them to use a fail-fast mechanism for consumer
         * requests, and not have to wait for AddSubnetwork operation completion to determine if user request is invalid.
         */
        await gapi.client.servicenetworking.services.validate({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            consumerProject: {
                projectNum: "Test string",
            },
            rangeReservation: {
                ipPrefixLength: 42,
                secondaryRangeIpPrefixLengths: [
                    42                ],
            },
            validateNetwork: true,
        });
        /**
         * Creates a private connection that establishes a VPC Network Peering connection to a VPC network in the service producer's organization. The administrator of the service consumer's VPC
         * network invokes this method. The administrator must assign one or more allocated IP ranges for provisioning subnetworks in the service producer's VPC network. This connection is used
         * for all supported services in the service producer's organization, so it only needs to be invoked once.
         */
        await gapi.client.servicenetworking.services.connections.create({
            parent: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** List the private connections that are configured in a service consumer's VPC network. */
        await gapi.client.servicenetworking.services.connections.list({
            network: "Test string",
            parent: "Test string",
        });
        /** Updates the allocated ranges that are assigned to a connection. */
        await gapi.client.servicenetworking.services.connections.patch({
            force: true,
            name: "Test string",
            updateMask: "Test string",
        }, {
            network: "Test string",
            peering: "Test string",
            reservedPeeringRanges: [
                "Test string"            ],
            service: "Test string",
        });
        /** Service producers can use this method to add DNS record sets to private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to remove DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to update DNS record sets from private DNS zones in the shared producer host project. */
        await gapi.client.servicenetworking.services.dnsRecordSets.update({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            existingDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            newDnsRecordSet: {
                data: [
                    "Test string"                ],
                domain: "Test string",
                ttl: "Test string",
                type: "Test string",
            },
            zone: "Test string",
        });
        /** Service producers can use this method to add private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            dnsSuffix: "Test string",
            name: "Test string",
        });
        /** Service producers can use this method to remove private DNS zones in the shared producer host project and matching peering zones in the consumer project. */
        await gapi.client.servicenetworking.services.dnsZones.remove({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            name: "Test string",
        });
        /**
         * Service producers can use this method to add roles in the shared VPC host project. Each role is bound to the provided member. Each role must be selected from within an allowlisted set
         * of roles. Each role is applied at only the granularity specified in the allowlist.
         */
        await gapi.client.servicenetworking.services.roles.add({
            parent: "Test string",
        }, {
            consumerNetwork: "Test string",
            policyBinding: [
                {
                    member: "Test string",
                    role: "Test string",
                }            ],
        });
    }
});
