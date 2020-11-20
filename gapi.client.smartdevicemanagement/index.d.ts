/* Type definitions for non-npm package Smart Device Management API v1 1.0 */
// Project: https://developers.google.com/nest/device-access
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://smartdevicemanagement.googleapis.com/$discovery/rest?version=v1
// Revision: 20201117

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Smart Device Management API v1 */
    function load(name: "smartdevicemanagement", version: "v1"): PromiseLike<void>;
    function load(name: "smartdevicemanagement", version: "v1", callback: () => any): void;

    namespace smartdevicemanagement {
        interface GoogleHomeEnterpriseSdmV1Device {
            /** Required. The resource name of the device. For example: "enterprises/XYZ/devices/123". */
            name?: string;
            /** Assignee details of the device. */
            parentRelations?: GoogleHomeEnterpriseSdmV1ParentRelation[];
            /** Output only. Device traits. */
            traits?: { [P in string]: any };
            /**
             * Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it
             * is assigned to. Instead, use the returned traits for the device.
             */
            type?: string;
        }
        interface GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest {
            /** The command name to execute, represented by the fully qualified protobuf message name. */
            command?: string;
            /** The command message to execute, represented as a Struct. */
            params?: { [P in string]: any };
        }
        interface GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse {
            /** The results of executing the command. */
            results?: { [P in string]: any };
        }
        interface GoogleHomeEnterpriseSdmV1ListDevicesResponse {
            /** The list of devices. */
            devices?: GoogleHomeEnterpriseSdmV1Device[];
            /** The pagination token to retrieve the next page of results. */
            nextPageToken?: string;
        }
        interface GoogleHomeEnterpriseSdmV1ListRoomsResponse {
            /** The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
            nextPageToken?: string;
            /** The list of rooms. */
            rooms?: GoogleHomeEnterpriseSdmV1Room[];
        }
        interface GoogleHomeEnterpriseSdmV1ListStructuresResponse {
            /** The pagination token to retrieve the next page of results. If this field is omitted, there are no subsequent pages. */
            nextPageToken?: string;
            /** The list of structures. */
            structures?: GoogleHomeEnterpriseSdmV1Structure[];
        }
        interface GoogleHomeEnterpriseSdmV1ParentRelation {
            /** Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to. */
            displayName?: string;
            /**
             * Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or
             * "enterprises/XYZ/structures/ABC/rooms/123"
             */
            parent?: string;
        }
        interface GoogleHomeEnterpriseSdmV1Room {
            /** Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123". */
            name?: string;
            /** Room traits. */
            traits?: { [P in string]: any };
        }
        interface GoogleHomeEnterpriseSdmV1Structure {
            /** Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC". */
            name?: string;
            /** Structure traits. */
            traits?: { [P in string]: any };
        }
        interface DevicesResource {
            /** Executes a command to device managed by the enterprise. */
            executeCommand(request: {
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
                /** The name of the device requested. For example: "enterprises/XYZ/devices/123" */
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
                resource: GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
            }): Request<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>;
            executeCommand(request: {
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
                /** The name of the device requested. For example: "enterprises/XYZ/devices/123" */
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
            body: GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest): Request<GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>;
            /** Gets a device managed by the enterprise. */
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
                /** The name of the device requested. For example: "enterprises/XYZ/devices/123" */
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
            }): Request<GoogleHomeEnterpriseSdmV1Device>;
            /** Lists devices managed by the enterprise. */
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
                /** Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing' */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Optional requested page size. Server may return fewer devices than requested. If unspecified, server will pick an appropriate default. */
                pageSize?: number;
                /** Optional token of the page to retrieve. */
                pageToken?: string;
                /** The parent enterprise to list devices under. E.g. "enterprises/XYZ". */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<GoogleHomeEnterpriseSdmV1ListDevicesResponse>;
        }
        interface RoomsResource {
            /** Gets a room managed by the enterprise. */
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
                /** The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123". */
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
            }): Request<GoogleHomeEnterpriseSdmV1Room>;
            /** Lists rooms managed by the enterprise. */
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
                /** Requested page size. Server may return fewer rooms than requested. If unspecified, server will pick an appropriate default. */
                pageSize?: number;
                /** The token of the page to retrieve. */
                pageToken?: string;
                /** The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC". */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<GoogleHomeEnterpriseSdmV1ListRoomsResponse>;
        }
        interface StructuresResource {
            /** Gets a structure managed by the enterprise. */
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
                /** The name of the structure requested. For example: "enterprises/XYZ/structures/ABC". */
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
            }): Request<GoogleHomeEnterpriseSdmV1Structure>;
            /** Lists structures managed by the enterprise. */
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
                /** Optional filter to list structures. */
                filter?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Requested page size. Server may return fewer structures than requested. If unspecified, server will pick an appropriate default. */
                pageSize?: number;
                /** The token of the page to retrieve. */
                pageToken?: string;
                /** The parent enterprise to list structures under. E.g. "enterprises/XYZ". */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<GoogleHomeEnterpriseSdmV1ListStructuresResponse>;
            rooms: RoomsResource;
        }
        interface EnterprisesResource {
            devices: DevicesResource;
            structures: StructuresResource;
        }

        const enterprises: EnterprisesResource;
    }
}
