// Type definitions for non-npm package HomeGraph API v1 1.0
// Project: https://developers.google.com/actions/smarthome/create-app#request-sync
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://homegraph.googleapis.com/$discovery/rest?version=v1
// Revision: 20200522

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load HomeGraph API v1 */
    function load(name: "homegraph", version: "v1"): PromiseLike<void>;
    function load(name: "homegraph", version: "v1", callback: () => any): void;

    namespace homegraph {
        interface AgentDeviceId {
            /** Third-party device ID. */
            id?: string;
        }
        interface AgentOtherDeviceId {
            /** Project ID for your smart home Action. */
            agentId?: string;
            /** Unique third-party device ID. */
            deviceId?: string;
        }
        interface Device {
            /** Attributes for the traits supported by the device. */
            attributes?: Record<string, any>;
            /**
             * Custom device attributes stored in Home Graph and provided to your
             * smart home Action in each
             * [QUERY](https://developers.google.com/assistant/smarthome/reference/intent/query)
             * and
             * [EXECUTE](https://developers.google.com/assistant/smarthome/reference/intent/execute)
             * intent.
             */
            customData?: Record<string, any>;
            /** Device manufacturer, model, hardware version, and software version. */
            deviceInfo?: DeviceInfo;
            /** Third-party device ID. */
            id?: string;
            /** Names given to this device by your smart home Action. */
            name?: DeviceNames;
            /**
             * Indicates whether your smart home Action will report notifications
             * to Google for this device via
             * ReportStateAndNotification.
             *
             * If your smart home Action enables users to control device notifications,
             * you should update this field and call
             * RequestSyncDevices.
             */
            notificationSupportedByAgent?: boolean;
            /**
             * Alternate IDs associated with this device.
             * This is used to identify cloud synced devices enabled for [local
             * fulfillment](https://developers.google.com/assistant/smarthome/concepts/local).
             */
            otherDeviceIds?: AgentOtherDeviceId[];
            /**
             * Suggested name for the room where this device is installed.
             * Google attempts to use this value during user setup.
             */
            roomHint?: string;
            /**
             * Suggested name for the structure where this device is installed.
             * Google attempts to use this value during user setup.
             */
            structureHint?: string;
            /**
             * Traits supported by the device.
             * See [device
             * traits](https://developers.google.com/assistant/smarthome/traits).
             */
            traits?: string[];
            /**
             * Hardware type of the device.
             * See [device
             * types](https://developers.google.com/assistant/smarthome/guides).
             */
            type?: string;
            /**
             * Indicates whether your smart home Action will report state of this device
             * to Google via
             * ReportStateAndNotification.
             */
            willReportState?: boolean;
        }
        interface DeviceInfo {
            /** Device hardware version. */
            hwVersion?: string;
            /** Device manufacturer. */
            manufacturer?: string;
            /** Device model. */
            model?: string;
            /** Device software version. */
            swVersion?: string;
        }
        interface DeviceNames {
            /**
             * List of names provided by the manufacturer rather than the user, such as
             * serial numbers, SKUs, etc.
             */
            defaultNames?: string[];
            /** Primary name of the device, generally provided by the user. */
            name?: string;
            /** Additional names provided by the user for the device. */
            nicknames?: string[];
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface QueryRequest {
            /** Required. Third-party user ID. */
            agentUserId?: string;
            /**
             * Required. Inputs containing third-party device IDs for which to
             * get the device states.
             */
            inputs?: QueryRequestInput[];
            /** Request ID used for debugging. */
            requestId?: string;
        }
        interface QueryRequestInput {
            /** Payload containing third-party device IDs. */
            payload?: QueryRequestPayload;
        }
        interface QueryRequestPayload {
            /** Third-party device IDs for which to get the device states. */
            devices?: AgentDeviceId[];
        }
        interface QueryResponse {
            /** Device states for the devices given in the request. */
            payload?: QueryResponsePayload;
            /** Request ID used for debugging. Copied from the request. */
            requestId?: string;
        }
        interface QueryResponsePayload {
            /**
             * States of the devices. Map of third-party device ID to struct of device
             * states.
             */
            devices?: Record<string, Record<string, any>>;
        }
        interface ReportStateAndNotificationDevice {
            /**
             * Notifications metadata for devices. See the &#42;&#42;Device NOTIFICATIONS&#42;&#42;
             * section of the individual trait [reference
             * guides](https://developers.google.com/assistant/smarthome/traits).
             */
            notifications?: Record<string, any>;
            /**
             * States of devices to update. See the &#42;&#42;Device STATES&#42;&#42; section
             * of the individual trait [reference
             * guides](https://developers.google.com/assistant/smarthome/traits).
             */
            states?: Record<string, any>;
        }
        interface ReportStateAndNotificationRequest {
            /** Required. Third-party user ID. */
            agentUserId?: string;
            /** Unique identifier per event (for example, a doorbell press). */
            eventId?: string;
            /**
             * Token to maintain state in the follow up notification response.
             * Deprecated. See the [notifications
             * guide](https://developers.google.com/assistant/smarthome/develop/notifications)
             * for details on implementing follow up notifications.
             */
            followUpToken?: string;
            /** Required. State of devices to update and notification metadata for devices. */
            payload?: StateAndNotificationPayload;
            /** Request ID used for debugging. */
            requestId?: string;
        }
        interface ReportStateAndNotificationResponse {
            /** Request ID copied from ReportStateAndNotificationRequest. */
            requestId?: string;
        }
        interface RequestSyncDevicesRequest {
            /** Required. Third-party user ID. */
            agentUserId?: string;
            /**
             * Optional. If set, the request will be added to a queue and a response will
             * be returned immediately. This enables concurrent requests for the given
             * `agent_user_id`, but the caller will not receive any error responses.
             */
            async?: boolean;
        }
        // tslint:disable-next-line:no-empty-interface
        interface RequestSyncDevicesResponse {
        }
        interface StateAndNotificationPayload {
            /** The devices for updating state and sending notifications. */
            devices?: ReportStateAndNotificationDevice;
        }
        interface SyncRequest {
            /** Required. Third-party user ID. */
            agentUserId?: string;
            /** Request ID used for debugging. */
            requestId?: string;
        }
        interface SyncResponse {
            /** Devices associated with the third-party user. */
            payload?: SyncResponsePayload;
            /** Request ID used for debugging. Copied from the request. */
            requestId?: string;
        }
        interface SyncResponsePayload {
            /** Third-party user ID */
            agentUserId?: string;
            /** Devices associated with the third-party user. */
            devices?: Device[];
        }
        interface AgentUsersResource {
            /**
             * Unlinks the given third-party user from your smart home Action.
             * All data related to this user will be deleted.
             *
             * For more details on how users link their accounts, see
             * [fulfillment and
             * authentication](https://developers.google.com/assistant/smarthome/concepts/fulfillment-authentication).
             *
             * The third-party user's identity is passed in via the `agent_user_id`
             * (see DeleteAgentUserRequest).
             * This request must be authorized using service account credentials from your
             * Actions console project.
             */
            delete(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Required. Third-party user ID. */
                agentUserId: string;
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
                /** Request ID used for debugging. */
                requestId?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<{}>;
        }
        interface DevicesResource {
            /**
             * Gets the current states in Home Graph for the given set of the third-party
             * user's devices.
             *
             * The third-party user's identity is passed in via the `agent_user_id`
             * (see QueryRequest).
             * This request must be authorized using service account credentials from your
             * Actions console project.
             */
            query(request: {
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
                resource: QueryRequest;
            }): Request<QueryResponse>;
            query(request: {
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
            body: QueryRequest): Request<QueryResponse>;
            /**
             * Reports device state and optionally sends device notifications.
             * Called by your smart home Action when the state of a third-party device
             * changes or you need to send a notification about the device.
             * See [Implement Report
             * State](https://developers.google.com/assistant/smarthome/develop/report-state)
             * for more information.
             *
             * This method updates the device state according to its declared
             * [traits](https://developers.google.com/assistant/smarthome/concepts/devices-traits).
             * Publishing a new state value outside of these traits will result in an
             * `INVALID_ARGUMENT` error response.
             *
             * The third-party user's identity is passed in via the `agent_user_id`
             * (see ReportStateAndNotificationRequest).
             * This request must be authorized using service account credentials from your
             * Actions console project.
             */
            reportStateAndNotification(request: {
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
                resource: ReportStateAndNotificationRequest;
            }): Request<ReportStateAndNotificationResponse>;
            reportStateAndNotification(request: {
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
            body: ReportStateAndNotificationRequest): Request<ReportStateAndNotificationResponse>;
            /**
             * Requests Google to send an `action.devices.SYNC`
             * [intent](https://developers.google.com/assistant/smarthome/reference/intent/sync)
             * to your smart home Action to update device metadata for the given user.
             *
             *
             * The third-party user's identity is passed via the `agent_user_id`
             * (see RequestSyncDevicesRequest).
             * This request must be authorized using service account credentials from your
             * Actions console project.
             */
            requestSync(request: {
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
                resource: RequestSyncDevicesRequest;
            }): Request<{}>;
            requestSync(request: {
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
            body: RequestSyncDevicesRequest): Request<{}>;
            /**
             * Gets all the devices associated with the given third-party user.
             *
             * The third-party user's identity is passed in via the `agent_user_id`
             * (see SyncRequest).
             * This request must be authorized using service account credentials from your
             * Actions console project.
             */
            sync(request: {
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
                resource: SyncRequest;
            }): Request<SyncResponse>;
            sync(request: {
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
            body: SyncRequest): Request<SyncResponse>;
        }

        const agentUsers: AgentUsersResource;

        const devices: DevicesResource;
    }
}
