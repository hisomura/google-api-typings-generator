// Type definitions for non-npm package Cloud Trace API v2 2.0
// Project: https://cloud.google.com/trace
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://cloudtrace.googleapis.com/$discovery/rest?version=v2
// Revision: 20200922

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Cloud Trace API v2 */
    function load(name: "cloudtrace", version: "v2"): PromiseLike<void>;
    function load(name: "cloudtrace", version: "v2", callback: () => any): void;

    namespace cloudtrace {
        interface Annotation {
            /** A set of attributes on the annotation. You can have up to 4 attributes per Annotation. */
            attributes?: Attributes;
            /** A user-supplied message describing the event. The maximum length for the description is 256 bytes. */
            description?: TruncatableString;
        }
        interface Attributes {
            /**
             * The set of attributes. Each attribute's key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the Boolean values `true` and
             * `false`. For example: "/instance_id": { "string_value": { "value": "my-instance" } } "/http/request_bytes": { "int_value": 300 } "abc.com/myattribute": { "bool_value": false }
             */
            attributeMap?: { [P in string]: AttributeValue };
            /**
             * The number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0 then all
             * attributes are valid.
             */
            droppedAttributesCount?: number;
        }
        interface AttributeValue {
            /** A Boolean value represented by `true` or `false`. */
            boolValue?: boolean;
            /** A 64-bit signed integer. */
            intValue?: string;
            /** A string up to 256 bytes long. */
            stringValue?: TruncatableString;
        }
        interface BatchWriteSpansRequest {
            /** Required. A list of new spans. The span names must not match existing spans, or the results are undefined. */
            spans?: Span[];
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface Link {
            /** A set of attributes on the link. You have have up to 32 attributes per link. */
            attributes?: Attributes;
            /** The [SPAN_ID] for a span within a trace. */
            spanId?: string;
            /** The [TRACE_ID] for a trace within a project. */
            traceId?: string;
            /** The relationship of the current span relative to the linked span. */
            type?: string;
        }
        interface Links {
            /** The number of dropped links after the maximum size was enforced. If this value is 0, then no links were dropped. */
            droppedLinksCount?: number;
            /** A collection of links. */
            link?: Link[];
        }
        interface MessageEvent {
            /** The number of compressed bytes sent or received. If missing assumed to be the same size as uncompressed. */
            compressedSizeBytes?: string;
            /** An identifier for the MessageEvent's message that can be used to match SENT and RECEIVED MessageEvents. It is recommended to be unique within a Span. */
            id?: string;
            /** Type of MessageEvent. Indicates whether the message was sent or received. */
            type?: string;
            /** The number of uncompressed bytes sent or received. */
            uncompressedSizeBytes?: string;
        }
        interface Module {
            /** A unique identifier for the module, usually a hash of its contents (up to 128 bytes). */
            buildId?: TruncatableString;
            /** For example: main binary, kernel modules, and dynamic libraries such as libc.so, sharedlib.so (up to 256 bytes). */
            module?: TruncatableString;
        }
        interface Span {
            /** A set of attributes on the span. You can have up to 32 attributes per span. */
            attributes?: Attributes;
            /** Optional. The number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans. */
            childSpanCount?: number;
            /**
             * Required. A description of the span's operation (up to 128 bytes). Trace displays the description in the Google Cloud Platform Console. For example, the display name can be a
             * qualified method name or a file name and a line number where the operation is called. A best practice is to use the same display name within an application and at the same call
             * point. This makes it easier to correlate spans in different traces.
             */
            displayName?: TruncatableString;
            /**
             * Required. The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the
             * server application handler stops running.
             */
            endTime?: string;
            /** Links associated with the span. You can have up to 128 links per Span. */
            links?: Links;
            /**
             * Required. The resource name of the span in the following format: projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a
             * 32-character hexadecimal encoding of a 16-byte array. [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. It
             * should not be zero.
             */
            name?: string;
            /** The [SPAN_ID] of this span's parent span. If this is a root span, then this field must be empty. */
            parentSpanId?: string;
            /**
             * Optional. Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Trace is unable to take advantage of this helpful
             * information.
             */
            sameProcessAsParentSpan?: boolean;
            /** Required. The [SPAN_ID] portion of the span's resource name. */
            spanId?: string;
            /**
             * Optional. Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee)
             * to identify an RPC call.
             */
            spanKind?: string;
            /** Stack trace captured at the start of the span. */
            stackTrace?: StackTrace;
            /**
             * Required. The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the
             * server's application handler starts running.
             */
            startTime?: string;
            /** Optional. The final status for this span. */
            status?: Status;
            /** A set of time events. You can have up to 32 annotations and 128 message events per span. */
            timeEvents?: TimeEvents;
        }
        interface StackFrame {
            /** The column number where the function call appears, if available. This is important in JavaScript because of its anonymous functions. */
            columnNumber?: string;
            /** The name of the source file where the function call appears (up to 256 bytes). */
            fileName?: TruncatableString;
            /** The fully-qualified name that uniquely identifies the function or method that is active in this frame (up to 1024 bytes). */
            functionName?: TruncatableString;
            /** The line number in `file_name` where the function call appears. */
            lineNumber?: string;
            /** The binary module from where the code was loaded. */
            loadModule?: Module;
            /** An un-mangled function name, if `function_name` is [mangled](http://www.avabodh.com/cxxin/namemangling.html). The name can be fully-qualified (up to 1024 bytes). */
            originalFunctionName?: TruncatableString;
            /** The version of the deployed source code (up to 128 bytes). */
            sourceVersion?: TruncatableString;
        }
        interface StackFrames {
            /** The number of stack frames that were dropped because there were too many stack frames. If this value is 0, then no stack frames were dropped. */
            droppedFramesCount?: number;
            /** Stack frames in this call stack. */
            frame?: StackFrame[];
        }
        interface StackTrace {
            /** Stack frames in this stack trace. A maximum of 128 frames are allowed. */
            stackFrames?: StackFrames;
            /**
             * The hash ID is used to conserve network bandwidth for duplicate stack traces within a single trace. Often multiple spans will have identical stack traces. The first occurrence of a
             * stack trace should contain both the `stackFrame` content and a value in `stackTraceHashId`. Subsequent spans within the same request can refer to that stack trace by only setting
             * `stackTraceHashId`.
             */
            stackTraceHashId?: string;
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
        interface TimeEvent {
            /** Text annotation with a set of attributes. */
            annotation?: Annotation;
            /** An event describing a message sent/received between Spans. */
            messageEvent?: MessageEvent;
            /** The timestamp indicating the time the event occurred. */
            time?: string;
        }
        interface TimeEvents {
            /** The number of dropped annotations in all the included time events. If the value is 0, then no annotations were dropped. */
            droppedAnnotationsCount?: number;
            /** The number of dropped message events in all the included time events. If the value is 0, then no message events were dropped. */
            droppedMessageEventsCount?: number;
            /** A collection of `TimeEvent`s. */
            timeEvent?: TimeEvent[];
        }
        interface TruncatableString {
            /** The number of bytes removed from the original string. If this value is 0, then the string was not shortened. */
            truncatedByteCount?: number;
            /**
             * The shortened string. For example, if the original string is 500 bytes long and the limit of the string is 128 bytes, then `value` contains the first 128 bytes of the 500-byte
             * string. Truncation always happens on a UTF8 character boundary. If there are multi-byte characters in the string, then the length of the shortened string might be less than the size
             * limit.
             */
            value?: string;
        }
        interface SpansResource {
            /** Creates a new span. */
            createSpan(request: {
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
                 * Required. The resource name of the span in the following format: projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is
                 * a 32-character hexadecimal encoding of a 16-byte array. [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
                 * It should not be zero.
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
                /** Request body */
                resource: Span;
            }): Request<Span>;
            createSpan(request: {
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
                 * Required. The resource name of the span in the following format: projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is
                 * a 32-character hexadecimal encoding of a 16-byte array. [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array.
                 * It should not be zero.
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
            },
            body: Span): Request<Span>;
        }
        interface TracesResource {
            /** Sends new spans to new or existing traces. You cannot update existing spans. */
            batchWrite(request: {
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
                /** Required. The name of the project where the spans belong. The format is `projects/[PROJECT_ID]`. */
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
                resource: BatchWriteSpansRequest;
            }): Request<{}>;
            batchWrite(request: {
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
                /** Required. The name of the project where the spans belong. The format is `projects/[PROJECT_ID]`. */
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
            body: BatchWriteSpansRequest): Request<{}>;
            spans: SpansResource;
        }
        interface ProjectsResource {
            traces: TracesResource;
        }

        const projects: ProjectsResource;
    }
}
