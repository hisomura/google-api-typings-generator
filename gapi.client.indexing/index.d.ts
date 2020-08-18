// Type definitions for non-npm package Indexing API v3 3.0
// Project: https://developers.google.com/search/apis/indexing-api/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://indexing.googleapis.com/$discovery/rest?version=v3
// Revision: 20200815

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Indexing API v3 */
    function load(name: "indexing", version: "v3"): PromiseLike<void>;
    function load(name: "indexing", version: "v3", callback: () => any): void;

    namespace indexing {
        interface PublishUrlNotificationResponse {
            /** Description of the notification events received for this URL. */
            urlNotificationMetadata?: UrlNotificationMetadata;
        }
        interface UrlNotification {
            /** Creation timestamp for this notification. Users should _not_ specify it, the field is ignored at the request time. */
            notifyTime?: string;
            /** The URL life cycle event that Google is being notified about. */
            type?: string;
            /** The object of this notification. The URL must be owned by the publisher of this notification and, in case of `URL_UPDATED` notifications, it _must_ be crawlable by Google. */
            url?: string;
        }
        interface UrlNotificationMetadata {
            /** Latest notification received with type `URL_REMOVED`. */
            latestRemove?: UrlNotification;
            /** Latest notification received with type `URL_UPDATED`. */
            latestUpdate?: UrlNotification;
            /** URL to which this metadata refers. */
            url?: string;
        }
        interface UrlNotificationsResource {
            /**
             * Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest
             * `UrlNotification` received via this API.
             */
            getMetadata(request?: {
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
                /** URL that is being queried. */
                url?: string;
            }): Request<UrlNotificationMetadata>;
            /** Notifies that a URL has been updated or deleted. */
            publish(request: {
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
                resource: UrlNotification;
            }): Request<PublishUrlNotificationResponse>;
            publish(request: {
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
            body: UrlNotification): Request<PublishUrlNotificationResponse>;
        }

        const urlNotifications: UrlNotificationsResource;
    }
}
