/* Type definitions for non-npm package Enterprise License Manager API v1 1.0 */
// Project: https://developers.google.com/admin-sdk/licensing/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://licensing.googleapis.com/$discovery/rest?version=v1
// Revision: 20201116

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Enterprise License Manager API v1 */
    function load(name: "licensing", version: "v1"): PromiseLike<void>;
    function load(name: "licensing", version: "v1", callback: () => any): void;

    namespace licensing {
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface LicenseAssignment {
            /** ETag of the resource. */
            etags?: string;
            /** Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`. */
            kind?: string;
            /** A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs. */
            productId?: string;
            /** Display Name of the product. */
            productName?: string;
            /** Link to this page. */
            selfLink?: string;
            /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
            skuId?: string;
            /** Display Name of the sku of the product. */
            skuName?: string;
            /**
             * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a
             * `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
             */
            userId?: string;
        }
        interface LicenseAssignmentInsert {
            /** Email id of the user */
            userId?: string;
        }
        interface LicenseAssignmentList {
            /** ETag of the resource. */
            etag?: string;
            /** The LicenseAssignments in this page of results. */
            items?: LicenseAssignment[];
            /** Identifies the resource as a collection of LicenseAssignments. */
            kind?: string;
            /**
             * The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The `maxResults` query string is related to the
             * `nextPageToken` since `maxResults` determines how many entries are returned on each next page.
             */
            nextPageToken?: string;
        }
        interface LicenseAssignmentsResource {
            /** Revoke a license. */
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
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
                skuId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /**
                 * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use
                 * a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
                 */
                userId: string;
            }): Request<{}>;
            /** Get a specific user's license by product SKU. */
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
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
                skuId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /**
                 * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use
                 * a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
                 */
                userId: string;
            }): Request<LicenseAssignment>;
            /** Assign a license. */
            insert(request: {
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
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
                skuId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: LicenseAssignmentInsert;
            }): Request<LicenseAssignment>;
            insert(request: {
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
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
                skuId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: LicenseAssignmentInsert): Request<LicenseAssignment>;
            /** List all users assigned licenses for a specific product SKU. */
            listForProduct(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Customer's `customerId`. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error. */
                customerId: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This
                 * is an optional query string. If not specified, the server returns the first page.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<LicenseAssignmentList>;
            /** List all users assigned licenses for a specific product SKU. */
            listForProductAndSku(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Customer's `customerId`. A previous version of this API accepted the primary domain name as a value for this field. If the customer is suspended, the server returns an error. */
                customerId: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This
                 * is an optional query string. If not specified, the server returns the first page.
                 */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
                skuId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<LicenseAssignmentList>;
            /** Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics. */
            patch(request: {
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
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
                skuId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /**
                 * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use
                 * a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
                 */
                userId: string;
                /** Request body */
                resource: LicenseAssignment;
            }): Request<LicenseAssignment>;
            patch(request: {
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
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
                skuId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /**
                 * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use
                 * a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
                 */
                userId: string;
            },
            body: LicenseAssignment): Request<LicenseAssignment>;
            /** Reassign a user's product SKU with a different SKU in the same product. */
            update(request: {
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
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
                skuId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /**
                 * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use
                 * a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
                 */
                userId: string;
                /** Request body */
                resource: LicenseAssignment;
            }): Request<LicenseAssignment>;
            update(request: {
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
                /** A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. */
                productId: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. */
                skuId: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /**
                 * The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use
                 * a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
                 */
                userId: string;
            },
            body: LicenseAssignment): Request<LicenseAssignment>;
        }

        const licenseAssignments: LicenseAssignmentsResource;
    }
}
