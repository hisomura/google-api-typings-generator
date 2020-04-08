// Type definitions for non-npm package Poly API v1 1.0
// Project: https://developers.google.com/poly/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://poly.googleapis.com/$discovery/rest?version=v1
// Revision: 20200405

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Poly API v1 */
    function load(name: "poly", version: "v1"): PromiseLike<void>;
    function load(name: "poly", version: "v1", callback: () => any): void;

    namespace poly {
        interface Asset {
            /**
             * The author's publicly visible name. Use this name when giving credit to the
             * author. For more information, see [Licensing](/poly/discover/licensing).
             */
            authorName?: string;
            /**
             * For published assets, the time when the asset was published.
             * For unpublished assets, the time when the asset was created.
             */
            createTime?: string;
            /** The human-readable description, set by the asset's author. */
            description?: string;
            /** The human-readable name, set by the asset's author. */
            displayName?: string;
            /**
             * A list of Formats where each
             * format describes one representation of the asset.
             */
            formats?: Format[];
            /** Whether this asset has been curated by the Poly team. */
            isCurated?: boolean;
            /**
             * The license under which the author has made the asset available
             * for use, if any.
             */
            license?: string;
            /**
             * Application-defined opaque metadata for this asset. This field is only
             * returned when querying for the signed-in user's own assets, not for public
             * assets. This string is limited to 1K chars. It is up to the creator of
             * the asset to define the format for this string (for example, JSON).
             */
            metadata?: string;
            /**
             * The unique identifier for the asset in the form:
             * `assets/{ASSET_ID}`.
             */
            name?: string;
            /**
             * Hints for displaying the asset. Note that these parameters are not
             * immutable; the author of an asset may change them post-publication.
             */
            presentationParams?: PresentationParams;
            /** The remix info for the asset. */
            remixInfo?: RemixInfo;
            /** The thumbnail image for the asset. */
            thumbnail?: File;
            /**
             * The time when the asset was last modified. For published assets, whose
             * contents are immutable, the update time changes only when metadata
             * properties, such as visibility, are updated.
             */
            updateTime?: string;
            /** The visibility of the asset and who can access it. */
            visibility?: string;
        }
        interface AssetImportMessage {
            /** The code associated with this message. */
            code?: string;
            /** An optional file path. Only present for those error codes that specify it. */
            filePath?: string;
            /** An optional image error. Only present for INVALID_IMAGE_FILE. */
            imageError?: ImageError;
            /** An optional OBJ parse error. Only present for OBJ_PARSE_ERROR. */
            objParseError?: ObjParseError;
        }
        interface File {
            /**
             * The MIME content-type, such as `image/png`.
             * For more information, see
             * [MIME
             * types](//developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
             */
            contentType?: string;
            /**
             * The path of the resource file relative to the
             * root file. For root or thumbnail files,
             * this is just the filename.
             */
            relativePath?: string;
            /** The URL where the file data can be retrieved. */
            url?: string;
        }
        interface Format {
            /** Complexity stats about this representation of the asset. */
            formatComplexity?: FormatComplexity;
            /**
             * A short string that identifies the format type of this representation.
             * Possible values are: `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
             */
            formatType?: string;
            /**
             * A list of dependencies of the root element. May include, but is not
             * limited to, materials, textures, and shader programs.
             */
            resources?: File[];
            /**
             * The root of the file hierarchy. This will always be populated.
             * For some format_types - such as `TILT`, which are
             * self-contained - this is all of the data.
             *
             * Other types - such as `OBJ` - often reference other data elements.
             * These are contained in the resources field.
             */
            root?: File;
        }
        interface FormatComplexity {
            /**
             * A non-negative integer that represents the level of detail (LOD) of this
             * format relative to other formats of the same asset with the same
             * format_type.
             * This hint allows you to sort formats from the most-detailed (0) to
             * least-detailed (integers greater than 0).
             */
            lodHint?: number;
            /** The estimated number of triangles. */
            triangleCount?: string;
        }
        // tslint:disable-next-line:interface-name
        interface ImageError {
            /** The type of image error encountered. Optional for older image errors. */
            code?: string;
            /** The file path in the import of the image that was rejected. */
            filePath?: string;
        }
        interface ListAssetsResponse {
            /** A list of assets that match the criteria specified in the request. */
            assets?: Asset[];
            /**
             * The continuation token for retrieving the next page. If empty,
             * indicates that there are no more pages. To get the next page, submit the
             * same request specifying this value as the
             * page_token.
             */
            nextPageToken?: string;
            /** The total number of assets in the list, without pagination. */
            totalSize?: number;
        }
        interface ListLikedAssetsResponse {
            /** A list of assets that match the criteria specified in the request. */
            assets?: Asset[];
            /**
             * The continuation token for retrieving the next page. If empty,
             * indicates that there are no more pages. To get the next page, submit the
             * same request specifying this value as the
             * page_token.
             */
            nextPageToken?: string;
            /** The total number of assets in the list, without pagination. */
            totalSize?: number;
        }
        interface ListUserAssetsResponse {
            /**
             * The continuation token for retrieving the next page. If empty,
             * indicates that there are no more pages. To get the next page, submit the
             * same request specifying this value as the
             * page_token.
             */
            nextPageToken?: string;
            /** The total number of assets in the list, without pagination. */
            totalSize?: number;
            /** A list of UserAssets matching the request. */
            userAssets?: UserAsset[];
        }
        interface ObjParseError {
            /** The type of problem found (required). */
            code?: string;
            /** The ending character index at which the problem was found. */
            endIndex?: number;
            /** The file path in which the problem was found. */
            filePath?: string;
            /**
             * The text of the line. Note that this may be truncated if the line was very
             * long. This may not include the error if it occurs after line truncation.
             */
            line?: string;
            /** Line number at which the problem was found. */
            lineNumber?: number;
            /** The starting character index at which the problem was found. */
            startIndex?: number;
        }
        interface PresentationParams {
            /**
             * A background color which could be used for displaying the 3D asset in a
             * 'thumbnail' or 'palette' style view. Authors have the option to set this
             * background color when publishing or editing their asset.
             *
             * This is represented as a six-digit hexademical triplet specifying the
             * RGB components of the background color, e.g. #FF0000 for Red.
             */
            backgroundColor?: string;
            /**
             * The materials' diffuse/albedo color. This does not apply to vertex colors
             * or texture maps.
             */
            colorSpace?: string;
            /**
             * A rotation that should be applied to the object root to make it upright.
             * More precisely, this quaternion transforms from "object space" (the space
             * in which the object is defined) to "presentation space", a coordinate
             * system where +Y is up, +X is right, -Z is forward. For example, if
             * the object is the Eiffel Tower, in its local coordinate system the
             * object might be laid out such that the base of the tower is on the
             * YZ plane and the tip of the tower is towards positive X. In this case
             * this quaternion would specify a rotation (of 90 degrees about the Z
             * axis) such that in the presentation space the base of the tower is
             * aligned with the XZ plane, and the tip of the tower lies towards +Y.
             *
             * This rotation is unrelated to the object's pose in the web preview,
             * which is just a camera position setting and is &#42;not&#42; reflected in this
             * rotation.
             *
             * Please note: this is applicable only to the gLTF.
             */
            orientingRotation?: Quaternion;
        }
        interface Quaternion {
            /** The scalar component. */
            w?: number;
            /** The x component. */
            x?: number;
            /** The y component. */
            y?: number;
            /** The z component. */
            z?: number;
        }
        interface RemixInfo {
            /**
             * Resource ids for the sources of this remix, of the form:
             * `assets/{ASSET_ID}`
             */
            sourceAsset?: string[];
        }
        interface StartAssetImportResponse {
            /**
             * The id of newly created asset. If this is empty when the operation is
             * complete it means the import failed. Please refer to the
             * assetImportMessages field to understand what went wrong.
             */
            assetId?: string;
            /** The id of the asset import. */
            assetImportId?: string;
            /**
             * The message from the asset import. This will contain any warnings
             * (or - in the case of failure - errors) that occurred during import.
             */
            assetImportMessages?: AssetImportMessage[];
            /** The publish URL for the asset. */
            publishUrl?: string;
        }
        interface UserAsset {
            /** An Asset. */
            asset?: Asset;
        }
        interface AssetsResource {
            /**
             * Returns detailed information about an asset given its name.
             * PRIVATE assets are returned only if
             * the currently authenticated user (via OAuth token) is the author of the
             * asset.
             */
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
                /** Required. An asset's name in the form `assets/{ASSET_ID}`. */
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
            }): Request<Asset>;
            /**
             * Lists all public, remixable assets. These are assets with an access level
             * of PUBLIC and published under the
             * CC-By license.
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
                /**
                 * Filter assets based on the specified category. Supported values are:
                 * `animals`, `architecture`, `art`, `food`, `nature`, `objects`, `people`,
                 * `scenes`, `technology`, and `transport`.
                 */
                category?: string;
                /** Return only assets that have been curated by the Poly team. */
                curated?: boolean;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /**
                 * Return only assets with the matching format. Acceptable values are:
                 * `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
                 */
                format?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * One or more search terms to be matched against all text that Poly has
                 * indexed for assets, which includes display_name,
                 * description, and tags. Multiple keywords should be
                 * separated by spaces.
                 */
                keywords?: string;
                /**
                 * Returns assets that are of the specified complexity or less. Defaults to
                 * COMPLEX. For example, a request for
                 * MEDIUM assets also includes
                 * SIMPLE assets.
                 */
                maxComplexity?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Specifies an ordering for assets. Acceptable values are:
                 * `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets
                 * based on a combination of popularity and other features.
                 */
                orderBy?: string;
                /**
                 * The maximum number of assets to be returned. This value must be between `1`
                 * and `100`. Defaults to `20`.
                 */
                pageSize?: number;
                /**
                 * Specifies a continuation token from a previous search whose results were
                 * split into multiple pages. To get the next page, submit the same request
                 * specifying the value from
                 * next_page_token.
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
            }): Request<ListAssetsResponse>;
        }
        interface AssetsResource {
            /**
             * Lists assets authored by the given user. Only the value 'me', representing
             * the currently-authenticated user, is supported. May include assets with an
             * access level of PRIVATE or
             * UNLISTED and assets which are
             * All Rights Reserved for the
             * currently-authenticated user.
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
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /**
                 * Return only assets with the matching format. Acceptable values are:
                 * `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, and `TILT`.
                 */
                format?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * A valid user id. Currently, only the special value 'me', representing the
                 * currently-authenticated user is supported. To use 'me', you must pass
                 * an OAuth token with the request.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Specifies an ordering for assets. Acceptable values are:
                 * `BEST`, `NEWEST`, `OLDEST`. Defaults to `BEST`, which ranks assets
                 * based on a combination of popularity and other features.
                 */
                orderBy?: string;
                /**
                 * The maximum number of assets to be returned. This value must be between `1`
                 * and `100`. Defaults to `20`.
                 */
                pageSize?: number;
                /**
                 * Specifies a continuation token from a previous search whose results were
                 * split into multiple pages. To get the next page, submit the same request
                 * specifying the value from
                 * next_page_token.
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
                /**
                 * The visibility of the assets to be returned.
                 * Defaults to
                 * VISIBILITY_UNSPECIFIED
                 * which returns all assets.
                 */
                visibility?: string;
            }): Request<ListUserAssetsResponse>;
        }
        interface LikedassetsResource {
            /**
             * Lists assets that the user has liked. Only the value 'me', representing
             * the currently-authenticated user, is supported. May include assets with an
             * access level of UNLISTED.
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
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /**
                 * Return only assets with the matching format. Acceptable values are:
                 * `BLOCKS`, `FBX`, `GLTF`, `GLTF2`, `OBJ`, `TILT`.
                 */
                format?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /**
                 * A valid user id. Currently, only the special value 'me', representing the
                 * currently-authenticated user is supported. To use 'me', you must pass
                 * an OAuth token with the request.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * Specifies an ordering for assets. Acceptable values are:
                 * `BEST`, `NEWEST`, `OLDEST`, 'LIKED_TIME'. Defaults to `LIKED_TIME`, which
                 * ranks assets based on how recently they were liked.
                 */
                orderBy?: string;
                /**
                 * The maximum number of assets to be returned. This value must be between `1`
                 * and `100`. Defaults to `20`.
                 */
                pageSize?: number;
                /**
                 * Specifies a continuation token from a previous search whose results were
                 * split into multiple pages. To get the next page, submit the same request
                 * specifying the value from
                 * next_page_token.
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
            }): Request<ListLikedAssetsResponse>;
        }
        interface UsersResource {
            assets: AssetsResource;
            likedassets: LikedassetsResource;
        }

        const assets: AssetsResource;

        const users: UsersResource;
    }
}
