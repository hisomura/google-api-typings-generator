// Type definitions for non-npm package Assured Workloads API v1beta1 1.0
// Project: https://cloud.google.com
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://assuredworkloads.googleapis.com/$discovery/rest?version=v1beta1
// Revision: 20200924

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Assured Workloads API v1beta1 */
    function load(name: "assuredworkloads", version: "v1beta1"): PromiseLike<void>;
    function load(name: "assuredworkloads", version: "v1beta1", callback: () => any): void;

    namespace assuredworkloads {
        interface GoogleCloudAssuredworkloadsV1beta1CreateWorkloadOperationMetadata {
            /** Optional. Compliance controls that should be applied to the resources managed by the workload. */
            complianceRegime?: string;
            /** Optional. Time when the operation was created. */
            createTime?: string;
            /** Optional. The display name of the workload. */
            displayName?: string;
            /** Optional. The parent of the workload. */
            parent?: string;
        }
        interface GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse {
            /** The next page token. Return empty if reached the last page. */
            nextPageToken?: string;
            /** List of Workloads under a given parent. */
            workloads?: GoogleCloudAssuredworkloadsV1beta1Workload[];
        }
        interface GoogleCloudAssuredworkloadsV1beta1Workload {
            /**
             * Required. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as
             * part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form
             * `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
             */
            billingAccount?: string;
            /** Required. Input only. Immutable. Settings specific to resources needed for CJIS. */
            cjisSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings;
            /** Required. Immutable. Compliance Regime associated with this workload. */
            complianceRegime?: string;
            /** Output only. Immutable. The Workload creation timestamp. */
            createTime?: string;
            /**
             * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers,
             * hyphen, and spaces. Example: My Workload
             */
            displayName?: string;
            /** Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations. */
            etag?: string;
            /** Required. Input only. Immutable. Settings specific to resources needed for FedRAMP High. */
            fedrampHighSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings;
            /** Required. Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate. */
            fedrampModerateSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings;
            /** Required. Input only. Immutable. Settings specific to resources needed for IL4. */
            il4Settings?: GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings;
            /** Optional. Labels applied to the workload. */
            labels?: { [P in string]: string };
            /** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
            name?: string;
            /**
             * Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation
             * will fail. Always read only.
             */
            resources?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo[];
        }
        interface GoogleCloudAssuredworkloadsV1beta1WorkloadCJISSettings {
            /** Required. Input only. Immutable. Settings used to create a CMEK crypto key. */
            kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
        }
        interface GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings {
            /** Required. Input only. Immutable. Settings used to create a CMEK crypto key. */
            kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
        }
        interface GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings {
            /** Required. Input only. Immutable. Settings used to create a CMEK crypto key. */
            kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
        }
        interface GoogleCloudAssuredworkloadsV1beta1WorkloadIL4Settings {
            /** Required. Input only. Immutable. Settings used to create a CMEK crypto key. */
            kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings;
        }
        interface GoogleCloudAssuredworkloadsV1beta1WorkloadKMSSettings {
            /** Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary. */
            nextRotationTime?: string;
            /**
             * Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at
             * most 876,000 hours.
             */
            rotationPeriod?: string;
        }
        interface GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo {
            /** Resource identifier. For a project this represents project_number. */
            resourceId?: string;
            /** Indicates the type of resource. */
            resourceType?: string;
        }
        interface GoogleCloudAssuredworkloadsV1CreateWorkloadOperationMetadata {
            /** Optional. Compliance controls that should be applied to the resources managed by the workload. */
            complianceRegime?: string;
            /** Optional. Time when the operation was created. */
            createTime?: string;
            /** Optional. The display name of the workload. */
            displayName?: string;
            /** Optional. The parent of the workload. */
            parent?: string;
        }
        interface GoogleCloudAssuredworkloadsV1Workload {
            /**
             * Required. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as
             * part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form
             * `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
             */
            billingAccount?: string;
            /** Required. Input only. Immutable. Settings specific to resources needed for CJIS. */
            cjisSettings?: GoogleCloudAssuredworkloadsV1WorkloadCJISSettings;
            /** Required. Immutable. Compliance Regime associated with this workload. */
            complianceRegime?: string;
            /** Output only. Immutable. The Workload creation timestamp. */
            createTime?: string;
            /**
             * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers,
             * hyphen, and spaces. Example: My Workload
             */
            displayName?: string;
            /** Optional. ETag of the workload, it is calculated on the basis of the Workload contents. It will be used in Update & Delete operations. */
            etag?: string;
            /** Required. Input only. Immutable. Settings specific to resources needed for FedRAMP High. */
            fedrampHighSettings?: GoogleCloudAssuredworkloadsV1WorkloadFedrampHighSettings;
            /** Required. Input only. Immutable. Settings specific to resources needed for FedRAMP Moderate. */
            fedrampModerateSettings?: GoogleCloudAssuredworkloadsV1WorkloadFedrampModerateSettings;
            /** Required. Input only. Immutable. Settings specific to resources needed for IL4. */
            il4Settings?: GoogleCloudAssuredworkloadsV1WorkloadIL4Settings;
            /** Optional. Labels applied to the workload. */
            labels?: { [P in string]: string };
            /** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
            name?: string;
            /**
             * Output only. The resources associated with this workload. These resources will be created when creating the workload. If any of the projects already exist, the workload creation
             * will fail. Always read only.
             */
            resources?: GoogleCloudAssuredworkloadsV1WorkloadResourceInfo[];
        }
        interface GoogleCloudAssuredworkloadsV1WorkloadCJISSettings {
            /** Required. Input only. Immutable. Settings used to create a CMEK crypto key. */
            kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
        }
        interface GoogleCloudAssuredworkloadsV1WorkloadFedrampHighSettings {
            /** Required. Input only. Immutable. Settings used to create a CMEK crypto key. */
            kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
        }
        interface GoogleCloudAssuredworkloadsV1WorkloadFedrampModerateSettings {
            /** Required. Input only. Immutable. Settings used to create a CMEK crypto key. */
            kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
        }
        interface GoogleCloudAssuredworkloadsV1WorkloadIL4Settings {
            /** Required. Input only. Immutable. Settings used to create a CMEK crypto key. */
            kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKMSSettings;
        }
        interface GoogleCloudAssuredworkloadsV1WorkloadKMSSettings {
            /** Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary. */
            nextRotationTime?: string;
            /**
             * Required. Input only. Immutable. [next_rotation_time] will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at
             * most 876,000 hours.
             */
            rotationPeriod?: string;
        }
        interface GoogleCloudAssuredworkloadsV1WorkloadResourceInfo {
            /** Resource identifier. For a project this represents project_number. */
            resourceId?: string;
            /** Indicates the type of resource. */
            resourceType?: string;
        }
        interface GoogleLongrunningListOperationsResponse {
            /** The standard List next-page token. */
            nextPageToken?: string;
            /** A list of operations that matches the specified filter in the request. */
            operations?: GoogleLongrunningOperation[];
        }
        interface GoogleLongrunningOperation {
            /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
            done?: boolean;
            /** The error result of the operation in case of failure or cancellation. */
            error?: GoogleRpcStatus;
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
        // tslint:disable-next-line:no-empty-interface
        interface GoogleProtobufEmpty {
        }
        interface GoogleRpcStatus {
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
        interface OperationsResource {
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
            }): Request<GoogleLongrunningOperation>;
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
            }): Request<GoogleLongrunningListOperationsResponse>;
        }
        interface WorkloadsResource {
            /** Creates Assured Workload. */
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /**
                 * Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the
                 * identifier will add a label to the workload and contained projects with the identifier as the value.
                 */
                externalId?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`. */
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
                resource: GoogleCloudAssuredworkloadsV1beta1Workload;
            }): Request<GoogleLongrunningOperation>;
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /**
                 * Optional. A identifier associated with the workload and underlying projects which allows for the break down of billing costs for a workload. The value provided for the
                 * identifier will add a label to the workload and contained projects with the identifier as the value.
                 */
                externalId?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Required. The resource name of the new Workload's parent. Must be of the form `organizations/{org_id}/locations/{location_id}`. */
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
            body: GoogleCloudAssuredworkloadsV1beta1Workload): Request<GoogleLongrunningOperation>;
            /** Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error. */
            delete(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Optional. The etag of the workload. If this is provided, it must match the server's etag. */
                etag?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Required. The `name` field is used to identify the workload. Format: organizations/{org_id}/locations/{location_id}/workloads/{workload_id} */
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
            /** Gets Assured Workload associated with a CRM Node */
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
                /**
                 * Required. The resource name of the Workload to fetch. This is the workloads's relative path in the API, formatted as
                 * "organizations/{organization_id}/locations/{location_id}/workloads/{workload_id}". For example, "organizations/123/locations/us-east1/workloads/assured-workload-1".
                 */
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
            }): Request<GoogleCloudAssuredworkloadsV1beta1Workload>;
            /** Lists Assured Workloads under a CRM Node. */
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
                /** A custom filter for filtering by properties of a workload. At this time, only filtering by labels is supported. */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Page size. */
                pageSize?: number;
                /** Page token returned from previous request. Page token contains context from previous request. Page token needs to be passed in the second and following requests. */
                pageToken?: string;
                /** Required. Parent Resource to list workloads from. Must be of the form `organizations/{org_id}/locations/{location}`. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse>;
            /**
             * Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per
             * workload can be in progress.
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
                /** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. The list of fields to be updated. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: GoogleCloudAssuredworkloadsV1beta1Workload;
            }): Request<GoogleCloudAssuredworkloadsV1beta1Workload>;
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
                /** Optional. The resource name of the workload. Format: organizations/{organization}/locations/{location}/workloads/{workload} Read-only. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. The list of fields to be updated. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: GoogleCloudAssuredworkloadsV1beta1Workload): Request<GoogleCloudAssuredworkloadsV1beta1Workload>;
        }
        interface LocationsResource {
            operations: OperationsResource;
            workloads: WorkloadsResource;
        }
        interface OrganizationsResource {
            locations: LocationsResource;
        }

        const organizations: OrganizationsResource;
    }
}
