// Type definitions for non-npm package YouTube Reporting API v1 1.0
// Project: https://developers.google.com/youtube/reporting/v1/reports/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://youtubereporting.googleapis.com/$discovery/rest?version=v1
// Revision: 20200726

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load YouTube Reporting API v1 */
    function load(name: "youtubereporting", version: "v1"): PromiseLike<void>;
    function load(name: "youtubereporting", version: "v1", callback: () => any): void;

    namespace youtubereporting {
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface GdataBlobstore2Info {
            /** gdata */
            blobGeneration?: string;
            /** gdata */
            blobId?: string;
            /** gdata */
            downloadReadHandle?: string;
            /** gdata */
            readToken?: string;
            /** gdata */
            uploadMetadataContainer?: string;
        }
        interface GdataCompositeMedia {
            /** gdata */
            blobRef?: string;
            /** gdata */
            blobstore2Info?: GdataBlobstore2Info;
            /** gdata */
            cosmoBinaryReference?: string;
            /** gdata */
            crc32cHash?: number;
            /** gdata */
            inline?: string;
            /** gdata */
            length?: string;
            /** gdata */
            md5Hash?: string;
            /** gdata */
            objectId?: GdataObjectId;
            /** gdata */
            path?: string;
            /** gdata */
            referenceType?: string;
            /** gdata */
            sha1Hash?: string;
        }
        interface GdataContentTypeInfo {
            /** gdata */
            bestGuess?: string;
            /** gdata */
            fromBytes?: string;
            /** gdata */
            fromFileName?: string;
            /** gdata */
            fromHeader?: string;
            /** gdata */
            fromUrlPath?: string;
        }
        interface GdataDiffChecksumsResponse {
            /** gdata */
            checksumsLocation?: GdataCompositeMedia;
            /** gdata */
            chunkSizeBytes?: string;
            /** gdata */
            objectLocation?: GdataCompositeMedia;
            /** gdata */
            objectSizeBytes?: string;
            /** gdata */
            objectVersion?: string;
        }
        interface GdataDiffDownloadResponse {
            /** gdata */
            objectLocation?: GdataCompositeMedia;
        }
        interface GdataDiffUploadRequest {
            /** gdata */
            checksumsInfo?: GdataCompositeMedia;
            /** gdata */
            objectInfo?: GdataCompositeMedia;
            /** gdata */
            objectVersion?: string;
        }
        interface GdataDiffUploadResponse {
            /** gdata */
            objectVersion?: string;
            /** gdata */
            originalObject?: GdataCompositeMedia;
        }
        interface GdataDiffVersionResponse {
            /** gdata */
            objectSizeBytes?: string;
            /** gdata */
            objectVersion?: string;
        }
        interface GdataDownloadParameters {
            /** gdata */
            allowGzipCompression?: boolean;
            /** gdata */
            ignoreRange?: boolean;
        }
        interface GdataMedia {
            /** gdata */
            algorithm?: string;
            /** gdata */
            bigstoreObjectRef?: string;
            /** gdata */
            blobRef?: string;
            /** gdata */
            blobstore2Info?: GdataBlobstore2Info;
            /** gdata */
            compositeMedia?: GdataCompositeMedia[];
            /** gdata */
            contentType?: string;
            /** gdata */
            contentTypeInfo?: GdataContentTypeInfo;
            /** gdata */
            cosmoBinaryReference?: string;
            /** gdata */
            crc32cHash?: number;
            /** gdata */
            diffChecksumsResponse?: GdataDiffChecksumsResponse;
            /** gdata */
            diffDownloadResponse?: GdataDiffDownloadResponse;
            /** gdata */
            diffUploadRequest?: GdataDiffUploadRequest;
            /** gdata */
            diffUploadResponse?: GdataDiffUploadResponse;
            /** gdata */
            diffVersionResponse?: GdataDiffVersionResponse;
            /** gdata */
            downloadParameters?: GdataDownloadParameters;
            /** gdata */
            filename?: string;
            /** gdata */
            hash?: string;
            /** gdata */
            hashVerified?: boolean;
            /** gdata */
            inline?: string;
            /** gdata */
            isPotentialRetry?: boolean;
            /** gdata */
            length?: string;
            /** gdata */
            md5Hash?: string;
            /** gdata */
            mediaId?: string;
            /** gdata */
            objectId?: GdataObjectId;
            /** gdata */
            path?: string;
            /** gdata */
            referenceType?: string;
            /** gdata */
            sha1Hash?: string;
            /** gdata */
            sha256Hash?: string;
            /** gdata */
            timestamp?: string;
            /** gdata */
            token?: string;
        }
        interface GdataObjectId {
            /** gdata */
            bucketName?: string;
            /** gdata */
            generation?: string;
            /** gdata */
            objectName?: string;
        }
        interface Job {
            /** The creation date/time of the job. */
            createTime?: string;
            /**
             * The date/time when this job will expire/expired. After a job expired, no
             * new reports are generated.
             */
            expireTime?: string;
            /** The server-generated ID of the job (max. 40 characters). */
            id?: string;
            /** The name of the job (max. 100 characters). */
            name?: string;
            /**
             * The type of reports this job creates. Corresponds to the ID of a
             * ReportType.
             */
            reportTypeId?: string;
            /**
             * True if this a system-managed job that cannot be modified by the user;
             * otherwise false.
             */
            systemManaged?: boolean;
        }
        interface ListJobsResponse {
            /** The list of jobs. */
            jobs?: Job[];
            /**
             * A token to retrieve next page of results.
             * Pass this value in the
             * ListJobsRequest.page_token
             * field in the subsequent call to `ListJobs` method to retrieve the next
             * page of results.
             */
            nextPageToken?: string;
        }
        interface ListReportsResponse {
            /**
             * A token to retrieve next page of results.
             * Pass this value in the
             * ListReportsRequest.page_token
             * field in the subsequent call to `ListReports` method to retrieve the next
             * page of results.
             */
            nextPageToken?: string;
            /** The list of report types. */
            reports?: Report[];
        }
        interface ListReportTypesResponse {
            /**
             * A token to retrieve next page of results.
             * Pass this value in the
             * ListReportTypesRequest.page_token
             * field in the subsequent call to `ListReportTypes` method to retrieve the
             * next page of results.
             */
            nextPageToken?: string;
            /** The list of report types. */
            reportTypes?: ReportType[];
        }
        interface Report {
            /** The date/time when this report was created. */
            createTime?: string;
            /** The URL from which the report can be downloaded (max. 1000 characters). */
            downloadUrl?: string;
            /**
             * The end of the time period that the report instance covers. The value is
             * exclusive.
             */
            endTime?: string;
            /** The server-generated ID of the report. */
            id?: string;
            /** The date/time when the job this report belongs to will expire/expired. */
            jobExpireTime?: string;
            /** The ID of the job that created this report. */
            jobId?: string;
            /**
             * The start of the time period that the report instance covers. The value is
             * inclusive.
             */
            startTime?: string;
        }
        interface ReportType {
            /** The date/time when this report type was/will be deprecated. */
            deprecateTime?: string;
            /** The ID of the report type (max. 100 characters). */
            id?: string;
            /** The name of the report type (max. 100 characters). */
            name?: string;
            /**
             * True if this a system-managed report type; otherwise false. Reporting jobs
             * for system-managed report types are created automatically and can thus not
             * be used in the `CreateJob` method.
             */
            systemManaged?: boolean;
        }
        interface ReportsResource {
            /** Gets the metadata of a specific report. */
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
                /** The ID of the job. */
                jobId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The content owner's external ID on which behalf the user is acting on. If
                 * not set, the user is acting for himself (his own channel).
                 */
                onBehalfOfContentOwner?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** The ID of the report to retrieve. */
                reportId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Report>;
            /**
             * Lists reports created by a specific job.
             * Returns NOT_FOUND if the job does not exist.
             */
            list(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** If set, only reports created after the specified date/time are returned. */
                createdAfter?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** The ID of the job. */
                jobId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The content owner's external ID on which behalf the user is acting on. If
                 * not set, the user is acting for himself (his own channel).
                 */
                onBehalfOfContentOwner?: string;
                /**
                 * Requested page size. Server may return fewer report types than requested.
                 * If unspecified, server will pick an appropriate default.
                 */
                pageSize?: number;
                /**
                 * A token identifying a page of results the server should return. Typically,
                 * this is the value of
                 * ListReportsResponse.next_page_token
                 * returned in response to the previous call to the `ListReports` method.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * If set, only reports whose start time is greater than or equal the
                 * specified date/time are returned.
                 */
                startTimeAtOrAfter?: string;
                /**
                 * If set, only reports whose start time is smaller than the specified
                 * date/time are returned.
                 */
                startTimeBefore?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListReportsResponse>;
        }
        interface JobsResource {
            /** Creates a job and returns it. */
            create(request: {
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
                /**
                 * The content owner's external ID on which behalf the user is acting on. If
                 * not set, the user is acting for himself (his own channel).
                 */
                onBehalfOfContentOwner?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: Job;
            }): Request<Job>;
            create(request: {
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
                /**
                 * The content owner's external ID on which behalf the user is acting on. If
                 * not set, the user is acting for himself (his own channel).
                 */
                onBehalfOfContentOwner?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: Job): Request<Job>;
            /** Deletes a job. */
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
                /** The ID of the job to delete. */
                jobId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The content owner's external ID on which behalf the user is acting on. If
                 * not set, the user is acting for himself (his own channel).
                 */
                onBehalfOfContentOwner?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<{}>;
            /** Gets a job. */
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
                /** The ID of the job to retrieve. */
                jobId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The content owner's external ID on which behalf the user is acting on. If
                 * not set, the user is acting for himself (his own channel).
                 */
                onBehalfOfContentOwner?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<Job>;
            /** Lists jobs. */
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
                /**
                 * If set to true, also system-managed jobs will be returned; otherwise only
                 * user-created jobs will be returned. System-managed jobs can neither be
                 * modified nor deleted.
                 */
                includeSystemManaged?: boolean;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The content owner's external ID on which behalf the user is acting on. If
                 * not set, the user is acting for himself (his own channel).
                 */
                onBehalfOfContentOwner?: string;
                /**
                 * Requested page size. Server may return fewer jobs than requested.
                 * If unspecified, server will pick an appropriate default.
                 */
                pageSize?: number;
                /**
                 * A token identifying a page of results the server should return. Typically,
                 * this is the value of
                 * ListReportTypesResponse.next_page_token
                 * returned in response to the previous call to the `ListJobs` method.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListJobsResponse>;
            reports: ReportsResource;
        }
        interface MediaResource {
            /**
             * Method for media download. Download is supported
             * on the URI `/v1/media/{+name}?alt=media`.
             */
            download(request?: {
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
                /** Name of the media that is being downloaded. */
                resourceName: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<GdataMedia>;
        }
        interface ReportTypesResource {
            /** Lists report types. */
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
                /**
                 * If set to true, also system-managed report types will be returned;
                 * otherwise only the report types that can be used to create new reporting
                 * jobs will be returned.
                 */
                includeSystemManaged?: boolean;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The content owner's external ID on which behalf the user is acting on. If
                 * not set, the user is acting for himself (his own channel).
                 */
                onBehalfOfContentOwner?: string;
                /**
                 * Requested page size. Server may return fewer report types than requested.
                 * If unspecified, server will pick an appropriate default.
                 */
                pageSize?: number;
                /**
                 * A token identifying a page of results the server should return. Typically,
                 * this is the value of
                 * ListReportTypesResponse.next_page_token
                 * returned in response to the previous call to the `ListReportTypes` method.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListReportTypesResponse>;
        }

        const jobs: JobsResource;

        const media: MediaResource;

        const reportTypes: ReportTypesResource;
    }
}
