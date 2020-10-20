// Type definitions for non-npm package Workflow Executions API v1beta 1.0
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
// Generated from: https://workflowexecutions.googleapis.com/$discovery/rest?version=v1beta
// Revision: 20201013

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Workflow Executions API v1beta */
    function load(name: "workflowexecutions", version: "v1beta"): PromiseLike<void>;
    function load(name: "workflowexecutions", version: "v1beta", callback: () => any): void;

    namespace workflowexecutions {
        // tslint:disable-next-line:no-empty-interface
        interface CancelExecutionRequest {
        }
        interface Error {
            /** Human readable error context, helpful for debugging purposes. */
            context?: string;
            /** Error payload returned by the execution, represented as a JSON string. */
            payload?: string;
        }
        interface Execution {
            /** Input parameters of the execution represented as a JSON string. The size limit is 32KB. */
            argument?: string;
            /** Output only. Marks the end of execution, successful or not. */
            endTime?: string;
            /** Output only. The error which caused the execution to finish prematurely. The value is only present if the execution's state is `FAILED` or `CANCELLED`. */
            error?: Error;
            /** Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} */
            name?: string;
            /** Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`. */
            result?: string;
            /** Output only. Marks the beginning of execution. */
            startTime?: string;
            /** Output only. Current state of the execution. */
            state?: string;
            /** Output only. Revision of the workflow this execution is using. */
            workflowRevisionId?: string;
        }
        interface ListExecutionsResponse {
            /** The executions which match the request. */
            executions?: Execution[];
            /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
            nextPageToken?: string;
        }
        interface ExecutionsResource {
            /** Cancels an execution of the given name. */
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
                /** Required. Name of the execution to be cancelled. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} */
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
                resource: CancelExecutionRequest;
            }): Request<Execution>;
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
                /** Required. Name of the execution to be cancelled. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} */
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
            body: CancelExecutionRequest): Request<Execution>;
            /** Creates a new execution using the latest revision of the given workflow. */
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
                /**
                 * Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} The latest revision of the workflow
                 * will be used.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Execution;
            }): Request<Execution>;
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
                /**
                 * Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} The latest revision of the workflow
                 * will be used.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Execution): Request<Execution>;
            /** Returns an execution of the given name. */
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
                /** Required. Name of the execution to be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} */
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
                /** Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view. */
                view?: string;
            }): Request<Execution>;
            /**
             * Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their
             * start time (newest first).
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
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the
                 * field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
                 */
                pageSize?: number;
                /**
                 * A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions`
                 * must match the call that provided the page token.
                 */
                pageToken?: string;
                /** Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow} */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view. */
                view?: string;
            }): Request<ListExecutionsResponse>;
        }
        interface WorkflowsResource {
            executions: ExecutionsResource;
        }
        interface LocationsResource {
            workflows: WorkflowsResource;
        }
        interface ProjectsResource {
            locations: LocationsResource;
        }

        const projects: ProjectsResource;
    }
}
