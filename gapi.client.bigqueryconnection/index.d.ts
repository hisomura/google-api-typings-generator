// Type definitions for non-npm package BigQuery Connection API v1beta1 1.0
// Project: https://cloud.google.com/bigquery/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://bigqueryconnection.googleapis.com/$discovery/rest?version=v1beta1
// Revision: 20200817

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load BigQuery Connection API v1beta1 */
    function load(name: "bigqueryconnection", version: "v1beta1"): PromiseLike<void>;
    function load(name: "bigqueryconnection", version: "v1beta1", callback: () => any): void;

    namespace bigqueryconnection {
        interface AuditConfig {
            /** The configuration for logging of each type of permission. */
            auditLogConfigs?: AuditLogConfig[];
            /**
             * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all
             * services.
             */
            service?: string;
        }
        interface AuditLogConfig {
            /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
            exemptedMembers?: string[];
            /** The log type that this config enables. */
            logType?: string;
        }
        interface Binding {
            /**
             * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`,
             * then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the members in this binding. To learn which
             * resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
             */
            condition?: Expr;
            /**
             * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is
             * on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service
             * account. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that
             * represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `group:{emailid}`: An email address that represents a Google group. For example,
             * `admins@example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example,
             * `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. *
             * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example,
             * `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service
             * account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently
             * deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in
             * the binding. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`.
             */
            members?: string[];
            /** Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
            role?: string;
        }
        interface CloudSqlCredential {
            /** The password for the credential. */
            password?: string;
            /** The username for the credential. */
            username?: string;
        }
        interface CloudSqlProperties {
            /** Input only. Cloud SQL credential. */
            credential?: CloudSqlCredential;
            /** Database name. */
            database?: string;
            /** Cloud SQL instance ID in the form `project:location:instance`. */
            instanceId?: string;
            /** Type of the Cloud SQL database. */
            type?: string;
        }
        interface Connection {
            /** Cloud SQL properties. */
            cloudSql?: CloudSqlProperties;
            /** Output only. The creation timestamp of the connection. */
            creationTime?: string;
            /** User provided description. */
            description?: string;
            /** User provided display name for the connection. */
            friendlyName?: string;
            /** Output only. True, if credential is configured for this connection. */
            hasCredential?: boolean;
            /** Output only. The last update timestamp of the connection. */
            lastModifiedTime?: string;
            /** The resource name of the connection in the form of: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` */
            name?: string;
        }
        interface ConnectionCredential {
            /** Credential for Cloud SQL database. */
            cloudSql?: CloudSqlCredential;
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface Expr {
            /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
            description?: string;
            /** Textual representation of an expression in Common Expression Language syntax. */
            expression?: string;
            /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
            location?: string;
            /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
            title?: string;
        }
        interface GetIamPolicyRequest {
            /** OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`. */
            options?: GetPolicyOptions;
        }
        interface GetPolicyOptions {
            /**
             * Optional. The policy format version to be returned. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional
             * bindings must specify version 3. Policies without any conditional bindings may specify any valid value or leave the field unset. To learn which resources support conditions in their
             * IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
             */
            requestedPolicyVersion?: number;
        }
        interface ListConnectionsResponse {
            /** List of connections. */
            connections?: Connection[];
            /** Next page token. */
            nextPageToken?: string;
        }
        interface Policy {
            /** Specifies cloud audit logging configuration for this policy. */
            auditConfigs?: AuditConfig[];
            /**
             * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at
             * least one member.
             */
            bindings?: Binding[];
            /**
             * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make
             * use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems
             * are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM
             * Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1`
             * policy, and all of the conditions in the version `3` policy are lost.
             */
            etag?: string;
            /**
             * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings
             * must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a
             * policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use
             * IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1`
             * policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave
             * the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
             */
            version?: number;
        }
        interface SetIamPolicyRequest {
            /**
             * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Cloud Platform
             * services (such as Projects) might reject them.
             */
            policy?: Policy;
            /**
             * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used:
             * `paths: "bindings, etag"`
             */
            updateMask?: string;
        }
        interface TestIamPermissionsRequest {
            /**
             * The set of permissions to check for the `resource`. Permissions with wildcards (such as '*' or 'storage.*') are not allowed. For more information see [IAM
             * Overview](https://cloud.google.com/iam/docs/overview#permissions).
             */
            permissions?: string[];
        }
        interface TestIamPermissionsResponse {
            /** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
            permissions?: string[];
        }
        interface ConnectionsResource {
            /** Creates a new connection. */
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Optional. Connection id that should be assigned to the created connection. */
                connectionId?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}` */
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
                resource: Connection;
            }): Request<Connection>;
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Optional. Connection id that should be assigned to the created connection. */
                connectionId?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}` */
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
            body: Connection): Request<Connection>;
            /** Deletes connection and associated credential. */
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
                /** Required. Name of the deleted connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` */
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
            /** Returns specified connection. */
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
                /** Required. Name of the requested connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` */
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
            }): Request<Connection>;
            /** Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set. */
            getIamPolicy(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field. */
                resource: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: GetIamPolicyRequest): Request<Policy>;
            /** Returns a list of connections in the given project. */
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
                /** Required. Maximum number of results per page. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Page token. */
                pageToken?: string;
                /** Required. Parent resource name. Must be in the form: `projects/{project_id}/locations/{location_id}` */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListConnectionsResponse>;
            /** Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask. */
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
                /** Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. Update mask for the connection fields to be updated. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Connection;
            }): Request<Connection>;
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
                /** Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Required. Update mask for the connection fields to be updated. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Connection): Request<Connection>;
            /** Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors. */
            setIamPolicy(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field. */
                resource: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: SetIamPolicyRequest): Request<Policy>;
            /**
             * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This
             * operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
             */
            testIamPermissions(request: {
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field. */
                resource: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: TestIamPermissionsRequest): Request<TestIamPermissionsResponse>;
            /** Sets the credential for the specified connection. */
            updateCredential(request: {
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
                /** Required. Name of the connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}/credential` */
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
                resource: ConnectionCredential;
            }): Request<{}>;
            updateCredential(request: {
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
                /** Required. Name of the connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}/credential` */
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
            body: ConnectionCredential): Request<{}>;
        }
        interface LocationsResource {
            connections: ConnectionsResource;
        }
        interface ProjectsResource {
            locations: LocationsResource;
        }

        const projects: ProjectsResource;
    }
}
