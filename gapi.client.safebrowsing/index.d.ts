// Type definitions for non-npm package Safe Browsing API v4 4.0
// Project: https://developers.google.com/safe-browsing/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://safebrowsing.googleapis.com/$discovery/rest?version=v4
// Revision: 20200819

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Safe Browsing API v4 */
    function load(name: "safebrowsing", version: "v4"): PromiseLike<void>;
    function load(name: "safebrowsing", version: "v4", callback: () => any): void;

    namespace safebrowsing {
        interface Checksum {
            /** The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database. */
            sha256?: string;
        }
        interface ClientInfo {
            /** A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. */
            clientId?: string;
            /** The version of the client implementation. */
            clientVersion?: string;
        }
        interface Constraints {
            /** A client's physical location, expressed as a ISO 31166-1 alpha-2 region code. */
            deviceLocation?: string;
            /** Requests the lists for a specific language. Expects ISO 639 alpha-2 format. */
            language?: string;
            /**
             * Sets the maximum number of entries that the client is willing to have in the local database for the specified list. This should be a power of 2 between 2**10 and 2**20. If zero, no
             * database size limit is set.
             */
            maxDatabaseEntries?: number;
            /**
             * The maximum size in number of entries. The update will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no update size limit
             * is set.
             */
            maxUpdateEntries?: number;
            /** Requests the list for a specific geographic location. If not set the server may pick that value based on the user's IP address. Expects ISO 3166-1 alpha-2 format. */
            region?: string;
            /** The compression types supported by the client. */
            supportedCompressions?: string[];
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface FetchThreatListUpdatesRequest {
            /** The client metadata. */
            client?: ClientInfo;
            /** The requested threat list updates. */
            listUpdateRequests?: ListUpdateRequest[];
        }
        interface FetchThreatListUpdatesResponse {
            /** The list updates requested by the clients. */
            listUpdateResponses?: ListUpdateResponse[];
            /** The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want. */
            minimumWaitDuration?: string;
        }
        interface FindFullHashesRequest {
            /** Client metadata associated with callers of higher-level APIs built on top of the client's implementation. */
            apiClient?: ClientInfo;
            /** The client metadata. */
            client?: ClientInfo;
            /** The current client states for each of the client's local threat lists. */
            clientStates?: string[];
            /** The lists and hashes to be checked. */
            threatInfo?: ThreatInfo;
        }
        interface FindFullHashesResponse {
            /** The full hashes that matched the requested prefixes. */
            matches?: ThreatMatch[];
            /** The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want. */
            minimumWaitDuration?: string;
            /** For requested entities that did not match the threat list, how long to cache the response. */
            negativeCacheDuration?: string;
        }
        interface FindThreatMatchesRequest {
            /** The client metadata. */
            client?: ClientInfo;
            /** The lists and entries to be checked for matches. */
            threatInfo?: ThreatInfo;
        }
        interface FindThreatMatchesResponse {
            /** The threat list matches. */
            matches?: ThreatMatch[];
        }
        interface ListThreatListsResponse {
            /** The lists available for download by the client. */
            threatLists?: ThreatListDescriptor[];
        }
        interface ListUpdateRequest {
            /** The constraints associated with this request. */
            constraints?: Constraints;
            /** The type of platform at risk by entries present in the list. */
            platformType?: string;
            /** The current state of the client for the requested list (the encrypted client state that was received from the last successful list update). */
            state?: string;
            /** The types of entries present in the list. */
            threatEntryType?: string;
            /** The type of threat posed by entries present in the list. */
            threatType?: string;
        }
        interface ListUpdateResponse {
            /** A set of entries to add to a local threat type's list. Repeated to allow for a combination of compressed and raw data to be sent in a single response. */
            additions?: ThreatEntrySet[];
            /**
             * The expected SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database after applying the provided update. If the client state doesn't match
             * the expected state, the client must disregard this update and retry later.
             */
            checksum?: Checksum;
            /** The new client state, in encrypted format. Opaque to clients. */
            newClientState?: string;
            /** The platform type for which data is returned. */
            platformType?: string;
            /** A set of entries to remove from a local threat type's list. In practice, this field is empty or contains exactly one ThreatEntrySet. */
            removals?: ThreatEntrySet[];
            /** The type of response. This may indicate that an action is required by the client when the response is received. */
            responseType?: string;
            /** The format of the threats. */
            threatEntryType?: string;
            /** The threat type for which data is returned. */
            threatType?: string;
        }
        interface MetadataEntry {
            /** The metadata entry key. For JSON requests, the key is base64-encoded. */
            key?: string;
            /** The metadata entry value. For JSON requests, the value is base64-encoded. */
            value?: string;
        }
        interface RawHashes {
            /** The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash). */
            prefixSize?: number;
            /** The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded. */
            rawHashes?: string;
        }
        interface RawIndices {
            /** The indices to remove from a lexicographically-sorted local list. */
            indices?: number[];
        }
        interface RiceDeltaEncoding {
            /** The encoded deltas that are encoded using the Golomb-Rice coder. */
            encodedData?: string;
            /** The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero. */
            firstValue?: string;
            /** The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`. */
            numEntries?: number;
            /** The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero. */
            riceParameter?: number;
        }
        interface ThreatEntry {
            /** The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded. */
            digest?: string;
            /** A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded. */
            hash?: string;
            /** A URL. */
            url?: string;
        }
        interface ThreatEntryMetadata {
            /** The metadata entries. */
            entries?: MetadataEntry[];
        }
        interface ThreatEntrySet {
            /** The compression type for the entries in this set. */
            compressionType?: string;
            /** The raw SHA256-formatted entries. */
            rawHashes?: RawHashes;
            /** The raw removal indices for a local list. */
            rawIndices?: RawIndices;
            /**
             * The encoded 4-byte prefixes of SHA256-formatted entries, using a Golomb-Rice encoding. The hashes are converted to uint32, sorted in ascending order, then delta encoded and stored
             * as encoded_data.
             */
            riceHashes?: RiceDeltaEncoding;
            /**
             * The encoded local, lexicographically-sorted list indices, using a Golomb-Rice encoding. Used for sending compressed removal indices. The removal indices (uint32) are sorted in
             * ascending order, then delta encoded and stored as encoded_data.
             */
            riceIndices?: RiceDeltaEncoding;
        }
        interface ThreatHit {
            /** Client-reported identification. */
            clientInfo?: ClientInfo;
            /** The threat entry responsible for the hit. Full hash should be reported for hash-based hits. */
            entry?: ThreatEntry;
            /** The platform type reported. */
            platformType?: string;
            /** The resources related to the threat hit. */
            resources?: ThreatSource[];
            /** The threat type reported. */
            threatType?: string;
            /** Details about the user that encountered the threat. */
            userInfo?: UserInfo;
        }
        interface ThreatInfo {
            /** The platform types to be checked. */
            platformTypes?: string[];
            /** The threat entries to be checked. */
            threatEntries?: ThreatEntry[];
            /** The entry types to be checked. */
            threatEntryTypes?: string[];
            /** The threat types to be checked. */
            threatTypes?: string[];
        }
        interface ThreatListDescriptor {
            /** The platform type targeted by the list's entries. */
            platformType?: string;
            /** The entry types contained in the list. */
            threatEntryType?: string;
            /** The threat type posed by the list's entries. */
            threatType?: string;
        }
        interface ThreatMatch {
            /** The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives. */
            cacheDuration?: string;
            /** The platform type matching this threat. */
            platformType?: string;
            /** The threat matching this threat. */
            threat?: ThreatEntry;
            /** Optional metadata associated with this threat. */
            threatEntryMetadata?: ThreatEntryMetadata;
            /** The threat entry type matching this threat. */
            threatEntryType?: string;
            /** The threat type matching this threat. */
            threatType?: string;
        }
        interface ThreatSource {
            /** Referrer of the resource. Only set if the referrer is available. */
            referrer?: string;
            /** The remote IP of the resource in ASCII format. Either IPv4 or IPv6. */
            remoteIp?: string;
            /** The type of source reported. */
            type?: string;
            /** The URL of the resource. */
            url?: string;
        }
        interface UserInfo {
            /** The UN M.49 region code associated with the user's location. */
            regionCode?: string;
            /** Unique user identifier defined by the client. */
            userId?: string;
        }
        interface EncodedFullHashesResource {
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. */
                clientId?: string;
                /** The version of the client implementation. */
                clientVersion?: string;
                /** A serialized FindFullHashesRequest proto. */
                encodedRequest: string;
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
            }): Request<FindFullHashesResponse>;
        }
        interface EncodedUpdatesResource {
            get(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** A client ID that uniquely identifies the client implementation of the Safe Browsing API. */
                clientId?: string;
                /** The version of the client implementation. */
                clientVersion?: string;
                /** A serialized FetchThreatListUpdatesRequest proto. */
                encodedRequest: string;
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
            }): Request<FetchThreatListUpdatesResponse>;
        }
        interface FullHashesResource {
            /** Finds the full hashes that match the requested hash prefixes. */
            find(request: {
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
                resource: FindFullHashesRequest;
            }): Request<FindFullHashesResponse>;
            find(request: {
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
            body: FindFullHashesRequest): Request<FindFullHashesResponse>;
        }
        interface ThreatHitsResource {
            /** Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method. */
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: ThreatHit;
            }): Request<{}>;
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
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: ThreatHit): Request<{}>;
        }
        interface ThreatListsResource {
            /** Lists the Safe Browsing threat lists available for download. */
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
            }): Request<ListThreatListsResponse>;
        }
        interface ThreatListUpdatesResource {
            /** Fetches the most recent threat list updates. A client can request updates for multiple lists at once. */
            fetch(request: {
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
                resource: FetchThreatListUpdatesRequest;
            }): Request<FetchThreatListUpdatesResponse>;
            fetch(request: {
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
            body: FetchThreatListUpdatesRequest): Request<FetchThreatListUpdatesResponse>;
        }
        interface ThreatMatchesResource {
            /** Finds the threat entries that match the Safe Browsing lists. */
            find(request: {
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
                resource: FindThreatMatchesRequest;
            }): Request<FindThreatMatchesResponse>;
            find(request: {
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
            body: FindThreatMatchesRequest): Request<FindThreatMatchesResponse>;
        }

        const encodedFullHashes: EncodedFullHashesResource;

        const encodedUpdates: EncodedUpdatesResource;

        const fullHashes: FullHashesResource;

        const threatHits: ThreatHitsResource;

        const threatLists: ThreatListsResource;

        const threatListUpdates: ThreatListUpdatesResource;

        const threatMatches: ThreatMatchesResource;
    }
}
