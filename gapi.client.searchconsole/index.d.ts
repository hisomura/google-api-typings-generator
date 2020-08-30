// Type definitions for non-npm package Google Search Console API v1 1.0
// Project: https://developers.google.com/webmaster-tools/search-console-api/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://searchconsole.googleapis.com/$discovery/rest?version=v1
// Revision: 20200829

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Search Console API v1 */
    function load(name: "searchconsole", version: "v1"): PromiseLike<void>;
    function load(name: "searchconsole", version: "v1", callback: () => any): void;

    namespace searchconsole {
        interface BlockedResource {
            /** URL of the blocked resource. */
            url?: string;
        }
        // tslint:disable-next-line:interface-name
        interface Image {
            /** Image data in format determined by the mime type. Currently, the format will always be "image/png", but this might change in the future. */
            data?: string;
            /** The mime-type of the image data. */
            mimeType?: string;
        }
        interface MobileFriendlyIssue {
            /** Rule violated. */
            rule?: string;
        }
        interface ResourceIssue {
            /** Describes a blocked resource issue. */
            blockedResource?: BlockedResource;
        }
        interface RunMobileFriendlyTestRequest {
            /** Whether or not screenshot is requested. Default is false. */
            requestScreenshot?: boolean;
            /** URL for inspection. */
            url?: string;
        }
        interface RunMobileFriendlyTestResponse {
            /** Test verdict, whether the page is mobile friendly or not. */
            mobileFriendliness?: string;
            /** List of mobile-usability issues. */
            mobileFriendlyIssues?: MobileFriendlyIssue[];
            /** Information about embedded resources issues. */
            resourceIssues?: ResourceIssue[];
            /** Screenshot of the requested URL. */
            screenshot?: Image;
            /** Final state of the test, can be either complete or an error. */
            testStatus?: TestStatus;
        }
        interface TestStatus {
            /** Error details if applicable. */
            details?: string;
            /** Status of the test. */
            status?: string;
        }
        interface MobileFriendlyTestResource {
            /** Runs Mobile-Friendly Test for a given URL. */
            run(request: {
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
                resource: RunMobileFriendlyTestRequest;
            }): Request<RunMobileFriendlyTestResponse>;
            run(request: {
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
            body: RunMobileFriendlyTestRequest): Request<RunMobileFriendlyTestResponse>;
        }
        interface UrlTestingToolsResource {
            mobileFriendlyTest: MobileFriendlyTestResource;
        }

        const urlTestingTools: UrlTestingToolsResource;
    }
}
