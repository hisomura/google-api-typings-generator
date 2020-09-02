// Type definitions for non-npm package Groups Migration API v1 1.0
// Project: https://developers.google.com/google-apps/groups-migration/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://groupsmigration.googleapis.com/$discovery/rest?version=v1
// Revision: 20200827

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Groups Migration API v1 */
    function load(name: "groupsmigration", version: "v1"): PromiseLike<void>;
    function load(name: "groupsmigration", version: "v1", callback: () => any): void;

    namespace groupsmigration {
        interface Groups {
            /** The kind of insert resource this is. */
            kind?: string;
            /** The status of the insert request. */
            responseCode?: string;
        }
        interface ArchiveResource {
            /** Inserts a new mail into the archive of the Google group. */
            insert(request?: {
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
                /** The group ID */
                groupId: string;
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
            }): Request<Groups>;
        }

        const archive: ArchiveResource;
    }
}
