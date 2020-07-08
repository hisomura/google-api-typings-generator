// Type definitions for non-npm package Genomics API v1 1.0
// Project: https://cloud.google.com/genomics
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://genomics.googleapis.com/$discovery/rest?version=v1
// Revision: 20200707

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Genomics API v1 */
    function load(name: "genomics", version: "v1"): PromiseLike<void>;
    function load(name: "genomics", version: "v1", callback: () => any): void;

    namespace genomics {
        // tslint:disable-next-line:no-empty-interface
        interface CancelOperationRequest {
        }
        interface ComputeEngine {
            /** The names of the disks that were created for this pipeline. */
            diskNames?: string[];
            /** The instance on which the operation is running. */
            instanceName?: string;
            /** The machine type of the instance. */
            machineType?: string;
            /** The availability zone in which the instance resides. */
            zone?: string;
        }
        interface ContainerKilledEvent {
            /** The numeric ID of the action that started the container. */
            actionId?: number;
        }
        interface ContainerStartedEvent {
            /** The numeric ID of the action that started this container. */
            actionId?: number;
            /**
             * The public IP address that can be used to connect to the container. This
             * field is only populated when at least one port mapping is present. If the
             * instance was created with a private address, this field will be empty even
             * if port mappings exist.
             */
            ipAddress?: string;
            /**
             * The container-to-host port mappings installed for this container. This
             * set will contain any ports exposed using the `PUBLISH_EXPOSED_PORTS` flag
             * as well as any specified in the `Action` definition.
             */
            portMappings?: { [P in string]: number };
        }
        interface ContainerStoppedEvent {
            /** The numeric ID of the action that started this container. */
            actionId?: number;
            /** The exit status of the container. */
            exitStatus?: number;
            /**
             * The tail end of any content written to standard error by the container.
             * If the content emits large amounts of debugging noise or contains
             * sensitive information, you can prevent the content from being printed by
             * setting the `DISABLE_STANDARD_ERROR_CAPTURE` flag.
             *
             * Note that only a small amount of the end of the stream is captured here.
             * The entire stream is stored in the `/google/logs` directory mounted into
             * each action, and can be copied off the machine as described elsewhere.
             */
            stderr?: string;
        }
        interface DelayedEvent {
            /**
             * A textual description of the cause of the delay. The string can change
             * without notice because it is often generated by another service (such as
             * Compute Engine).
             */
            cause?: string;
            /**
             * If the delay was caused by a resource shortage, this field lists the
             * Compute Engine metrics that are preventing this operation from running
             * (for example, `CPUS` or `INSTANCES`). If the particular metric is not
             * known, a single `UNKNOWN` metric will be present.
             */
            metrics?: string[];
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface Event {
            /**
             * A human-readable description of the event. Note that these strings can
             * change at any time without notice. Any application logic must use the
             * information in the `details` field.
             */
            description?: string;
            /** Machine-readable details about the event. */
            details?: { [P in string]: any };
            /** The time at which the event occurred. */
            timestamp?: string;
        }
        interface FailedEvent {
            /** The human-readable description of the cause of the failure. */
            cause?: string;
            /** The Google standard error code that best describes this failure. */
            code?: string;
        }
        interface ListOperationsResponse {
            /** The standard List next-page token. */
            nextPageToken?: string;
            /** A list of operations that matches the specified filter in the request. */
            operations?: Operation[];
        }
        interface Operation {
            /**
             * If the value is `false`, it means the operation is still in progress.
             * If `true`, the operation is completed, and either `error` or `response` is
             * available.
             */
            done?: boolean;
            /** The error result of the operation in case of failure or cancellation. */
            error?: Status;
            /** An OperationMetadata or Metadata object. This will always be returned with the Operation. */
            metadata?: { [P in string]: any };
            /**
             * The server-assigned name, which is only unique within the same service that originally returns it. For example&#58;
             * `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw`
             */
            name?: string;
            /** An Empty object. */
            response?: { [P in string]: any };
        }
        interface OperationEvent {
            /** Required description of event. */
            description?: string;
            /**
             * Optional time of when event finished. An event can have a start time and no
             * finish time. If an event has a finish time, there must be a start time.
             */
            endTime?: string;
            /** Optional time of when event started. */
            startTime?: string;
        }
        interface OperationMetadata {
            /**
             * This field is deprecated. Use `labels` instead. Optionally provided by the
             * caller when submitting the request that creates the operation.
             */
            clientId?: string;
            /** The time at which the job was submitted to the Genomics service. */
            createTime?: string;
            /** The time at which the job stopped running. */
            endTime?: string;
            /**
             * Optional event messages that were generated during the job's execution.
             * This also contains any warnings that were generated during import
             * or export.
             */
            events?: OperationEvent[];
            /**
             * Optionally provided by the caller when submitting the request that creates
             * the operation.
             */
            labels?: { [P in string]: string };
            /** The Google Cloud Project in which the job is scoped. */
            projectId?: string;
            /**
             * The original request that started the operation. Note that this will be in
             * current version of the API. If the operation was started with v1beta2 API
             * and a GetOperation is performed on v1 API, a v1 request will be returned.
             */
            request?: { [P in string]: any };
            /** Runtime metadata on this Operation. */
            runtimeMetadata?: { [P in string]: any };
            /** The time at which the job began to run. */
            startTime?: string;
        }
        interface PullStartedEvent {
            /** The URI of the image that was pulled. */
            imageUri?: string;
        }
        interface PullStoppedEvent {
            /** The URI of the image that was pulled. */
            imageUri?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface RunPipelineResponse {
        }
        interface RuntimeMetadata {
            /** Execution information specific to Google Compute Engine. */
            computeEngine?: ComputeEngine;
        }
        interface Status {
            /** The status code, which should be an enum value of google.rpc.Code. */
            code?: number;
            /**
             * A list of messages that carry the error details.  There is a common set of
             * message types for APIs to use.
             */
            details?: Array<{ [P in string]: any }>;
            /**
             * A developer-facing error message, which should be in English. Any
             * user-facing error message should be localized and sent in the
             * google.rpc.Status.details field, or localized by the client.
             */
            message?: string;
        }
        interface UnexpectedExitStatusEvent {
            /** The numeric ID of the action that started the container. */
            actionId?: number;
            /** The exit status of the container. */
            exitStatus?: number;
        }
        interface WorkerAssignedEvent {
            /** The worker's instance name. */
            instance?: string;
            /** The machine type that was assigned for the worker. */
            machineType?: string;
            /** The zone the worker is running in. */
            zone?: string;
        }
        interface WorkerReleasedEvent {
            /** The worker's instance name. */
            instance?: string;
            /** The zone the worker was running in. */
            zone?: string;
        }
        interface OperationsResource {
            /**
             * Starts asynchronous cancellation on a long-running operation.
             * The server makes a best effort to cancel the operation, but success is not
             * guaranteed. Clients may use Operations.GetOperation
             * or Operations.ListOperations
             * to check whether the cancellation succeeded or the operation completed
             * despite cancellation.
             * Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission&#58;
             *
             * &#42; `genomics.operations.cancel`
             */
            cancel(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation resource to be cancelled. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: CancelOperationRequest;
            }): Request<{}>;
            cancel(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation resource to be cancelled. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: CancelOperationRequest): Request<{}>;
            /**
             * Gets the latest state of a long-running operation.
             * Clients can use this method to poll the operation result at intervals as
             * recommended by the API service.
             * Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission&#58;
             *
             * &#42; `genomics.operations.get`
             */
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation resource. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Operation>;
            /**
             * Lists operations that match the specified filter in the request.
             * Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission&#58;
             *
             * &#42; `genomics.operations.list`
             */
            list(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /**
                 * A string for filtering Operations.
                 * In v2alpha1, the following filter fields are supported&#58;
                 *
                 * &#42; createTime&#58; The time this job was created
                 * &#42; events&#58; The set of event (names) that have occurred while running
                 * the pipeline.  The &#58; operator can be used to determine if a
                 * particular event has occurred.
                 * &#42; error&#58; If the pipeline is running, this value is NULL.  Once the
                 * pipeline finishes, the value is the standard Google error code.
                 * &#42; labels.key or labels."key with space" where key is a label key.
                 * &#42; done&#58; If the pipeline is running, this value is false. Once the
                 * pipeline finishes, the value is true.
                 *
                 * In v1 and v1alpha2, the following filter fields are supported&#58;
                 *
                 * &#42; projectId&#58; Required. Corresponds to
                 * OperationMetadata.projectId.
                 * &#42; createTime&#58; The time this job was created, in seconds from the
                 * [epoch](http://en.wikipedia.org/wiki/Unix_time). Can use `>=` and/or `<=`
                 * operators.
                 * &#42; status&#58; Can be `RUNNING`, `SUCCESS`, `FAILURE`, or `CANCELED`. Only
                 * one status may be specified.
                 * &#42; labels.key where key is a label key.
                 *
                 * Examples&#58;
                 *
                 * &#42; `projectId = my-project AND createTime >= 1432140000`
                 * &#42; `projectId = my-project AND createTime >= 1432140000 AND createTime <= 1432150000 AND status = RUNNING`
                 * &#42; `projectId = my-project AND labels.color = &#42;`
                 * &#42; `projectId = my-project AND labels.color = red`
                 */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation's parent resource. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The maximum number of results to return. The maximum value is 256. */
                pageSize?: number;
                /** The standard list page token. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListOperationsResponse>;
        }

        const operations: OperationsResource;
    }
}
