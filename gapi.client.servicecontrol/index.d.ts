// Type definitions for non-npm package Service Control API v2 2.0
// Project: https://cloud.google.com/service-control/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://servicecontrol.googleapis.com/$discovery/rest?version=v2
// Revision: 20201025

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Service Control API v2 */
    function load(name: "servicecontrol", version: "v2"): PromiseLike<void>;
    function load(name: "servicecontrol", version: "v2", callback: () => any): void;

    namespace servicecontrol {
        interface Api {
            /**
             * The API operation name. For gRPC requests, it is the fully qualified API method name, such as "google.pubsub.v1.Publisher.Publish". For OpenAPI requests, it is the `operationId`,
             * such as "getPet".
             */
            operation?: string;
            /** The API protocol used for sending the request, such as "http", "https", "grpc", or "internal". */
            protocol?: string;
            /**
             * The API service name. It is a logical identifier for a networked API, such as "pubsub.googleapis.com". The naming syntax depends on the API management system being used for handling
             * the request.
             */
            service?: string;
            /** The API version associated with the API operation above, such as "v1" or "v1alpha1". */
            version?: string;
        }
        interface AttributeContext {
            /** Represents an API operation that is involved to a network activity. */
            api?: Api;
            /** The destination of a network activity, such as accepting a TCP connection. In a multi hop network activity, the destination represents the receiver of the last hop. */
            destination?: Peer;
            /** Supports extensions for advanced use cases, such as logs and metrics. */
            extensions?: Array<{ [P in string]: any }>;
            /**
             * The origin of a network activity. In a multi hop network activity, the origin represents the sender of the first hop. For the first hop, the `source` and the `origin` must have the
             * same content.
             */
            origin?: Peer;
            /** Represents a network request, such as an HTTP request. */
            request?: Request;
            /** Represents a target resource that is involved with a network activity. If multiple resources are involved with an activity, this must be the primary one. */
            resource?: Resource;
            /** Represents a network response, such as an HTTP response. */
            response?: Response;
            /** The source of a network activity, such as starting a TCP connection. In a multi hop network activity, the source represents the sender of the last hop. */
            source?: Peer;
        }
        interface AuditLog {
            /** Authentication information. */
            authenticationInfo?: AuthenticationInfo;
            /** Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission} tuple. */
            authorizationInfo?: AuthorizationInfo[];
            /** Other service-specific data about the request, response, and other information associated with the current audited event. */
            metadata?: { [P in string]: any };
            /**
             * The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable"
             * "google.logging.v2.ConfigServiceV2.CreateSink"
             */
            methodName?: string;
            /** The number of items returned from a List or Query API method, if applicable. */
            numResponseItems?: string;
            /**
             * The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never
             * include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
             */
            request?: { [P in string]: any };
            /** Metadata about the operation. */
            requestMetadata?: RequestMetadata;
            /** The resource location information. */
            resourceLocation?: ResourceLocation;
            /**
             * The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example:
             * "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID"
             */
            resourceName?: string;
            /**
             * The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all
             * changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto
             * equivalent, the proto name will be indicated in the `@type` property.
             */
            resourceOriginalState?: { [P in string]: any };
            /**
             * The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never
             * include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property.
             */
            response?: { [P in string]: any };
            /** Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities. */
            serviceData?: { [P in string]: any };
            /** The name of the API service performing the operation. For example, `"compute.googleapis.com"`. */
            serviceName?: string;
            /** The status of the overall operation. */
            status?: Status;
        }
        interface Auth {
            /**
             * A list of access level resource names that allow resources to be accessed by authenticated requester. It is part of Secure GCP processing for the incoming request. An access level
             * string has the format: "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}" Example:
             * "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
             */
            accessLevels?: string[];
            /**
             * The intended audience(s) for this authentication information. Reflects the audience (`aud`) claim within a JWT. The audience value(s) depends on the `issuer`, but typically include
             * one or more of the following pieces of information: * The services intended to receive the credential. For example, ["https://pubsub.googleapis.com/",
             * "https://storage.googleapis.com/"]. * A set of service-based scopes. For example, ["https://www.googleapis.com/auth/cloud-platform"]. * The client id of an app, such as the Firebase
             * project id for JWTs from Firebase Auth. Consult the documentation for the credential issuer to determine the information provided.
             */
            audiences?: string[];
            /**
             * Structured claims presented with the credential. JWTs include `{key: value}` pairs for standard and private claims. The following is a subset of the standard required and optional
             * claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'],
             * 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926} SAML assertions are similarly specified, but with an identity
             * provider dependent structure.
             */
            claims?: { [P in string]: any };
            /**
             * The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client
             * id looks as follows: "123456789012.apps.googleusercontent.com".
             */
            presenter?: string;
            /**
             * The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the
             * subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id}"
             */
            principal?: string;
        }
        interface AuthenticationInfo {
            /** The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority. */
            authoritySelector?: string;
            /**
             * The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject`
             * field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit
             * logs](https://cloud.google.com/logging/docs/audit#user-id).
             */
            principalEmail?: string;
            /** String representation of identity of requesting party. Populated for both first and third party identities. */
            principalSubject?: string;
            /**
             * Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by
             * delegating on a service account. When multiple authorities present, they are guaranteed to be sorted based on the original ordering of the identity delegation events.
             */
            serviceAccountDelegationInfo?: ServiceAccountDelegationInfo[];
            /**
             * The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name.
             * For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}"
             */
            serviceAccountKeyName?: string;
            /**
             * The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated
             * in the `@type` property.
             */
            thirdPartyPrincipal?: { [P in string]: any };
        }
        interface AuthorizationInfo {
            /** Whether or not authorization for `resource` and `permission` was granted. */
            granted?: boolean;
            /** The required IAM permission. */
            permission?: string;
            /** The resource being accessed, as a REST-style string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID */
            resource?: string;
            /**
             * Resource attributes used in IAM condition evaluation. This field contains resource attributes like resource type and resource name. To get the whole view of the attributes used in
             * IAM condition evaluation, the user must also look into `AuditLog.request_metadata.request_attributes`.
             */
            resourceAttributes?: Resource;
        }
        interface CheckRequest {
            /** Describes attributes about the operation being executed by the service. */
            attributes?: AttributeContext;
            /** Describes the resources and the policies applied to each resource. */
            resources?: ResourceInfo[];
            /**
             * Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest
             * configuration.
             */
            serviceConfigId?: string;
        }
        interface CheckResponse {
            /** Returns a set of request contexts generated from the `CheckRequest`. */
            headers?: { [P in string]: string };
            /** An 'OK' status allows the operation. Any other status indicates a denial; [google.rpc.Status.details]() would contain additional details about the denial. */
            status?: Status;
        }
        interface FirstPartyPrincipal {
            /** The email address of a Google account. . */
            principalEmail?: string;
            /** Metadata about the service that uses the service account. . */
            serviceMetadata?: { [P in string]: any };
        }
        interface Peer {
            /** The IP address of the peer. */
            ip?: string;
            /** The labels associated with the peer. */
            labels?: { [P in string]: string };
            /** The network port of the peer. */
            port?: string;
            /**
             * The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the idenity associated with a load balancer that
             * forwared the request.
             */
            principal?: string;
            /** The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running. */
            regionCode?: string;
        }
        interface ReportRequest {
            /** Describes the list of operations to be reported. Each operation is represented as an AttributeContext, and contains all attributes around an API access. */
            operations?: AttributeContext[];
            /**
             * Specifies the version of the service configuration that should be used to process the request. Must not be empty. Set this field to 'latest' to specify using the latest
             * configuration.
             */
            serviceConfigId?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface ReportResponse {
        }
        interface Request {
            /** The request authentication. May be absent for unauthenticated requests. Derived from the HTTP request `Authorization` header or equivalent. */
            auth?: Auth;
            /**
             * The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are
             * case-insensitive.
             */
            headers?: { [P in string]: string };
            /** The HTTP request `Host` header value. */
            host?: string;
            /** The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service. */
            id?: string;
            /** The HTTP request method, such as `GET`, `POST`. */
            method?: string;
            /** The HTTP URL path. */
            path?: string;
            /**
             * The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
             * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details.
             */
            protocol?: string;
            /** The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed. */
            query?: string;
            /** A special parameter for request reason. It is used by security systems to associate auditing information with a request. */
            reason?: string;
            /** The HTTP URL scheme, such as `http` and `https`. */
            scheme?: string;
            /** The HTTP request size in bytes. If unknown, it must be -1. */
            size?: string;
            /** The timestamp when the `destination` service receives the first byte of the request. */
            time?: string;
        }
        interface RequestMetadata {
            /**
             * The IP address of the caller. For caller from internet, this will be public IPv4 or IPv6 address. For caller from a Compute Engine VM with external IP address, this will be the VM's
             * external IP address. For caller from a Compute Engine VM without external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will
             * be the VM's internal IPv4 address, otherwise the `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information.
             */
            callerIp?: string;
            /**
             * The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See
             * https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example:
             * "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID"
             */
            callerNetwork?: string;
            /**
             * The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the
             * Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google;
             * (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app. NOLINT
             */
            callerSuppliedUserAgent?: string;
            /**
             * The destination of a network activity, such as accepting a TCP connection. In a multi hop network activity, the destination represents the receiver of the last hop. Only two fields
             * are used in this message, Peer.port and Peer.ip. These fields are optionally populated by those services utilizing the IAM condition feature.
             */
            destinationAttributes?: Peer;
            /**
             * Request attributes used in IAM condition evaluation. This field contains request attributes like request time and access levels associated with the request. To get the whole view of
             * the attributes used in IAM condition evaluation, the user must also look into `AuditLog.authentication_info.resource_attributes`.
             */
            requestAttributes?: Request;
        }
        interface Resource {
            /**
             * Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be
             * preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
             */
            annotations?: { [P in string]: string };
            /** Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed. */
            createTime?: string;
            /** Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty. */
            deleteTime?: string;
            /** Mutable. The display name set by clients. Must be <= 63 characters. */
            displayName?: string;
            /**
             * Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource
             * being written.
             */
            etag?: string;
            /** The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels. */
            labels?: { [P in string]: string };
            /**
             * The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service}/{resource.name}". The differences between a resource
             * name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. *
             * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See
             * https://cloud.google.com/apis/design/resource_names for details.
             */
            name?: string;
            /** The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request. */
            service?: string;
            /**
             * The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be
             * "{service}/{kind}".
             */
            type?: string;
            /**
             * The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful
             * creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4.
             */
            uid?: string;
            /**
             * Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should
             * refresh this value.
             */
            updateTime?: string;
        }
        interface ResourceInfo {
            /** The name of the resource referenced in the request. */
            name?: string;
            /** The resource permission needed for this request. The format must be "{service}/{plural}.{verb}". */
            permission?: string;
            /** The resource type in the format of "{service}/{kind}". */
            type?: string;
        }
        interface ResourceLocation {
            /**
             * The locations of a resource after the execution of the operation. Requests to create or delete a location based resource must populate the 'current_locations' field and not the
             * 'original_locations' field. For example: "europe-west1-a" "us-east1" "nam3"
             */
            currentLocations?: string[];
            /**
             * The locations of a resource prior to the execution of the operation. Requests that mutate the resource's location must populate both the 'original_locations' as well as the
             * 'current_locations' fields. For example: "europe-west1-a" "us-east1" "nam3"
             */
            originalLocations?: string[];
        }
        interface Response {
            /** The HTTP response status code, such as `200` and `404`. */
            code?: string;
            /**
             * The HTTP response headers. If multiple headers share the same key, they must be merged according to HTTP spec. All header keys must be lowercased, because HTTP header keys are
             * case-insensitive.
             */
            headers?: { [P in string]: string };
            /** The HTTP response size in bytes. If unknown, it must be -1. */
            size?: string;
            /** The timestamp when the `destination` service generates the first byte of the response. */
            time?: string;
        }
        interface ServiceAccountDelegationInfo {
            /** First party (Google) identity as the real authority. */
            firstPartyPrincipal?: FirstPartyPrincipal;
            /** A string representing the principal_subject associated with the identity. See go/3pical for more info on how principal_subject is formatted. */
            principalSubject?: string;
            /** Third party identity as the real authority. */
            thirdPartyPrincipal?: ThirdPartyPrincipal;
        }
        interface SpanContext {
            /**
             * The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it
             * is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte
             * array.
             */
            spanName?: string;
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
        interface ThirdPartyPrincipal {
            /** Metadata about third party identity. */
            thirdPartyClaims?: { [P in string]: any };
        }
        interface ServicesResource {
            /**
             * Private Preview. This feature is only available for approved services. This method provides admission control for services that are integrated with [Service
             * Infrastructure](/service-infrastructure). It checks whether an operation should be allowed based on the service configuration and relevant policies. It must be called before the
             * operation is executed. For more information, see [Admission Control](/service-infrastructure/docs/admission-control). NOTE: The admission control has an expected policy propagation
             * delay of 60s. The caller **must** not depend on the most recent policy changes. NOTE: The admission control has a hard limit of 1 referenced resources per call. If an operation
             * refers to more than 1 resources, the caller must call the Check method multiple times. This method requires the `servicemanagement.services.check` permission on the specified
             * service. For more information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
             */
            check(request: {
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
                /**
                 * The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See
                 * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
                 */
                serviceName: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: CheckRequest;
            }): client.Request<CheckResponse>;
            check(request: {
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
                /**
                 * The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See
                 * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
                 */
                serviceName: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: CheckRequest): client.Request<CheckResponse>;
            /**
             * Private Preview. This feature is only available for approved services. This method provides telemetry reporting for services that are integrated with [Service
             * Infrastructure](/service-infrastructure). It reports a list of operations that have occurred on a service. It must be called after the operations have been executed. For more
             * information, see [Telemetry Reporting](/service-infrastructure/docs/telemetry-reporting). NOTE: The telemetry reporting has a hard limit of 1000 operations and 1MB per Report call.
             * It is recommended to have no more than 100 operations per call. This method requires the `servicemanagement.services.report` permission on the specified service. For more
             * information, see [Service Control API Access Control](https://cloud.google.com/service-infrastructure/docs/service-control/access-control).
             */
            report(request: {
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
                /**
                 * The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See
                 * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
                 */
                serviceName: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: ReportRequest;
            }): client.Request<{}>;
            report(request: {
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
                /**
                 * The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See
                 * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
                 */
                serviceName: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: ReportRequest): client.Request<{}>;
        }

        const services: ServicesResource;
    }
}
