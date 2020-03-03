// Type definitions for non-npm package Cloud Shell API v1 1.0
// Project: https://cloud.google.com/shell/docs/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://cloudshell.googleapis.com/$discovery/rest?version=v1
// Revision: 20200229

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Cloud Shell API v1 */
    function load(name: "cloudshell", version: "v1"): PromiseLike<void>;
    function load(name: "cloudshell", version: "v1", callback: () => any): void;

    namespace cloudshell {
        // tslint:disable-next-line:no-empty-interface
        interface CancelOperationRequest {
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface Environment {
            /**
             * Required. Full path to the Docker image used to run this environment, e.g.
             * "gcr.io/dev-con/cloud-devshell:latest".
             */
            dockerImage?: string;
            /**
             * Output only. The environment's identifier, unique among the user's
             * environments.
             */
            id?: string;
            /**
             * Output only. Full name of this resource, in the format
             * `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the
             * email address of the user to whom this environment belongs, and
             * `{environment_id}` is the identifier of this environment. For example,
             * `users/someone@example.com/environments/default`.
             */
            name?: string;
            /**
             * Output only. Public keys associated with the environment. Clients can
             * connect to this environment via SSH only if they possess a private key
             * corresponding to at least one of these public keys. Keys can be added to or
             * removed from the environment using the CreatePublicKey and DeletePublicKey
             * methods.
             */
            publicKeys?: PublicKey[];
            /**
             * Indicates the size of the backing VM running the environment.  If set to
             * something other than DEFAULT, it will be reverted to the default VM size
             * after vm_size_expire_time.
             */
            size?: string;
            /**
             * Output only. Host to which clients can connect to initiate SSH sessions
             * with the environment.
             */
            sshHost?: string;
            /**
             * Output only. Port to which clients can connect to initiate SSH sessions
             * with the environment.
             */
            sshPort?: number;
            /**
             * Output only. Username that clients should use when initiating SSH sessions
             * with the environment.
             */
            sshUsername?: string;
            /** Output only. Current execution state of this environment. */
            state?: string;
            /**
             * Output only. The time when the Environment will expire back to the default
             * VM size.
             */
            vmSizeExpireTime?: string;
            /**
             * Output only. Host to which clients can connect to initiate HTTPS or WSS
             * connections with the environment.
             */
            webHost?: string;
            /**
             * Output only. Ports to which clients can connect to initiate HTTPS or WSS
             * connections with the environment.
             */
            webPorts?: number[];
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
            /**
             * Service-specific metadata associated with the operation.  It typically
             * contains progress information and common metadata such as create time.
             * Some services might not provide such metadata.  Any method that returns a
             * long-running operation should document the metadata type, if any.
             */
            metadata?: Record<string, any>;
            /**
             * The server-assigned name, which is only unique within the same service that
             * originally returns it. If you use the default HTTP mapping, the
             * `name` should be a resource name ending with `operations/{unique_id}`.
             */
            name?: string;
            /**
             * The normal response of the operation in case of success.  If the original
             * method returns no data on success, such as `Delete`, the response is
             * `google.protobuf.Empty`.  If the original method is standard
             * `Get`/`Create`/`Update`, the response should be the resource.  For other
             * methods, the response should have the type `XxxResponse`, where `Xxx`
             * is the original method name.  For example, if the original method name
             * is `TakeSnapshot()`, the inferred response type is
             * `TakeSnapshotResponse`.
             */
            response?: Record<string, any>;
        }
        interface PublicKey {
            /** Required. Format of this key's content. */
            format?: string;
            /** Required. Content of this key. */
            key?: string;
            /**
             * Output only. Full name of this resource, in the format
             * `users/{owner_email}/environments/{environment_id}/publicKeys/{key_id}`.
             * `{owner_email}` is the email address of the user to whom the key belongs.
             * `{environment_id}` is the identifier of the environment to which the key
             * grants access. `{key_id}` is the unique identifier of the key. For example,
             * `users/someone@example.com/environments/default/publicKeys/myKey`.
             */
            name?: string;
        }
        interface StartEnvironmentMetadata {
            /** Current state of the environment being started. */
            state?: string;
        }
        interface StartEnvironmentResponse {
            /** Environment that was started. */
            environment?: Environment;
        }
        interface Status {
            /** The status code, which should be an enum value of google.rpc.Code. */
            code?: number;
            /**
             * A list of messages that carry the error details.  There is a common set of
             * message types for APIs to use.
             */
            details?: Array<Record<string, any>>;
            /**
             * A developer-facing error message, which should be in English. Any
             * user-facing error message should be localized and sent in the
             * google.rpc.Status.details field, or localized by the client.
             */
            message?: string;
        }
        interface OperationsResource {
            /**
             * Starts asynchronous cancellation on a long-running operation.  The server
             * makes a best effort to cancel the operation, but success is not
             * guaranteed.  If the server doesn't support this method, it returns
             * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
             * Operations.GetOperation or
             * other methods to check whether the cancellation succeeded or whether the
             * operation completed despite cancellation. On successful cancellation,
             * the operation is not deleted; instead, it becomes an operation with
             * an Operation.error value with a google.rpc.Status.code of 1,
             * corresponding to `Code.CANCELLED`.
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
             * Deletes a long-running operation. This method indicates that the client is
             * no longer interested in the operation result. It does not cancel the
             * operation. If the server doesn't support this method, it returns
             * `google.rpc.Code.UNIMPLEMENTED`.
             */
            delete(request?: {
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
                /** The name of the operation resource to be deleted. */
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
            }): Request<{}>;
            /**
             * Gets the latest state of a long-running operation.  Clients can use this
             * method to poll the operation result at intervals as recommended by the API
             * service.
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
             * Lists operations that match the specified filter in the request. If the
             * server doesn't support this method, it returns `UNIMPLEMENTED`.
             *
             * NOTE: the `name` binding allows API services to override the binding
             * to use different resource name schemes, such as `users/&#42;/operations`. To
             * override the binding, API services can add a binding such as
             * `"/v1/{name=users/&#42;}/operations"` to their service configuration.
             * For backwards compatibility, the default name includes the operations
             * collection id, however overriding users must ensure the name binding
             * is the parent resource, without the operations collection id.
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
                /** The standard list filter. */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The name of the operation's parent resource. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** The standard list page size. */
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
