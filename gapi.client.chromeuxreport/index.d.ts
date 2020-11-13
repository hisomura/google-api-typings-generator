/* Type definitions for non-npm package Chrome UX Report API v1 1.0 */
// Project: https://developers.google.com/web/tools/chrome-user-experience-report/api/reference
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://chromeuxreport.googleapis.com/$discovery/rest?version=v1
// Revision: 20201112

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Chrome UX Report API v1 */
    function load(name: "chromeuxreport", version: "v1"): PromiseLike<void>;
    function load(name: "chromeuxreport", version: "v1", callback: () => any): void;

    namespace chromeuxreport {
        interface Bin {
            /** The proportion of users that experienced this bin's value for the given metric. */
            density?: number;
            /** End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf. */
            end?: any;
            /** Start is the beginning of the data bin. */
            start?: any;
        }
        interface Key {
            /**
             * The effective connection type is the general connection class that all users experienced for this record. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as
             * specified in: https://wicg.github.io/netinfo/#effective-connection-types If the effective connection type is unspecified, then aggregated data over all effective connection types
             * will be returned.
             */
            effectiveConnectionType?: string;
            /**
             * The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be
             * returned.
             */
            formFactor?: string;
            /**
             * Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user
             * experience data.
             */
            origin?: string;
            /** Url specifies a specific url that this record is for. Note: When specifying a "url" only data for that specific url will be aggregated. */
            url?: string;
        }
        interface Metric {
            /** The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1. */
            histogram?: Bin[];
            /** Common useful percentiles of the Metric. The value type for the percentiles will be the same as the value types given for the Histogram bins. */
            percentiles?: Percentiles;
        }
        interface Percentiles {
            /** 75% of users experienced the given metric at or below this value. */
            p75?: any;
        }
        interface QueryRequest {
            /**
             * The effective connection type is a query dimension that specifies the effective network class that the record's data should belong to. This field uses the values ["offline",
             * "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types Note: If no effective connection type is specified, then a special record
             * with aggregated data over all effective connection types will be returned.
             */
            effectiveConnectionType?: string;
            /**
             * The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with
             * aggregated data over all form factors will be returned.
             */
            formFactor?: string;
            /**
             * The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay",
             * "largest_contentful_paint", "cumulative_layout_shift"]
             */
            metrics?: string[];
            /** The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com" */
            origin?: string;
            /** The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/" */
            url?: string;
        }
        interface QueryResponse {
            /** The record that was found. */
            record?: Record;
            /** These are details about automated normalization actions that were taken in order to make the requested `url_pattern` valid. */
            urlNormalizationDetails?: UrlNormalization;
        }
        interface Record {
            /** Key defines all of the unique querying parameters needed to look up a user experience record. */
            key?: Key;
            /**
             * Metrics is the map of user experience data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint",
             * "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift"]
             */
            metrics?: { [P in string]: Metric };
        }
        interface UrlNormalization {
            /** The URL after any normalization actions. This is a valid user experience URL that could reasonably be looked up. */
            normalizedUrl?: string;
            /** The original requested URL prior to any normalization actions. */
            originalUrl?: string;
        }
        interface RecordsResource {
            /**
             * Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the
             * requested site.
             */
            queryRecord(request: {
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
            queryRecord(request: {
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
        }

        const records: RecordsResource;
    }
}
