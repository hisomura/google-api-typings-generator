/* This is stub file for gapi.client.sql definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('sql', 'v1beta4', () => {
        /** now we can use gapi.client.sql */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** Manage your Google SQL Service instances */
            'https://www.googleapis.com/auth/sqlservice.admin',
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
        /** Deletes the backup taken by a backup run. */
        await gapi.client.sql.backupRuns.delete({
            id: "Test string",
            instance: "Test string",
            project: "Test string",
        });
        /** Retrieves a resource containing information about a backup run. */
        await gapi.client.sql.backupRuns.get({
            id: "Test string",
            instance: "Test string",
            project: "Test string",
        });
        /**
         * Creates a new backup run on demand. This method is applicable only to
         * Second Generation instances.
         */
        await gapi.client.sql.backupRuns.insert({
            instance: "Test string",
            project: "Test string",
        }, {
            description: "Test string",
            diskEncryptionConfiguration: {
                kind: "Test string",
                kmsKeyName: "Test string",
            },
            diskEncryptionStatus: {
                kind: "Test string",
                kmsKeyVersionName: "Test string",
            },
            endTime: "Test string",
            enqueuedTime: "Test string",
            error: {
                code: "Test string",
                kind: "Test string",
                message: "Test string",
            },
            id: "Test string",
            instance: "Test string",
            kind: "Test string",
            location: "Test string",
            selfLink: "Test string",
            startTime: "Test string",
            status: "Test string",
            type: "Test string",
            windowStartTime: "Test string",
        });
        /**
         * Lists all backup runs associated with a given instance and configuration in
         * the reverse chronological order of the backup initiation time.
         */
        await gapi.client.sql.backupRuns.list({
            instance: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            project: "Test string",
        });
        /** Deletes a database from a Cloud SQL instance. */
        await gapi.client.sql.databases.delete({
            database: "Test string",
            instance: "Test string",
            project: "Test string",
        });
        /**
         * Retrieves a resource containing information about a database inside a Cloud
         * SQL instance.
         */
        await gapi.client.sql.databases.get({
            database: "Test string",
            instance: "Test string",
            project: "Test string",
        });
        /**
         * Inserts a resource containing information about a database inside a Cloud
         * SQL instance.
         */
        await gapi.client.sql.databases.insert({
            instance: "Test string",
            project: "Test string",
        }, {
            charset: "Test string",
            collation: "Test string",
            etag: "Test string",
            instance: "Test string",
            kind: "Test string",
            name: "Test string",
            project: "Test string",
            selfLink: "Test string",
            sqlserverDatabaseDetails: {
                compatibilityLevel: 42,
                recoveryModel: "Test string",
            },
        });
        /** Lists databases in the specified Cloud SQL instance. */
        await gapi.client.sql.databases.list({
            instance: "Test string",
            project: "Test string",
        });
        /**
         * Partially updates a resource containing information about a database inside
         * a Cloud SQL instance. This method supports patch semantics.
         * <aside
         * class="caution"><strong>Caution:</strong> This is not a partial update, so
         * you must include values for all the settings that you want to retain. For
         * partial updates, use <a
         * href="/sql/docs/db_path/admin-api/rest/v1beta4/instances/update">update</a>.</aside>
         */
        await gapi.client.sql.databases.patch({
            database: "Test string",
            instance: "Test string",
            project: "Test string",
        }, {
            charset: "Test string",
            collation: "Test string",
            etag: "Test string",
            instance: "Test string",
            kind: "Test string",
            name: "Test string",
            project: "Test string",
            selfLink: "Test string",
            sqlserverDatabaseDetails: {
                compatibilityLevel: 42,
                recoveryModel: "Test string",
            },
        });
        /**
         * Updates a resource containing information about a database inside a Cloud
         * SQL instance.
         */
        await gapi.client.sql.databases.update({
            database: "Test string",
            instance: "Test string",
            project: "Test string",
        }, {
            charset: "Test string",
            collation: "Test string",
            etag: "Test string",
            instance: "Test string",
            kind: "Test string",
            name: "Test string",
            project: "Test string",
            selfLink: "Test string",
            sqlserverDatabaseDetails: {
                compatibilityLevel: 42,
                recoveryModel: "Test string",
            },
        });
        /** List all available database flags for Cloud SQL instances. */
        await gapi.client.sql.flags.list({
            databaseVersion: "Test string",
        });
        /**
         * Add a new trusted Certificate Authority (CA) version for the specified
         * instance. Required to prepare for a certificate rotation. If a CA version
         * was previously added but never used in a certificate rotation, this
         * operation replaces that version. There cannot be more than one CA version
         * waiting to be rotated in.
         */
        await gapi.client.sql.instances.addServerCa({
            instance: "Test string",
            project: "Test string",
        });
        /** Creates a Cloud SQL instance as a clone of the source instance. */
        await gapi.client.sql.instances.clone({
            instance: "Test string",
            project: "Test string",
        }, {
            cloneContext: {
                binLogCoordinates: {
                    binLogFileName: "Test string",
                    binLogPosition: "Test string",
                    kind: "Test string",
                },
                destinationInstanceName: "Test string",
                kind: "Test string",
                pitrTimestampMs: "Test string",
                pointInTime: "Test string",
            },
        });
        /** Deletes a Cloud SQL instance. */
        await gapi.client.sql.instances.delete({
            instance: "Test string",
            project: "Test string",
        });
        /**
         * Demotes the stand-alone instance to be a Cloud SQL read replica for an
         * external database server.
         */
        await gapi.client.sql.instances.demoteMaster({
            instance: "Test string",
            project: "Test string",
        }, {
            demoteMasterContext: {
                kind: "Test string",
                masterInstanceName: "Test string",
                replicaConfiguration: {
                    kind: "Test string",
                    mysqlReplicaConfiguration: {
                        caCertificate: "Test string",
                        clientCertificate: "Test string",
                        clientKey: "Test string",
                        kind: "Test string",
                        password: "Test string",
                        username: "Test string",
                    },
                },
                verifyGtidConsistency: true,
            },
        });
        /**
         * Exports data from a Cloud SQL instance to a Cloud Storage bucket as a SQL
         * dump or CSV file.
         */
        await gapi.client.sql.instances.export({
            instance: "Test string",
            project: "Test string",
        }, {
            exportContext: {
                csvExportOptions: {
                    selectQuery: "Test string",
                },
                databases: [
                    "Test string"                ],
                fileType: "Test string",
                kind: "Test string",
                sqlExportOptions: {
                    mysqlExportOptions: {
                        masterData: 42,
                    },
                    schemaOnly: true,
                    tables: [
                        "Test string"                    ],
                },
                uri: "Test string",
            },
        });
        /** Failover the instance to its failover replica instance. */
        await gapi.client.sql.instances.failover({
            instance: "Test string",
            project: "Test string",
        }, {
            failoverContext: {
                kind: "Test string",
                settingsVersion: "Test string",
            },
        });
        /** Retrieves a resource containing information about a Cloud SQL instance. */
        await gapi.client.sql.instances.get({
            instance: "Test string",
            project: "Test string",
        });
        /**
         * Imports data into a Cloud SQL instance from a SQL dump  or CSV file in
         * Cloud Storage.
         */
        await gapi.client.sql.instances.import({
            instance: "Test string",
            project: "Test string",
        }, {
            importContext: {
                bakImportOptions: {
                    encryptionOptions: {
                        certPath: "Test string",
                        pvkPassword: "Test string",
                        pvkPath: "Test string",
                    },
                },
                csvImportOptions: {
                    columns: [
                        "Test string"                    ],
                    table: "Test string",
                },
                database: "Test string",
                fileType: "Test string",
                importUser: "Test string",
                kind: "Test string",
                uri: "Test string",
            },
        });
        /** Creates a new Cloud SQL instance. */
        await gapi.client.sql.instances.insert({
            project: "Test string",
        }, {
            backendType: "Test string",
            connectionName: "Test string",
            currentDiskSize: "Test string",
            databaseVersion: "Test string",
            diskEncryptionConfiguration: {
                kind: "Test string",
                kmsKeyName: "Test string",
            },
            diskEncryptionStatus: {
                kind: "Test string",
                kmsKeyVersionName: "Test string",
            },
            etag: "Test string",
            failoverReplica: {
                available: true,
                name: "Test string",
            },
            gceZone: "Test string",
            instanceType: "Test string",
            ipAddresses: [
                {
                    ipAddress: "Test string",
                    timeToRetire: "Test string",
                    type: "Test string",
                }            ],
            ipv6Address: "Test string",
            kind: "Test string",
            masterInstanceName: "Test string",
            maxDiskSize: "Test string",
            name: "Test string",
            onPremisesConfiguration: {
                caCertificate: "Test string",
                clientCertificate: "Test string",
                clientKey: "Test string",
                dumpFilePath: "Test string",
                hostPort: "Test string",
                kind: "Test string",
                password: "Test string",
                username: "Test string",
            },
            project: "Test string",
            region: "Test string",
            replicaConfiguration: {
                failoverTarget: true,
                kind: "Test string",
                mysqlReplicaConfiguration: {
                    caCertificate: "Test string",
                    clientCertificate: "Test string",
                    clientKey: "Test string",
                    connectRetryInterval: 42,
                    dumpFilePath: "Test string",
                    kind: "Test string",
                    masterHeartbeatPeriod: "Test string",
                    password: "Test string",
                    sslCipher: "Test string",
                    username: "Test string",
                    verifyServerCertificate: true,
                },
            },
            replicaNames: [
                "Test string"            ],
            rootPassword: "Test string",
            scheduledMaintenance: {
                canDefer: true,
                canReschedule: true,
                startTime: "Test string",
            },
            selfLink: "Test string",
            serverCaCert: {
                cert: "Test string",
                certSerialNumber: "Test string",
                commonName: "Test string",
                createTime: "Test string",
                expirationTime: "Test string",
                instance: "Test string",
                kind: "Test string",
                selfLink: "Test string",
                sha1Fingerprint: "Test string",
            },
            serviceAccountEmailAddress: "Test string",
            settings: {
                activationPolicy: "Test string",
                authorizedGaeApplications: [
                    "Test string"                ],
                availabilityType: "Test string",
                backupConfiguration: {
                    binaryLogEnabled: true,
                    enabled: true,
                    kind: "Test string",
                    location: "Test string",
                    pointInTimeRecoveryEnabled: true,
                    replicationLogArchivingEnabled: true,
                    startTime: "Test string",
                },
                crashSafeReplicationEnabled: true,
                databaseFlags: [
                    {
                        name: "Test string",
                        value: "Test string",
                    }                ],
                databaseReplicationEnabled: true,
                dataDiskSizeGb: "Test string",
                dataDiskType: "Test string",
                ipConfiguration: {
                    authorizedNetworks: [
                        {
                            expirationTime: "Test string",
                            kind: "Test string",
                            name: "Test string",
                            value: "Test string",
                        }                    ],
                    ipv4Enabled: true,
                    privateNetwork: "Test string",
                    requireSsl: true,
                },
                kind: "Test string",
                locationPreference: {
                    followGaeApplication: "Test string",
                    kind: "Test string",
                    zone: "Test string",
                },
                maintenanceWindow: {
                    day: 42,
                    hour: 42,
                    kind: "Test string",
                    updateTrack: "Test string",
                },
                pricingPlan: "Test string",
                replicationType: "Test string",
                settingsVersion: "Test string",
                storageAutoResize: true,
                storageAutoResizeLimit: "Test string",
                tier: "Test string",
                userLabels: {
                    A: "Test string"                },
            },
            state: "Test string",
            suspensionReason: [
                "Test string"            ],
        });
        /** Lists instances under a given project. */
        await gapi.client.sql.instances.list({
            filter: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            project: "Test string",
        });
        /**
         * Lists all of the trusted Certificate Authorities (CAs) for the specified
         * instance. There can be up to three CAs listed: the CA that was used to sign
         * the certificate that is currently in use, a CA that has been added but not
         * yet used to sign a certificate, and a CA used to sign a certificate that
         * has previously rotated out.
         */
        await gapi.client.sql.instances.listServerCas({
            instance: "Test string",
            project: "Test string",
        });
        /**
         * Updates settings of a Cloud SQL instance.
         * This method supports patch semantics.
         */
        await gapi.client.sql.instances.patch({
            instance: "Test string",
            project: "Test string",
        }, {
            backendType: "Test string",
            connectionName: "Test string",
            currentDiskSize: "Test string",
            databaseVersion: "Test string",
            diskEncryptionConfiguration: {
                kind: "Test string",
                kmsKeyName: "Test string",
            },
            diskEncryptionStatus: {
                kind: "Test string",
                kmsKeyVersionName: "Test string",
            },
            etag: "Test string",
            failoverReplica: {
                available: true,
                name: "Test string",
            },
            gceZone: "Test string",
            instanceType: "Test string",
            ipAddresses: [
                {
                    ipAddress: "Test string",
                    timeToRetire: "Test string",
                    type: "Test string",
                }            ],
            ipv6Address: "Test string",
            kind: "Test string",
            masterInstanceName: "Test string",
            maxDiskSize: "Test string",
            name: "Test string",
            onPremisesConfiguration: {
                caCertificate: "Test string",
                clientCertificate: "Test string",
                clientKey: "Test string",
                dumpFilePath: "Test string",
                hostPort: "Test string",
                kind: "Test string",
                password: "Test string",
                username: "Test string",
            },
            project: "Test string",
            region: "Test string",
            replicaConfiguration: {
                failoverTarget: true,
                kind: "Test string",
                mysqlReplicaConfiguration: {
                    caCertificate: "Test string",
                    clientCertificate: "Test string",
                    clientKey: "Test string",
                    connectRetryInterval: 42,
                    dumpFilePath: "Test string",
                    kind: "Test string",
                    masterHeartbeatPeriod: "Test string",
                    password: "Test string",
                    sslCipher: "Test string",
                    username: "Test string",
                    verifyServerCertificate: true,
                },
            },
            replicaNames: [
                "Test string"            ],
            rootPassword: "Test string",
            scheduledMaintenance: {
                canDefer: true,
                canReschedule: true,
                startTime: "Test string",
            },
            selfLink: "Test string",
            serverCaCert: {
                cert: "Test string",
                certSerialNumber: "Test string",
                commonName: "Test string",
                createTime: "Test string",
                expirationTime: "Test string",
                instance: "Test string",
                kind: "Test string",
                selfLink: "Test string",
                sha1Fingerprint: "Test string",
            },
            serviceAccountEmailAddress: "Test string",
            settings: {
                activationPolicy: "Test string",
                authorizedGaeApplications: [
                    "Test string"                ],
                availabilityType: "Test string",
                backupConfiguration: {
                    binaryLogEnabled: true,
                    enabled: true,
                    kind: "Test string",
                    location: "Test string",
                    pointInTimeRecoveryEnabled: true,
                    replicationLogArchivingEnabled: true,
                    startTime: "Test string",
                },
                crashSafeReplicationEnabled: true,
                databaseFlags: [
                    {
                        name: "Test string",
                        value: "Test string",
                    }                ],
                databaseReplicationEnabled: true,
                dataDiskSizeGb: "Test string",
                dataDiskType: "Test string",
                ipConfiguration: {
                    authorizedNetworks: [
                        {
                            expirationTime: "Test string",
                            kind: "Test string",
                            name: "Test string",
                            value: "Test string",
                        }                    ],
                    ipv4Enabled: true,
                    privateNetwork: "Test string",
                    requireSsl: true,
                },
                kind: "Test string",
                locationPreference: {
                    followGaeApplication: "Test string",
                    kind: "Test string",
                    zone: "Test string",
                },
                maintenanceWindow: {
                    day: 42,
                    hour: 42,
                    kind: "Test string",
                    updateTrack: "Test string",
                },
                pricingPlan: "Test string",
                replicationType: "Test string",
                settingsVersion: "Test string",
                storageAutoResize: true,
                storageAutoResizeLimit: "Test string",
                tier: "Test string",
                userLabels: {
                    A: "Test string"                },
            },
            state: "Test string",
            suspensionReason: [
                "Test string"            ],
        });
        /** Promotes the read replica instance to be a stand-alone Cloud SQL instance. */
        await gapi.client.sql.instances.promoteReplica({
            instance: "Test string",
            project: "Test string",
        });
        /**
         * Deletes all client certificates and generates a new server SSL certificate
         * for the instance.
         */
        await gapi.client.sql.instances.resetSslConfig({
            instance: "Test string",
            parent: "Test string",
            project: "Test string",
        });
        /** Restarts a Cloud SQL instance. */
        await gapi.client.sql.instances.restart({
            instance: "Test string",
            project: "Test string",
        });
        /** Restores a backup of a Cloud SQL instance. */
        await gapi.client.sql.instances.restoreBackup({
            instance: "Test string",
            project: "Test string",
        }, {
            restoreBackupContext: {
                backupRunId: "Test string",
                instanceId: "Test string",
                kind: "Test string",
                project: "Test string",
            },
        });
        /**
         * Rotates the server certificate to one signed by the Certificate Authority
         * (CA) version previously added with the addServerCA method.
         */
        await gapi.client.sql.instances.rotateServerCa({
            instance: "Test string",
            project: "Test string",
        }, {
            rotateServerCaContext: {
                kind: "Test string",
                nextVersion: "Test string",
            },
        });
        /** Starts the replication in the read replica instance. */
        await gapi.client.sql.instances.startReplica({
            instance: "Test string",
            project: "Test string",
        });
        /** Stops the replication in the read replica instance. */
        await gapi.client.sql.instances.stopReplica({
            instance: "Test string",
            project: "Test string",
        });
        /** Truncate MySQL general and slow query log tables */
        await gapi.client.sql.instances.truncateLog({
            instance: "Test string",
            project: "Test string",
        }, {
            truncateLogContext: {
                kind: "Test string",
                logType: "Test string",
            },
        });
        /** Updates settings of a Cloud SQL instance. */
        await gapi.client.sql.instances.update({
            instance: "Test string",
            project: "Test string",
        }, {
            backendType: "Test string",
            connectionName: "Test string",
            currentDiskSize: "Test string",
            databaseVersion: "Test string",
            diskEncryptionConfiguration: {
                kind: "Test string",
                kmsKeyName: "Test string",
            },
            diskEncryptionStatus: {
                kind: "Test string",
                kmsKeyVersionName: "Test string",
            },
            etag: "Test string",
            failoverReplica: {
                available: true,
                name: "Test string",
            },
            gceZone: "Test string",
            instanceType: "Test string",
            ipAddresses: [
                {
                    ipAddress: "Test string",
                    timeToRetire: "Test string",
                    type: "Test string",
                }            ],
            ipv6Address: "Test string",
            kind: "Test string",
            masterInstanceName: "Test string",
            maxDiskSize: "Test string",
            name: "Test string",
            onPremisesConfiguration: {
                caCertificate: "Test string",
                clientCertificate: "Test string",
                clientKey: "Test string",
                dumpFilePath: "Test string",
                hostPort: "Test string",
                kind: "Test string",
                password: "Test string",
                username: "Test string",
            },
            project: "Test string",
            region: "Test string",
            replicaConfiguration: {
                failoverTarget: true,
                kind: "Test string",
                mysqlReplicaConfiguration: {
                    caCertificate: "Test string",
                    clientCertificate: "Test string",
                    clientKey: "Test string",
                    connectRetryInterval: 42,
                    dumpFilePath: "Test string",
                    kind: "Test string",
                    masterHeartbeatPeriod: "Test string",
                    password: "Test string",
                    sslCipher: "Test string",
                    username: "Test string",
                    verifyServerCertificate: true,
                },
            },
            replicaNames: [
                "Test string"            ],
            rootPassword: "Test string",
            scheduledMaintenance: {
                canDefer: true,
                canReschedule: true,
                startTime: "Test string",
            },
            selfLink: "Test string",
            serverCaCert: {
                cert: "Test string",
                certSerialNumber: "Test string",
                commonName: "Test string",
                createTime: "Test string",
                expirationTime: "Test string",
                instance: "Test string",
                kind: "Test string",
                selfLink: "Test string",
                sha1Fingerprint: "Test string",
            },
            serviceAccountEmailAddress: "Test string",
            settings: {
                activationPolicy: "Test string",
                authorizedGaeApplications: [
                    "Test string"                ],
                availabilityType: "Test string",
                backupConfiguration: {
                    binaryLogEnabled: true,
                    enabled: true,
                    kind: "Test string",
                    location: "Test string",
                    pointInTimeRecoveryEnabled: true,
                    replicationLogArchivingEnabled: true,
                    startTime: "Test string",
                },
                crashSafeReplicationEnabled: true,
                databaseFlags: [
                    {
                        name: "Test string",
                        value: "Test string",
                    }                ],
                databaseReplicationEnabled: true,
                dataDiskSizeGb: "Test string",
                dataDiskType: "Test string",
                ipConfiguration: {
                    authorizedNetworks: [
                        {
                            expirationTime: "Test string",
                            kind: "Test string",
                            name: "Test string",
                            value: "Test string",
                        }                    ],
                    ipv4Enabled: true,
                    privateNetwork: "Test string",
                    requireSsl: true,
                },
                kind: "Test string",
                locationPreference: {
                    followGaeApplication: "Test string",
                    kind: "Test string",
                    zone: "Test string",
                },
                maintenanceWindow: {
                    day: 42,
                    hour: 42,
                    kind: "Test string",
                    updateTrack: "Test string",
                },
                pricingPlan: "Test string",
                replicationType: "Test string",
                settingsVersion: "Test string",
                storageAutoResize: true,
                storageAutoResizeLimit: "Test string",
                tier: "Test string",
                userLabels: {
                    A: "Test string"                },
            },
            state: "Test string",
            suspensionReason: [
                "Test string"            ],
        });
        /** Retrieves an instance operation that has been performed on an instance. */
        await gapi.client.sql.operations.get({
            operation: "Test string",
            project: "Test string",
        });
        /**
         * Lists all instance operations that have been performed on the given Cloud
         * SQL instance in the reverse chronological order of the start time.
         */
        await gapi.client.sql.operations.list({
            instance: "Test string",
            maxResults: 42,
            pageToken: "Test string",
            project: "Test string",
        });
        /**
         * Generates a short-lived X509 certificate containing the provided public key
         * and signed by a private key specific to the target instance. Users may use
         * the certificate to authenticate as themselves when connecting to the
         * database.
         */
        await gapi.client.sql.sslCerts.createEphemeral({
            instance: "Test string",
            project: "Test string",
        }, {
            public_key: "Test string",
        });
        /**
         * Deletes the SSL certificate. For First Generation instances, the
         * certificate remains valid until the instance is restarted.
         */
        await gapi.client.sql.sslCerts.delete({
            instance: "Test string",
            project: "Test string",
            sha1Fingerprint: "Test string",
        });
        /**
         * Retrieves a particular SSL certificate.  Does not include the private key
         * (required for usage).  The private key must be saved from the response to
         * initial creation.
         */
        await gapi.client.sql.sslCerts.get({
            instance: "Test string",
            project: "Test string",
            sha1Fingerprint: "Test string",
        });
        /**
         * Creates an SSL certificate and returns it along with the private key and
         * server certificate authority.  The new certificate will not be usable until
         * the instance is restarted.
         */
        await gapi.client.sql.sslCerts.insert({
            instance: "Test string",
            project: "Test string",
        }, {
            commonName: "Test string",
        });
        /** Lists all of the current SSL certificates for the instance. */
        await gapi.client.sql.sslCerts.list({
            instance: "Test string",
            project: "Test string",
        });
        /**
         * Lists all available machine types (tiers) for Cloud SQL, for example,
         * db-n1-standard-1. For related information, see <a
         * href="/sql/pricing">Pricing</a>.
         */
        await gapi.client.sql.tiers.list({
            project: "Test string",
        });
        /** Deletes a user from a Cloud SQL instance. */
        await gapi.client.sql.users.delete({
            host: "Test string",
            instance: "Test string",
            name: "Test string",
            project: "Test string",
        });
        /** Creates a new user in a Cloud SQL instance. */
        await gapi.client.sql.users.insert({
            instance: "Test string",
            project: "Test string",
        }, {
            etag: "Test string",
            host: "Test string",
            instance: "Test string",
            kind: "Test string",
            name: "Test string",
            password: "Test string",
            project: "Test string",
            sqlserverUserDetails: {
                disabled: true,
                serverRoles: [
                    "Test string"                ],
            },
        });
        /** Lists users in the specified Cloud SQL instance. */
        await gapi.client.sql.users.list({
            instance: "Test string",
            project: "Test string",
        });
        /** Updates an existing user in a Cloud SQL instance. */
        await gapi.client.sql.users.update({
            host: "Test string",
            instance: "Test string",
            name: "Test string",
            project: "Test string",
        }, {
            etag: "Test string",
            host: "Test string",
            instance: "Test string",
            kind: "Test string",
            name: "Test string",
            password: "Test string",
            project: "Test string",
            sqlserverUserDetails: {
                disabled: true,
                serverRoles: [
                    "Test string"                ],
            },
        });
    }
});
