// Type definitions for non-npm package Workflows API v1beta 1.0
// Project: https://cloud.google.com/workflows
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://workflows.googleapis.com/$discovery/rest?version=v1beta
// Revision: 20200828

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Workflows API v1beta */
    function load(name: "workflows", version: "v1beta"): PromiseLike<void>;
    function load(name: "workflows", version: "v1beta", callback: () => any): void;

    namespace workflows {
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface ListLocationsResponse {
            /** A list of locations that matches the specified filter in the request. */
            locations?: Location[];
            /** The standard List next-page token. */
            nextPageToken?: string;
        }
        interface ListOperationsResponse {
            /** The standard List next-page token. */
            nextPageToken?: string;
            /** A list of operations that matches the specified filter in the request. */
            operations?: Operation[];
        }
        interface ListWorkflowsResponse {
            /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
            nextPageToken?: string;
            /** Unreachable resources. */
            unreachable?: string[];
            /** The workflows which match the request. */
            workflows?: Workflow[];
        }
        interface Location {
            /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
            displayName?: string;
            /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
            labels?: { [P in string]: string };
            /** The canonical id for this location. For example: `"us-east1"`. */
            locationId?: string;
            /** Service-specific metadata. For example the available capacity at the given location. */
            metadata?: { [P in string]: any };
            /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
            name?: string;
        }
        interface Operation {
            /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
            done?: boolean;
            /** The error result of the operation in case of failure or cancellation. */
            error?: Status;
            /**
             * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such
             * metadata. Any method that returns a long-running operation should document the metadata type, if any.
             */
            metadata?: { [P in string]: any };
            /**
             * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending
             * with `operations/{unique_id}`.
             */
            name?: string;
            /**
             * The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the
             * original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the
             * original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
             */
            response?: { [P in string]: any };
        }
        interface OperationMetadata {
            /** API version used to start the operation. */
            apiVersion?: string;
            /** The time the operation was created. */
            createTime?: string;
            /** The time the operation finished running. */
            endTime?: string;
            /** Server-defined resource path for the target of the operation. */
            target?: string;
            /** Name of the verb executed by the operation. */
            verb?: string;
        }
        interface Status {
            /** The status code, which should be an enum value of google.rpc.Code. */
            code?: number;
            /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
            details?: Array<{ [P in string]: any }>;
            /**
             * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the
             * client.
             */
            message?: string;
        }
        interface Workflow {
            /** Output only. The timestamp of when the workflow was created. */
            createTime?: string;
            /** Description of the workflow provided by the user. Must be at most 1000 unicode characters long. */
            description?: string;
            /**
             * Labels associated with this workflow. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric
             * characters, underscores and dashes. Label keys must start with a letter. International characters are allowed.
             */
            labels?: { [P in string]: string };
            /** The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow} */
            name?: string;
            /** Output only. The timestamp that the latest revision of the workflow was created. */
            revisionCreateTime?: string;
            /**
             * Output only. The revision of the workflow. A new revision of a workflow is created as a result of updating the following fields of a workflow: - `source_code` - `service_account`
             * The format is "000001-a4d", where the first 6 characters define the zero-padded revision ordinal number. They are followed by a hyphen and 3 hexadecimal random characters.
             */
            revisionId?: string;
            /**
             * Name of the service account associated with the latest workflow version. This service account represents the identity of the workflow and determines what permissions the workflow
             * has. Format: projects/{project}/serviceAccounts/{account} Using `-` as a wildcard for the `{project}` will infer the project from the account. The `{account}` value can be the
             * `email` address or the `unique_id` of the service account. If not provided, workflow will use the project's default service account. Modifying this field for an existing workflow
             * results in a new workflow revision.
             */
            serviceAccount?: string;
            /** Workflow code to be executed. The size limit is 32KB. */
            sourceContents?: string;
            /** Output only. State of the workflow deployment. */
            state?: string;
            /** Output only. The last update timestamp of the workflow. */
            updateTime?: string;
        }
        interface OperationsResource {
            /**
             * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't
             * support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
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
            /** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
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
             * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services
             * to override the binding to use different resource name schemes, such as `users/∗/operations`. To override the binding, API services can add a binding such as
             * `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must
             * ensure the name binding is the parent resource, without the operations collection id.
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
        interface WorkflowsResource {
            /** Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error. */
            create(request: {
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
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Required. Project and location in which the workflow should be created. Format: projects/{project}/locations/{location} */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /**
                 * Required. The ID of the workflow to be created. It has to fulfill the following requirements: * Must contain only letters, numbers, underscores and hyphens. * Must start with a
                 * letter. * Must be between 1-64 characters. * Must end with a number or a letter. * Must be unique within the customer project and location.
                 */
                workflowId?: string;
                /** Request body */
                resource: Workflow;
            }): Request<Operation>;
            create(request: {
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
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Required. Project and location in which the workflow should be created. Format: projects/{project}/locations/{location} */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /**
                 * Required. The ID of the workflow to be created. It has to fulfill the following requirements: * Must contain only letters, numbers, underscores and hyphens. * Must start with a
                 * letter. * Must be between 1-64 characters. * Must end with a number or a letter. * Must be unique within the customer project and location.
                 */
                workflowId?: string;
            },
            body: Workflow): Request<Operation>;
            /** Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow. */
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
                /** Required. Name of the workflow to be deleted. Format: projects/{project}/locations/{location}/workflows/{workflow} */
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
            /** Gets details of a single Workflow. */
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
                /** Required. Name of the workflow which information should be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow} */
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
            }): Request<Workflow>;
            /** Lists Workflows in a given project and location. The default order is not specified. */
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
                /** Filter to restrict results to specific workflows. */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Comma-separated list of fields that that specify the order of the results. Default sorting order for a field is ascending. To specify descending order for a field, append a "
                 * desc" suffix. If not specified, the results will be returned in an unspecified order.
                 */
                orderBy?: string;
                /**
                 * Maximum number of workflows to return per call. The service may return fewer than this value. If the value is not specified, a default value of 500 will be used. The maximum
                 * permitted value is 1000 and values greater than 1000 will be coerced down to 1000.
                 */
                pageSize?: number;
                /**
                 * A page token, received from a previous `ListWorkflows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflows` must
                 * match the call that provided the page token.
                 */
                pageToken?: string;
                /** Required. Project and location from which the workflows should be listed. Format: projects/{project}/locations/{location} */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListWorkflowsResponse>;
            /**
             * Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a
             * successful update operation. In that case, such revision will be used in new workflow executions.
             */
            patch(request: {
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
                /** The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow} */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** List of fields to be updated. If not present, the entire workflow will be updated. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Workflow;
            }): Request<Operation>;
            patch(request: {
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
                /** The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow} */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** List of fields to be updated. If not present, the entire workflow will be updated. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Workflow): Request<Operation>;
        }
        interface LocationsResource {
            /** Gets information about a location. */
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
                /** Resource name for the location. */
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
            }): Request<Location>;
            /** Lists information about the supported locations for this service. */
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
                /** The resource that owns the locations collection, if applicable. */
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
            }): Request<ListLocationsResponse>;
            operations: OperationsResource;
            workflows: WorkflowsResource;
        }
        interface ProjectsResource {
            locations: LocationsResource;
        }

        const projects: ProjectsResource;
    }
}