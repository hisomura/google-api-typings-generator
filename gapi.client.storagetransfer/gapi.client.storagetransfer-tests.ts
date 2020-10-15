/* This is stub file for gapi.client.storagetransfer definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201013

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('storagetransfer', 'v1', () => {
        /** now we can use gapi.client.storagetransfer */

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
         * Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is
         * associated with one Google Cloud Platform Console project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service.
         * This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.
         */
        await gapi.client.storagetransfer.googleServiceAccounts.get({
            projectId: "Test string",
        });
        /** Creates a transfer job that runs periodically. */
        await gapi.client.storagetransfer.transferJobs.create({
        }, {
            creationTime: "Test string",
            deletionTime: "Test string",
            description: "Test string",
            lastModificationTime: "Test string",
            latestOperationName: "Test string",
            name: "Test string",
            notificationConfig: {
                eventTypes: [
                    "Test string"                ],
                payloadFormat: "Test string",
                pubsubTopic: "Test string",
            },
            projectId: "Test string",
            schedule: {
                scheduleEndDate: {
                    day: 42,
                    month: 42,
                    year: 42,
                },
                scheduleStartDate: {
                    day: 42,
                    month: 42,
                    year: 42,
                },
                startTimeOfDay: {
                    hours: 42,
                    minutes: 42,
                    nanos: 42,
                    seconds: 42,
                },
            },
            status: "Test string",
            transferSpec: {
                awsS3DataSource: {
                    awsAccessKey: {
                        accessKeyId: "Test string",
                        secretAccessKey: "Test string",
                    },
                    bucketName: "Test string",
                },
                azureBlobStorageDataSource: {
                    azureCredentials: {
                        sasToken: "Test string",
                    },
                    container: "Test string",
                    storageAccount: "Test string",
                },
                gcsDataSink: {
                    bucketName: "Test string",
                },
                gcsDataSource: {
                    bucketName: "Test string",
                },
                httpDataSource: {
                    listUrl: "Test string",
                },
                objectConditions: {
                    excludePrefixes: [
                        "Test string"                    ],
                    includePrefixes: [
                        "Test string"                    ],
                    lastModifiedBefore: "Test string",
                    lastModifiedSince: "Test string",
                    maxTimeElapsedSinceLastModification: "Test string",
                    minTimeElapsedSinceLastModification: "Test string",
                },
                transferOptions: {
                    deleteObjectsFromSourceAfterTransfer: true,
                    deleteObjectsUniqueInSink: true,
                    overwriteObjectsAlreadyExistingInSink: true,
                },
            },
        });
        /** Gets a transfer job. */
        await gapi.client.storagetransfer.transferJobs.get({
            jobName: "Test string",
            projectId: "Test string",
        });
        /** Lists transfer jobs. */
        await gapi.client.storagetransfer.transferJobs.list({
            filter: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. Updating a job's schedule is not allowed. **Note:** The job's status
         * field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).
         */
        await gapi.client.storagetransfer.transferJobs.patch({
            jobName: "Test string",
        }, {
            projectId: "Test string",
            transferJob: {
                creationTime: "Test string",
                deletionTime: "Test string",
                description: "Test string",
                lastModificationTime: "Test string",
                latestOperationName: "Test string",
                name: "Test string",
                notificationConfig: {
                    eventTypes: [
                        "Test string"                    ],
                    payloadFormat: "Test string",
                    pubsubTopic: "Test string",
                },
                projectId: "Test string",
                schedule: {
                    scheduleEndDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                    scheduleStartDate: {
                        day: 42,
                        month: 42,
                        year: 42,
                    },
                    startTimeOfDay: {
                        hours: 42,
                        minutes: 42,
                        nanos: 42,
                        seconds: 42,
                    },
                },
                status: "Test string",
                transferSpec: {
                    awsS3DataSource: {
                        awsAccessKey: {
                            accessKeyId: "Test string",
                            secretAccessKey: "Test string",
                        },
                        bucketName: "Test string",
                    },
                    azureBlobStorageDataSource: {
                        azureCredentials: {
                            sasToken: "Test string",
                        },
                        container: "Test string",
                        storageAccount: "Test string",
                    },
                    gcsDataSink: {
                        bucketName: "Test string",
                    },
                    gcsDataSource: {
                        bucketName: "Test string",
                    },
                    httpDataSource: {
                        listUrl: "Test string",
                    },
                    objectConditions: {
                        excludePrefixes: [
                            "Test string"                        ],
                        includePrefixes: [
                            "Test string"                        ],
                        lastModifiedBefore: "Test string",
                        lastModifiedSince: "Test string",
                        maxTimeElapsedSinceLastModification: "Test string",
                        minTimeElapsedSinceLastModification: "Test string",
                    },
                    transferOptions: {
                        deleteObjectsFromSourceAfterTransfer: true,
                        deleteObjectsUniqueInSink: true,
                        overwriteObjectsAlreadyExistingInSink: true,
                    },
                },
            },
            updateTransferJobFieldMask: "Test string",
        });
        /**
         * Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an
         * operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to
         * run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently
         * running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you
         * restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a
         * delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the
         * job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.
         */
        await gapi.client.storagetransfer.transferOperations.cancel({
            name: "Test string",
        }, {
        });
        /** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
        await gapi.client.storagetransfer.transferOperations.get({
            name: "Test string",
        });
        /** Lists transfer operations. */
        await gapi.client.storagetransfer.transferOperations.list({
            filter: "Test string",
            name: "Test string",
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Pauses a transfer operation. */
        await gapi.client.storagetransfer.transferOperations.pause({
            name: "Test string",
        }, {
        });
        /** Resumes a transfer operation that is paused. */
        await gapi.client.storagetransfer.transferOperations.resume({
            name: "Test string",
        }, {
        });
    }
});
