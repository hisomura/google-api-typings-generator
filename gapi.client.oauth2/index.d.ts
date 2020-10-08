// Type definitions for non-npm package Google OAuth2 API v2 2.0
// Project: https://developers.google.com/identity/protocols/oauth2/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest
// Revision: 20200213

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google OAuth2 API v2 */
    function load(name: "oauth2", version: "v2"): PromiseLike<void>;
    function load(name: "oauth2", version: "v2", callback: () => any): void;

    namespace oauth2 {
        interface Tokeninfo {
            /** Who is the intended audience for this token. In general the same as issued_to. */
            audience?: string;
            /** The email address of the user. Present only if the email scope is present in the request. */
            email?: string;
            /** The expiry time of the token, as number of seconds left until expiry. */
            expires_in?: number;
            /** To whom was the token issued to. In general the same as audience. */
            issued_to?: string;
            /** The space separated list of scopes granted to this token. */
            scope?: string;
            /** The obfuscated user id. */
            user_id?: string;
            /** Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request. */
            verified_email?: boolean;
        }
        interface Userinfo {
            /** The user's email address. */
            email?: string;
            /** The user's last name. */
            family_name?: string;
            /** The user's gender. */
            gender?: string;
            /** The user's first name. */
            given_name?: string;
            /** The hosted domain e.g. example.com if the user is Google apps user. */
            hd?: string;
            /** The obfuscated ID of the user. */
            id?: string;
            /** URL of the profile page. */
            link?: string;
            /** The user's preferred locale. */
            locale?: string;
            /** The user's full name. */
            name?: string;
            /** URL of the user's picture image. */
            picture?: string;
            /** Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address. */
            verified_email?: boolean;
        }
        interface MeResource {
            get(request?: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
                quotaUser?: string;
                /** Deprecated. Please use quotaUser instead. */
                userIp?: string;
            }): Request<Userinfo>;
        }
        interface V2Resource {
            me: MeResource;
        }
        interface UserinfoResource {
            get(request?: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** An opaque string that represents a user for quota purposes. Must not exceed 40 characters. */
                quotaUser?: string;
                /** Deprecated. Please use quotaUser instead. */
                userIp?: string;
            }): Request<Userinfo>;
            v2: V2Resource;
        }

        const userinfo: UserinfoResource;
    }
}
