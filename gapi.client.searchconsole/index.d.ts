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
// Revision: 20201014

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Search Console API v1 */
    function load(name: "searchconsole", version: "v1"): PromiseLike<void>;
    function load(name: "searchconsole", version: "v1", callback: () => any): void;

    namespace searchconsole {
        interface ApiDataRow {
            clicks?: number;
            ctr?: number;
            impressions?: number;
            keys?: string[];
            position?: number;
        }
        interface ApiDimensionFilter {
            dimension?: string;
            expression?: string;
            operator?: string;
        }
        interface ApiDimensionFilterGroup {
            filters?: ApiDimensionFilter[];
            groupType?: string;
        }
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
        interface SearchAnalyticsQueryRequest {
            /**
             * [Optional; Default is \"auto\"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by
             * canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help
             * documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any
             * value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your
             * aggregation type if the requested type is invalid.
             */
            aggregationType?: string;
            /**
             * [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains \"buy\"' to see only data where the query string contains the substring
             * \"buy\" (not case-sensitive). You can filter by a dimension without grouping by it.
             */
            dimensionFilterGroups?: ApiDimensionFilterGroup[];
            /**
             * [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each
             * row. Results are grouped in the order that you supply these dimensions.
             */
            dimensions?: string[];
            /** [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range. */
            endDate?: string;
            /** [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive). */
            rowLimit?: number;
            /** [Optional; Default is \"web\"] The search type to filter for. */
            searchType?: string;
            /** [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range. */
            startDate?: string;
            /** [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number. */
            startRow?: number;
        }
        interface SearchAnalyticsQueryResponse {
            /** How the results were aggregated. */
            responseAggregationType?: string;
            /** A list of rows grouped by the key values in the order given in the query. */
            rows?: ApiDataRow[];
        }
        interface SitemapsListResponse {
            /** Contains detailed information about a specific URL submitted as a [sitemap](https://support.google.com/webmasters/answer/156184). */
            sitemap?: WmxSitemap[];
        }
        interface SitesListResponse {
            /** Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999). */
            siteEntry?: WmxSite[];
        }
        interface TestStatus {
            /** Error details if applicable. */
            details?: string;
            /** Status of the test. */
            status?: string;
        }
        interface WmxSite {
            /** The user's permission level for the site. */
            permissionLevel?: string;
            /** The URL of the site. */
            siteUrl?: string;
        }
        interface WmxSitemap {
            /** The various content types in the sitemap. */
            contents?: WmxSitemapContent[];
            /** Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly. */
            errors?: string;
            /** If true, the sitemap has not been processed. */
            isPending?: boolean;
            /** If true, the sitemap is a collection of sitemaps. */
            isSitemapsIndex?: boolean;
            /** Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd). */
            lastDownloaded?: string;
            /** Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd). */
            lastSubmitted?: string;
            /** The url of the sitemap. */
            path?: string;
            /** The type of the sitemap. For example: `rssFeed`. */
            type?: string;
            /** Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps. */
            warnings?: string;
        }
        interface WmxSitemapContent {
            /** The number of URLs from the sitemap that were indexed (of the content type). */
            indexed?: string;
            /** The number of URLs in the sitemap (of the content type). */
            submitted?: string;
            /** The specific type of content in this sitemap. For example: `web`. */
            type?: string;
        }
        interface SearchanalyticsResource {
            /**
             * Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days.
             * When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by
             * date for any metric, and see which day rows are returned.
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
                /** The site's URL, including protocol. For example: `http://www.example.com/`. */
                siteUrl: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: SearchAnalyticsQueryRequest;
            }): Request<SearchAnalyticsQueryResponse>;
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
                /** The site's URL, including protocol. For example: `http://www.example.com/`. */
                siteUrl: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: SearchAnalyticsQueryRequest): Request<SearchAnalyticsQueryResponse>;
        }
        interface SitemapsResource {
            /** Deletes a sitemap from this site. */
            delete(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. */
                feedpath: string;
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
                /** The site's URL, including protocol. For example: `http://www.example.com/`. */
                siteUrl: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<void>;
            /** Retrieves information about a specific sitemap. */
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. */
                feedpath: string;
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
                /** The site's URL, including protocol. For example: `http://www.example.com/`. */
                siteUrl: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<WmxSitemap>;
            /** Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request). */
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
                /** A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`. */
                sitemapIndex?: string;
                /** The site's URL, including protocol. For example: `http://www.example.com/`. */
                siteUrl: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<SitemapsListResponse>;
            /** Submits a sitemap for a site. */
            submit(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`. */
                feedpath: string;
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
                /** The site's URL, including protocol. For example: `http://www.example.com/`. */
                siteUrl: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<void>;
        }
        interface SitesResource {
            /** Adds a site to the set of the user's sites in Search Console. */
            add(request?: {
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
                /** The URL of the site to add. */
                siteUrl: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<void>;
            /** Removes a site from the set of the user's Search Console sites. */
            delete(request?: {
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
                /** The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. */
                siteUrl: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<void>;
            /** Retrieves information about specific site. */
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
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`. */
                siteUrl: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<WmxSite>;
            /** Lists the user's Search Console sites. */
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
            }): Request<SitesListResponse>;
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

        const searchanalytics: SearchanalyticsResource;

        const sitemaps: SitemapsResource;

        const sites: SitesResource;

        const urlTestingTools: UrlTestingToolsResource;
    }
}
