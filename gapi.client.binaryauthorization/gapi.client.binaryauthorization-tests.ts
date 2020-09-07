/* This is stub file for gapi.client.binaryauthorization definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('binaryauthorization', 'v1', () => {
        /** now we can use gapi.client.binaryauthorization */

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
        /**
         * A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image. There is at most one policy per project. All image admission
         * requests are permitted if a project has no policy. Gets the policy for this project. Returns a default policy if the project does not have one.
         */
        await gapi.client.binaryauthorization.projects.getPolicy({
            name: "Test string",
        });
        /**
         * Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the
         * attestor already exists.
         */
        await gapi.client.binaryauthorization.projects.attestors.create({
            attestorId: "Test string",
            parent: "Test string",
        }, {
            description: "Test string",
            name: "Test string",
            updateTime: "Test string",
            userOwnedGrafeasNote: {
                delegationServiceAccountEmail: "Test string",
                noteReference: "Test string",
                publicKeys: [
                    {
                        asciiArmoredPgpPublicKey: "Test string",
                        comment: "Test string",
                        id: "Test string",
                        pkixPublicKey: {
                            publicKeyPem: "Test string",
                            signatureAlgorithm: "Test string",
                        },
                    }                ],
            },
        });
        /** Deletes an attestor. Returns NOT_FOUND if the attestor does not exist. */
        await gapi.client.binaryauthorization.projects.attestors.delete({
            name: "Test string",
        });
        /** Gets an attestor. Returns NOT_FOUND if the attestor does not exist. */
        await gapi.client.binaryauthorization.projects.attestors.get({
            name: "Test string",
        });
        /** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
        await gapi.client.binaryauthorization.projects.attestors.getIamPolicy({
            "options.requestedPolicyVersion": 42,
            resource: "Test string",
        });
        /** Lists attestors. Returns INVALID_ARGUMENT if the project does not exist. */
        await gapi.client.binaryauthorization.projects.attestors.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
        await gapi.client.binaryauthorization.projects.attestors.setIamPolicy({
            resource: "Test string",
        }, {
            policy: {
                bindings: [
                    {
                        bindingId: "Test string",
                        condition: {
                            description: "Test string",
                            expression: "Test string",
                            location: "Test string",
                            title: "Test string",
                        },
                        members: [
                            "Test string"                        ],
                        role: "Test string",
                    }                ],
                etag: "Test string",
                version: 42,
            },
        });
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This
         * operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         */
        await gapi.client.binaryauthorization.projects.attestors.testIamPermissions({
            resource: "Test string",
        }, {
            permissions: [
                "Test string"            ],
        });
        /** Updates an attestor. Returns NOT_FOUND if the attestor does not exist. */
        await gapi.client.binaryauthorization.projects.attestors.update({
            name: "Test string",
        }, {
            description: "Test string",
            name: "Test string",
            updateTime: "Test string",
            userOwnedGrafeasNote: {
                delegationServiceAccountEmail: "Test string",
                noteReference: "Test string",
                publicKeys: [
                    {
                        asciiArmoredPgpPublicKey: "Test string",
                        comment: "Test string",
                        id: "Test string",
                        pkixPublicKey: {
                            publicKeyPem: "Test string",
                            signatureAlgorithm: "Test string",
                        },
                    }                ],
            },
        });
        /** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
        await gapi.client.binaryauthorization.projects.policy.getIamPolicy({
            "options.requestedPolicyVersion": 42,
            resource: "Test string",
        });
        /** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
        await gapi.client.binaryauthorization.projects.policy.setIamPolicy({
            resource: "Test string",
        }, {
            policy: {
                bindings: [
                    {
                        bindingId: "Test string",
                        condition: {
                            description: "Test string",
                            expression: "Test string",
                            location: "Test string",
                            title: "Test string",
                        },
                        members: [
                            "Test string"                        ],
                        role: "Test string",
                    }                ],
                etag: "Test string",
                version: 42,
            },
        });
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This
         * operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         */
        await gapi.client.binaryauthorization.projects.policy.testIamPermissions({
            resource: "Test string",
        }, {
            permissions: [
                "Test string"            ],
        });
        /**
         * Creates or updates a project's policy, and returns a copy of the new policy. A policy is always updated as a whole, to avoid race conditions with concurrent policy enforcement (or
         * management!) requests. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed.
         */
        await gapi.client.binaryauthorization.projects.updatePolicy({
            name: "Test string",
        }, {
            admissionWhitelistPatterns: [
                {
                    namePattern: "Test string",
                }            ],
            clusterAdmissionRules: {
                A: {
                    enforcementMode: "Test string",
                    evaluationMode: "Test string",
                    requireAttestationsBy: [
                        "Test string"                    ],
                }            },
            defaultAdmissionRule: {
                enforcementMode: "Test string",
                evaluationMode: "Test string",
                requireAttestationsBy: [
                    "Test string"                ],
            },
            description: "Test string",
            globalPolicyEvaluationMode: "Test string",
            name: "Test string",
            updateTime: "Test string",
        });
        /**
         * Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the
         * attestor already exists.
         */
        await gapi.client.binaryauthorization.projects.attestors.create({
            attestorId: "Test string",
            parent: "Test string",
        }, {
            description: "Test string",
            name: "Test string",
            updateTime: "Test string",
            userOwnedGrafeasNote: {
                delegationServiceAccountEmail: "Test string",
                noteReference: "Test string",
                publicKeys: [
                    {
                        asciiArmoredPgpPublicKey: "Test string",
                        comment: "Test string",
                        id: "Test string",
                        pkixPublicKey: {
                            publicKeyPem: "Test string",
                            signatureAlgorithm: "Test string",
                        },
                    }                ],
            },
        });
        /** Deletes an attestor. Returns NOT_FOUND if the attestor does not exist. */
        await gapi.client.binaryauthorization.projects.attestors.delete({
            name: "Test string",
        });
        /** Gets an attestor. Returns NOT_FOUND if the attestor does not exist. */
        await gapi.client.binaryauthorization.projects.attestors.get({
            name: "Test string",
        });
        /** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
        await gapi.client.binaryauthorization.projects.attestors.getIamPolicy({
            "options.requestedPolicyVersion": 42,
            resource: "Test string",
        });
        /** Lists attestors. Returns INVALID_ARGUMENT if the project does not exist. */
        await gapi.client.binaryauthorization.projects.attestors.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
        await gapi.client.binaryauthorization.projects.attestors.setIamPolicy({
            resource: "Test string",
        }, {
            policy: {
                bindings: [
                    {
                        bindingId: "Test string",
                        condition: {
                            description: "Test string",
                            expression: "Test string",
                            location: "Test string",
                            title: "Test string",
                        },
                        members: [
                            "Test string"                        ],
                        role: "Test string",
                    }                ],
                etag: "Test string",
                version: 42,
            },
        });
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This
         * operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         */
        await gapi.client.binaryauthorization.projects.attestors.testIamPermissions({
            resource: "Test string",
        }, {
            permissions: [
                "Test string"            ],
        });
        /** Updates an attestor. Returns NOT_FOUND if the attestor does not exist. */
        await gapi.client.binaryauthorization.projects.attestors.update({
            name: "Test string",
        }, {
            description: "Test string",
            name: "Test string",
            updateTime: "Test string",
            userOwnedGrafeasNote: {
                delegationServiceAccountEmail: "Test string",
                noteReference: "Test string",
                publicKeys: [
                    {
                        asciiArmoredPgpPublicKey: "Test string",
                        comment: "Test string",
                        id: "Test string",
                        pkixPublicKey: {
                            publicKeyPem: "Test string",
                            signatureAlgorithm: "Test string",
                        },
                    }                ],
            },
        });
        /** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
        await gapi.client.binaryauthorization.projects.policy.getIamPolicy({
            "options.requestedPolicyVersion": 42,
            resource: "Test string",
        });
        /** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
        await gapi.client.binaryauthorization.projects.policy.setIamPolicy({
            resource: "Test string",
        }, {
            policy: {
                bindings: [
                    {
                        bindingId: "Test string",
                        condition: {
                            description: "Test string",
                            expression: "Test string",
                            location: "Test string",
                            title: "Test string",
                        },
                        members: [
                            "Test string"                        ],
                        role: "Test string",
                    }                ],
                etag: "Test string",
                version: 42,
            },
        });
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This
         * operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         */
        await gapi.client.binaryauthorization.projects.policy.testIamPermissions({
            resource: "Test string",
        }, {
            permissions: [
                "Test string"            ],
        });
    }
});
