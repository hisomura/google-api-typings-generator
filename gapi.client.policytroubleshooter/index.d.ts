/* Type definitions for non-npm package Policy Troubleshooter API v1 1.0 */
// Project: https://cloud.google.com/iam/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://policytroubleshooter.googleapis.com/$discovery/rest?version=v1
// Revision: 20201113

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Policy Troubleshooter API v1 */
    function load(name: "policytroubleshooter", version: "v1"): PromiseLike<void>;
    function load(name: "policytroubleshooter", version: "v1", callback: () => any): void;

    namespace policytroubleshooter {
        interface GoogleCloudPolicytroubleshooterV1AccessTuple {
            /**
             * Required. The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. For examples of
             * full resource names for Google Cloud services, see https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
             */
            fullResourceName?: string;
            /**
             * Required. The IAM permission to check for the specified member and resource. For a complete list of IAM permissions, see https://cloud.google.com/iam/help/permissions/reference. For
             * a complete list of predefined IAM roles and the permissions in each role, see https://cloud.google.com/iam/help/roles/reference.
             */
            permission?: string;
            /**
             * Required. The member, or principal, whose access you want to check, in the form of the email address that represents that member. For example, `alice@example.com` or
             * `my-service-account@my-project.iam.gserviceaccount.com`. The member must be a Google Account or a service account. Other types of members are not supported.
             */
            principal?: string;
        }
        interface GoogleCloudPolicytroubleshooterV1BindingExplanation {
            /**
             * Required. Indicates whether _this binding_ provides the specified permission to the specified member for the specified resource. This field does _not_ indicate whether the member
             * actually has the permission for the resource. There might be another binding that overrides this binding. To determine whether the member actually has the permission, use the
             * `access` field in the TroubleshootIamPolicyResponse.
             */
            access?: string;
            /** A condition expression that prevents access unless the expression evaluates to `true`. To learn about IAM Conditions, see http://cloud.google.com/iam/help/conditions/overview. */
            condition?: GoogleTypeExpr;
            /**
             * Indicates whether each member in the binding includes the member specified in the request, either directly or indirectly. Each key identifies a member in the binding, and each value
             * indicates whether the member in the binding includes the member in the request. For example, suppose that a binding includes the following members: * `user:alice@example.com` *
             * `group:product-eng@example.com` You want to troubleshoot access for `user:bob@example.com`. This user is a member of the group `group:product-eng@example.com`. For the first member
             * in the binding, the key is `user:alice@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_NOT_INCLUDED`. For the second member in the binding, the key is
             * `group:product-eng@example.com`, and the `membership` field in the value is set to `MEMBERSHIP_INCLUDED`.
             */
            memberships?: { [P in string]: GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership };
            /** The relevance of this binding to the overall determination for the entire policy. */
            relevance?: string;
            /**
             * The role that this binding grants. For example, `roles/compute.serviceAgent`. For a complete list of predefined IAM roles, as well as the permissions in each role, see
             * https://cloud.google.com/iam/help/roles/reference.
             */
            role?: string;
            /** Indicates whether the role granted by this binding contains the specified permission. */
            rolePermission?: string;
            /** The relevance of the permission's existence, or nonexistence, in the role to the overall determination for the entire policy. */
            rolePermissionRelevance?: string;
        }
        interface GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership {
            /** Indicates whether the binding includes the member. */
            membership?: string;
            /** The relevance of the member's status to the overall determination for the binding. */
            relevance?: string;
        }
        interface GoogleCloudPolicytroubleshooterV1ExplainedPolicy {
            /**
             * Indicates whether _this policy_ provides the specified permission to the specified member for the specified resource. This field does _not_ indicate whether the member actually has
             * the permission for the resource. There might be another policy that overrides this policy. To determine whether the member actually has the permission, use the `access` field in the
             * TroubleshootIamPolicyResponse.
             */
            access?: string;
            /**
             * Details about how each binding in the policy affects the member's ability, or inability, to use the permission for the resource. If the sender of the request does not have access to
             * the policy, this field is omitted.
             */
            bindingExplanations?: GoogleCloudPolicytroubleshooterV1BindingExplanation[];
            /**
             * The full resource name that identifies the resource. For example, `//compute.googleapis.com/projects/my-project/zones/us-central1-a/instances/my-instance`. If the sender of the
             * request does not have access to the policy, this field is omitted. For examples of full resource names for Google Cloud services, see
             * https://cloud.google.com/iam/help/troubleshooter/full-resource-names.
             */
            fullResourceName?: string;
            /** The IAM policy attached to the resource. If the sender of the request does not have access to the policy, this field is empty. */
            policy?: GoogleIamV1Policy;
            /**
             * The relevance of this policy to the overall determination in the TroubleshootIamPolicyResponse. If the sender of the request does not have access to the policy, this field is
             * omitted.
             */
            relevance?: string;
        }
        interface GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest {
            /** The information to use for checking whether a member has a permission for a resource. */
            accessTuple?: GoogleCloudPolicytroubleshooterV1AccessTuple;
        }
        interface GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse {
            /** Indicates whether the member has the specified permission for the specified resource, based on evaluating all of the applicable IAM policies. */
            access?: string;
            /**
             * List of IAM policies that were evaluated to check the member's permissions, with annotations to indicate how each policy contributed to the final result. The list of policies can
             * include the policy for the resource itself. It can also include policies that are inherited from higher levels of the resource hierarchy, including the organization, the folder, and
             * the project. To learn more about the resource hierarchy, see https://cloud.google.com/iam/help/resource-hierarchy.
             */
            explainedPolicies?: GoogleCloudPolicytroubleshooterV1ExplainedPolicy[];
        }
        interface GoogleIamV1AuditConfig {
            /** The configuration for logging of each type of permission. */
            auditLogConfigs?: GoogleIamV1AuditLogConfig[];
            /**
             * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all
             * services.
             */
            service?: string;
        }
        interface GoogleIamV1AuditLogConfig {
            /** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
            exemptedMembers?: string[];
            /** The log type that this config enables. */
            logType?: string;
        }
        interface GoogleIamV1Binding {
            /**
             * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`,
             * then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the members in this binding. To learn which
             * resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
             */
            condition?: GoogleTypeExpr;
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
        interface GoogleIamV1Policy {
            /** Specifies cloud audit logging configuration for this policy. */
            auditConfigs?: GoogleIamV1AuditConfig[];
            /**
             * Associates a list of `members` to a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at
             * least one member.
             */
            bindings?: GoogleIamV1Binding[];
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
        interface GoogleTypeExpr {
            /** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
            description?: string;
            /** Textual representation of an expression in Common Expression Language syntax. */
            expression?: string;
            /** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
            location?: string;
            /** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
            title?: string;
        }
        interface IamResource {
            /** Checks whether a member has a specific permission for a specific resource, and explains why the member does or does not have that permission. */
            troubleshoot(request: {
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
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest;
            }): Request<GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse>;
            troubleshoot(request: {
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
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest): Request<GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse>;
        }

        const iam: IamResource;
    }
}
