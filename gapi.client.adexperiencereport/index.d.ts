// Type definitions for non-npm package Ad Experience Report API v1 1.0
// Project: https://developers.google.com/ad-experience-report/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://adexperiencereport.googleapis.com/$discovery/rest?version=v1
// Revision: 20200917

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Ad Experience Report API v1 */
    function load(name: "adexperiencereport", version: "v1"): PromiseLike<void>;
    function load(name: "adexperiencereport", version: "v1", callback: () => any): void;

    namespace adexperiencereport {
        interface PlatformSummary {
            /** The site's Ad Experience Report status on this platform. */
            betterAdsStatus?: string;
            /** The time at which [enforcement](https://support.google.com/webtools/answer/7308033) against the site began or will begin on this platform. Not set when the filter_status is OFF. */
            enforcementTime?: string;
            /** The site's [enforcement status](https://support.google.com/webtools/answer/7308033) on this platform. */
            filterStatus?: string;
            /** The time at which the site's status last changed on this platform. */
            lastChangeTime?: string;
            /** The site's regions on this platform. No longer populated, because there is no longer any semantic difference between sites in different regions. */
            region?: string[];
            /**
             * A link to the full Ad Experience Report for the site on this platform.. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification
             * process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report.
             */
            reportUrl?: string;
            /** Whether the site is currently under review on this platform. */
            underReview?: boolean;
        }
        interface SiteSummaryResponse {
            /** The site's Ad Experience Report summary on desktop. */
            desktopSummary?: PlatformSummary;
            /** The site's Ad Experience Report summary on mobile. */
            mobileSummary?: PlatformSummary;
            /** The name of the reviewed site, e.g. `google.com`. */
            reviewedSite?: string;
        }
        interface ViolatingSitesResponse {
            /** The list of violating sites. */
            violatingSites?: SiteSummaryResponse[];
        }
        interface SitesResource {
            /** Gets a site's Ad Experience Report summary. */
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
                /** Required. The name of the site whose summary to get, e.g. `sites/http%3A%2F%2Fwww.google.com%2F`. Format: `sites/{site}` */
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
            }): Request<SiteSummaryResponse>;
        }
        interface ViolatingSitesResource {
            /** Lists sites that are failing in the Ad Experience Report on at least one platform. */
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ViolatingSitesResponse>;
        }

        const sites: SitesResource;

        const violatingSites: ViolatingSitesResource;
    }
}
