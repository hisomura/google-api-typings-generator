/* Type definitions for non-npm package DoubleClick Bid Manager API v1.1 1.1 */
// Project: https://developers.google.com/bid-manager/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://doubleclickbidmanager.googleapis.com/$discovery/rest?version=v1.1
// Revision: 20201020

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load DoubleClick Bid Manager API v1.1 */
    function load(name: "doubleclickbidmanager", version: "v1.1"): PromiseLike<void>;
    function load(name: "doubleclickbidmanager", version: "v1.1", callback: () => any): void;

    namespace doubleclickbidmanager {
        interface ChannelGrouping {
            /** The name to apply to an event that does not match any of the rules in the channel grouping. */
            fallbackName?: string;
            /** Channel Grouping name. */
            name?: string;
            /** Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping. */
            rules?: Rule[];
        }
        interface DisjunctiveMatchStatement {
            /** Filters. There is a limit of 100 filters that can be set per disjunctive match statement. */
            eventFilters?: EventFilter[];
        }
        interface DownloadLineItemsRequest {
            /** File specification (column names, types, order) in which the line items will be returned. Default to EWF. */
            fileSpec?: string;
            /** Ids of the specified filter type used to filter line items to fetch. If omitted, all the line items will be returned. */
            filterIds?: string[];
            /** Filter type used to filter line items to fetch. */
            filterType?: string;
            /** Format in which the line items will be returned. Default to CSV. */
            format?: string;
        }
        interface DownloadLineItemsResponse {
            /** Retrieved line items in CSV format. For more information about file formats, see Entity Write File Format. */
            lineItems?: string;
        }
        interface DownloadRequest {
            /**
             * File types that will be returned. If INVENTORY_SOURCE is requested, no other file types may be requested. Acceptable values are: - "AD" - "AD_GROUP" - "CAMPAIGN" - "INSERTION_ORDER"
             * - "INVENTORY_SOURCE" - "LINE_ITEM"
             */
            fileTypes?: string[];
            /** The IDs of the specified filter type. This is used to filter entities to fetch. At least one ID must be specified. */
            filterIds?: string[];
            /** Filter type used to filter entities to fetch. PARTNER_ID and INVENTORY_SOURCE_ID may only be used when downloading inventory sources. */
            filterType?: string;
            /** SDF Version (column names, types, order) in which the entities will be returned. Default to 5. */
            version?: string;
        }
        interface DownloadResponse {
            /** Retrieved ad groups in SDF format. */
            adGroups?: string;
            /** Retrieved ads in SDF format. */
            ads?: string;
            /** Retrieved campaigns in SDF format. */
            campaigns?: string;
            /** Retrieved insertion orders in SDF format. */
            insertionOrders?: string;
            inventorySources?: string;
            /** Retrieved line items in SDF format. */
            lineItems?: string;
        }
        interface EventFilter {
            /** Filter on a dimension. */
            dimensionFilter?: PathQueryOptionsFilter;
        }
        interface FilterPair {
            /** Filter type. */
            type?: string;
            /** Filter value. */
            value?: string;
        }
        interface ListQueriesResponse {
            /** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse". */
            kind?: string;
            /** Next page's pagination token if one exists. */
            nextPageToken?: string;
            /** Retrieved queries. */
            queries?: Query[];
        }
        interface ListReportsResponse {
            /** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse". */
            kind?: string;
            /** Next page's pagination token if one exists. */
            nextPageToken?: string;
            /** Retrieved reports. */
            reports?: Report[];
        }
        interface Options {
            /** Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items. */
            includeOnlyTargetedUserLists?: boolean;
            /** Options that contain Path Filters and Custom Channel Groupings. */
            pathQueryOptions?: PathQueryOptions;
        }
        interface Parameters {
            /** Filters used to match traffic data in your report. */
            filters?: FilterPair[];
            /** Data is grouped by the filters listed in this field. */
            groupBys?: string[];
            /** Deprecated. This field is no longer in use. */
            includeInviteData?: boolean;
            /** Metrics to include as columns in your report. */
            metrics?: string[];
            /** Additional query options. */
            options?: Options;
            /** Report type. */
            type?: string;
        }
        interface PathFilter {
            /** Filter on an event to be applied to some part of the path. */
            eventFilters?: EventFilter[];
            /** Indicates the position of the path the filter should match to (first, last, or any event in path). */
            pathMatchPosition?: string;
        }
        interface PathQueryOptions {
            /** Custom Channel Groupings. */
            channelGrouping?: ChannelGrouping;
            /** Path Filters. There is a limit of 100 path filters that can be set per report. */
            pathFilters?: PathFilter[];
        }
        interface PathQueryOptionsFilter {
            /** Dimension the filter is applied to. */
            filter?: string;
            /** Indicates how the filter should be matched to the value. */
            match?: string;
            /** Value to filter on. */
            values?: string[];
        }
        interface Query {
            /** Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query". */
            kind?: string;
            /** Query metadata. */
            metadata?: QueryMetadata;
            /** Query parameters. */
            params?: Parameters;
            /** Query ID. */
            queryId?: string;
            /** The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. */
            reportDataEndTimeMs?: string;
            /** The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. */
            reportDataStartTimeMs?: string;
            /** Information on how often and when to run a query. */
            schedule?: QuerySchedule;
            /** Canonical timezone code for report data time. Defaults to America/New_York. */
            timezoneCode?: string;
        }
        interface QueryMetadata {
            /** Range of report data. */
            dataRange?: string;
            /** Format of the generated report. */
            format?: string;
            /** The path to the location in Google Cloud Storage where the latest report is stored. */
            googleCloudStoragePathForLatestReport?: string;
            /** The path in Google Drive for the latest report. */
            googleDrivePathForLatestReport?: string;
            /** The time when the latest report started to run. */
            latestReportRunTimeMs?: string;
            /**
             * Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN
             * tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE An locale string not in the list above will generate reports in English.
             */
            locale?: string;
            /** Number of reports that have been generated for the query. */
            reportCount?: number;
            /** Whether the latest report is currently running. */
            running?: boolean;
            /** Whether to send an email notification when a report is ready. Default to false. */
            sendNotification?: boolean;
            /** List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification. */
            shareEmailAddress?: string[];
            /** Query title. It is used to name the reports generated from this query. */
            title?: string;
        }
        interface QuerySchedule {
            /** Datetime to periodically run the query until. */
            endTimeMs?: string;
            /** How often the query is run. */
            frequency?: string;
            /** Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports. */
            nextRunMinuteOfDay?: number;
            /** Canonical timezone code for report generation time. Defaults to America/New_York. */
            nextRunTimezoneCode?: string;
            /** When to start running the query. Not applicable to `ONE_TIME` frequency. */
            startTimeMs?: string;
        }
        interface Report {
            /** Key used to identify a report. */
            key?: ReportKey;
            /** Report metadata. */
            metadata?: ReportMetadata;
            /** Report parameters. */
            params?: Parameters;
        }
        interface ReportFailure {
            /** Error code that shows why the report was not created. */
            errorCode?: string;
        }
        interface ReportKey {
            /** Query ID. */
            queryId?: string;
            /** Report ID. */
            reportId?: string;
        }
        interface ReportMetadata {
            /** The path to the location in Google Cloud Storage where the report is stored. */
            googleCloudStoragePath?: string;
            /** The ending time for the data that is shown in the report. */
            reportDataEndTimeMs?: string;
            /** The starting time for the data that is shown in the report. */
            reportDataStartTimeMs?: string;
            /** Report status. */
            status?: ReportStatus;
        }
        interface ReportStatus {
            /** If the report failed, this records the cause. */
            failure?: ReportFailure;
            /** The time when this report either completed successfully or failed. */
            finishTimeMs?: string;
            /** The file type of the report. */
            format?: string;
            /** The state of the report. */
            state?: string;
        }
        interface RowStatus {
            /** Whether the stored entity is changed as a result of upload. */
            changed?: boolean;
            /** Entity Id. */
            entityId?: string;
            /** Entity name. */
            entityName?: string;
            /** Reasons why the entity can't be uploaded. */
            errors?: string[];
            /** Whether the entity is persisted. */
            persisted?: boolean;
            /** Row number. */
            rowNumber?: number;
        }
        interface Rule {
            disjunctiveMatchStatements?: DisjunctiveMatchStatement[];
            /** Rule name. */
            name?: string;
        }
        interface RunQueryRequest {
            /** Report data range used to generate the report. */
            dataRange?: string;
            /** The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
            reportDataEndTimeMs?: string;
            /** The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise. */
            reportDataStartTimeMs?: string;
            /** Canonical timezone code for report data time. Defaults to America/New_York. */
            timezoneCode?: string;
        }
        interface UploadLineItemsRequest {
            /** Set to true to get upload status without actually persisting the line items. */
            dryRun?: boolean;
            /** Format the line items are in. Default to CSV. */
            format?: string;
            /** Line items in CSV to upload. Refer to Entity Write File Format for more information on file format. */
            lineItems?: string;
        }
        interface UploadLineItemsResponse {
            /** Status of upload. */
            uploadStatus?: UploadStatus;
        }
        interface UploadStatus {
            /** Reasons why upload can't be completed. */
            errors?: string[];
            /** Per-row upload status. */
            rowStatus?: RowStatus[];
        }
        interface LineitemsResource {
            /** Retrieves line items in CSV format. YouTube & partners line items are not supported. */
            downloadlineitems(request: {
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
                resource: DownloadLineItemsRequest;
            }): Request<DownloadLineItemsResponse>;
            downloadlineitems(request: {
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
            body: DownloadLineItemsRequest): Request<DownloadLineItemsResponse>;
            /** Uploads line items in CSV format. YouTube & partners line items are not supported. */
            uploadlineitems(request: {
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
                resource: UploadLineItemsRequest;
            }): Request<UploadLineItemsResponse>;
            uploadlineitems(request: {
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
            body: UploadLineItemsRequest): Request<UploadLineItemsResponse>;
        }
        interface QueriesResource {
            /** Creates a query. */
            createquery(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** If true, tries to run the query asynchronously. Only applicable when the frequency is ONE_TIME. */
                asynchronous?: boolean;
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
                resource: Query;
            }): Request<Query>;
            createquery(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** If true, tries to run the query asynchronously. Only applicable when the frequency is ONE_TIME. */
                asynchronous?: boolean;
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
            body: Query): Request<Query>;
            /** Deletes a stored query as well as the associated stored reports. */
            deletequery(request?: {
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
                /** Query ID to delete. */
                queryId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<void>;
            /** Retrieves a stored query. */
            getquery(request?: {
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
                /** Query ID to retrieve. */
                queryId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Query>;
            /** Retrieves stored queries. */
            listqueries(request?: {
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
                /** Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified. */
                pageSize?: number;
                /** Optional pagination token. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListQueriesResponse>;
            /** Runs a stored query to generate a report. */
            runquery(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** If true, tries to run the query asynchronously. */
                asynchronous?: boolean;
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
                /** Query ID to run. */
                queryId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: RunQueryRequest;
            }): Request<void>;
            runquery(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** If true, tries to run the query asynchronously. */
                asynchronous?: boolean;
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
                /** Query ID to run. */
                queryId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: RunQueryRequest): Request<void>;
        }
        interface ReportsResource {
            /** Retrieves stored reports. */
            listreports(request?: {
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
                /** Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified. */
                pageSize?: number;
                /** Optional pagination token. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Query ID with which the reports are associated. */
                queryId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListReportsResponse>;
        }
        interface SdfResource {
            /** Retrieves entities in SDF format. */
            download(request: {
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
                resource: DownloadRequest;
            }): Request<DownloadResponse>;
            download(request: {
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
            body: DownloadRequest): Request<DownloadResponse>;
        }

        const lineitems: LineitemsResource;

        const queries: QueriesResource;

        const reports: ReportsResource;

        const sdf: SdfResource;
    }
}
