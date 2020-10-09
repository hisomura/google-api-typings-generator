// Type definitions for non-npm package Playable Locations API v3 3.0
// Project: https://developers.google.com/maps/contact-sales/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://playablelocations.googleapis.com/$discovery/rest?version=v3
// Revision: 20201008

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Playable Locations API v3 */
    function load(name: "playablelocations", version: "v3"): PromiseLike<void>;
    function load(name: "playablelocations", version: "v3", callback: () => any): void;

    namespace playablelocations {
        interface GoogleMapsPlayablelocationsV3Impression {
            /**
             * An arbitrary, developer-defined type identifier for each type of game object used in your game. Since players interact with differ types of game objects in different ways, this
             * field allows you to segregate impression data by type for analysis. You should assign a unique `game_object_type` ID to represent a distinct type of game object in your game. For
             * example, 1=monster location, 2=powerup location.
             */
            gameObjectType?: number;
            /** Required. The type of impression event. */
            impressionType?: string;
            /** Required. The name of the playable location. */
            locationName?: string;
        }
        interface GoogleMapsPlayablelocationsV3LogImpressionsRequest {
            /** Required. Information about the client device. For example, device model and operating system. */
            clientInfo?: GoogleMapsUnityClientInfo;
            /** Required. Impression event details. The maximum number of impression reports that you can log at once is 50. */
            impressions?: GoogleMapsPlayablelocationsV3Impression[];
            /**
             * Required. A string that uniquely identifies the log impressions request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value must
             * not exceed 50 characters. You should reuse the `request_id` only when retrying a request in case of failure. In this case, the request must be identical to the one that failed.
             */
            requestId?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface GoogleMapsPlayablelocationsV3LogImpressionsResponse {
        }
        interface GoogleMapsPlayablelocationsV3LogPlayerReportsRequest {
            /** Required. Information about the client device (for example, device model and operating system). */
            clientInfo?: GoogleMapsUnityClientInfo;
            /** Required. Player reports. The maximum number of player reports that you can log at once is 50. */
            playerReports?: GoogleMapsPlayablelocationsV3PlayerReport[];
            /**
             * Required. A string that uniquely identifies the log player reports request. This allows you to detect duplicate requests. We recommend that you use UUIDs for this value. The value
             * must not exceed 50 characters. You should reuse the `request_id` only when retrying a request in the case of a failure. In that case, the request must be identical to the one that
             * failed.
             */
            requestId?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface GoogleMapsPlayablelocationsV3LogPlayerReportsResponse {
        }
        interface GoogleMapsPlayablelocationsV3PlayerReport {
            /**
             * Language code (in BCP-47 format) indicating the language of the freeform description provided in `reason_details`. Examples are "en", "en-US" or "ja-Latn". For more information, see
             * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
             */
            languageCode?: string;
            /** Required. The name of the playable location. */
            locationName?: string;
            /** Required. A free-form description detailing why the playable location is considered bad. */
            reasonDetails?: string;
            /** Required. One or more reasons why this playable location is considered bad. */
            reasons?: string[];
        }
        interface GoogleMapsPlayablelocationsV3SampleAreaFilter {
            /**
             * Required. The S2 cell ID of the area you want. This must be between cell level 11 and 14 (inclusive). S2 cells are 64-bit integers that identify areas on the Earth. They are
             * hierarchical, and can therefore be used for spatial indexing. The S2 geometry library is available in a number of languages: * [C++](https://github.com/google/s2geometry) *
             * [Java](https://github.com/google/s2-geometry-library-java) * [Go](https://github.com/golang/geo) * [Python](https://github.com/google/s2geometry/tree/master/src/python)
             */
            s2CellId?: string;
        }
        interface GoogleMapsPlayablelocationsV3SampleCriterion {
            /**
             * Specifies which `PlayableLocation` fields are returned. `name` (which is used for logging impressions), `center_point` and `place_id` (or `plus_code`) are always returned. The
             * following fields are omitted unless you specify them here: * snapped_point * types Note: The more fields you include, the more expensive in terms of data and associated latency your
             * query will be.
             */
            fieldsToReturn?: string;
            /** Specifies filtering options, and specifies what will be included in the result set. */
            filter?: GoogleMapsPlayablelocationsV3SampleFilter;
            /**
             * Required. An arbitrary, developer-defined identifier of the type of game object that the playable location is used for. This field allows you to specify criteria per game object
             * type when searching for playable locations. You should assign a unique `game_object_type` ID across all `request_criteria` to represent a distinct type of game object. For example,
             * 1=monster location, 2=powerup location. The response contains a map.
             */
            gameObjectType?: number;
        }
        interface GoogleMapsPlayablelocationsV3SampleFilter {
            /** Restricts the set of playable locations to just the [types](/maps/documentation/gaming/tt/types) that you want. */
            includedTypes?: string[];
            /**
             * Specifies the maximum number of playable locations to return. This value must not be greater than 1000. The default value is 100. Only the top-ranking playable locations are
             * returned.
             */
            maxLocationCount?: number;
            /** A set of options that control the spacing between playable locations. By default the minimum distance between locations is 200m. */
            spacing?: GoogleMapsPlayablelocationsV3SampleSpacingOptions;
        }
        interface GoogleMapsPlayablelocationsV3SamplePlayableLocation {
            /**
             * Required. The latitude and longitude associated with the center of the playable location. By default, the set of playable locations returned from SamplePlayableLocations use
             * center-point coordinates.
             */
            centerPoint?: GoogleTypeLatLng;
            /** Required. The name of this playable location. */
            name?: string;
            /** A [place ID] (https://developers.google.com/places/place-id) */
            placeId?: string;
            /** A [plus code] (http://openlocationcode.com) */
            plusCode?: string;
            /** The playable location's coordinates, snapped to the sidewalk of the nearest road, if a nearby road exists. */
            snappedPoint?: GoogleTypeLatLng;
            /**
             * A collection of [Playable Location Types](/maps/documentation/gaming/tt/types) for this playable location. The first type in the collection is the primary type. Type information
             * might not be available for all playable locations.
             */
            types?: string[];
        }
        interface GoogleMapsPlayablelocationsV3SamplePlayableLocationList {
            /** A list of playable locations for this game object type. */
            locations?: GoogleMapsPlayablelocationsV3SamplePlayableLocation[];
        }
        interface GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest {
            /** Required. Specifies the area to search within for playable locations. */
            areaFilter?: GoogleMapsPlayablelocationsV3SampleAreaFilter;
            /** Required. Specifies one or more (up to 5) criteria for filtering the returned playable locations. */
            criteria?: GoogleMapsPlayablelocationsV3SampleCriterion[];
        }
        interface GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse {
            /** Each PlayableLocation object corresponds to a game_object_type specified in the request. */
            locationsPerGameObjectType?: { [P in string]: GoogleMapsPlayablelocationsV3SamplePlayableLocationList };
            /**
             * Required. Specifies the "time-to-live" for the set of playable locations. You can use this value to determine how long to cache the set of playable locations. After this length of
             * time, your back-end game server should issue a new SamplePlayableLocations request to get a fresh set of playable locations (because for example, they might have been removed, a
             * park might have closed for the day, a business might have closed permanently).
             */
            ttl?: string;
        }
        interface GoogleMapsPlayablelocationsV3SampleSpacingOptions {
            /**
             * Required. The minimum spacing between any two playable locations, measured in meters. The minimum value is 30. The maximum value is 1000. Inputs will be rounded up to the next 10
             * meter interval. The default value is 200m. Set this field to remove tight clusters of playable locations. Note: The spacing is a greedy algorithm. It optimizes for selecting the
             * highest ranking locations first, not to maximize the number of locations selected. Consider the following scenario: * Rank: A: 2, B: 1, C: 3. * Distance: A--200m--B--200m--C If
             * spacing=250, it will pick the highest ranked location [B], not [A, C]. Note: Spacing works within the game object type itself, as well as the previous ones. Suppose three game
             * object types, each with the following spacing: * X: 400m, Y: undefined, Z: 200m. 1. Add locations for X, within 400m of each other. 2. Add locations for Y, without any spacing. 3.
             * Finally, add locations for Z within 200m of each other as well X and Y. The distance diagram between those locations end up as: * From->To. * X->X: 400m * Y->X, Y->Y: unspecified. *
             * Z->X, Z->Y, Z->Z: 200m.
             */
            minSpacingMeters?: number;
            /**
             * Specifies whether the minimum spacing constraint applies to the center-point or to the snapped point of playable locations. The default value is `CENTER_POINT`. If a snapped point
             * is not available for a playable location, its center-point is used instead. Set this to the point type used in your game.
             */
            pointType?: string;
        }
        interface GoogleMapsUnityClientInfo {
            /** API client name and version. For example, the SDK calling the API. The exact format is up to the client. */
            apiClient?: string;
            /** Application ID, such as the package name on Android and the bundle identifier on iOS platforms. */
            applicationId?: string;
            /** Application version number, such as "1.2.3". The exact format is application-dependent. */
            applicationVersion?: string;
            /** Device model as reported by the device. The exact format is platform-dependent. */
            deviceModel?: string;
            /**
             * Language code (in BCP-47 format) indicating the UI language of the client. Examples are "en", "en-US" or "ja-Latn". For more information, see
             * http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
             */
            languageCode?: string;
            /** Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent. */
            operatingSystem?: string;
            /** Build number/version of the operating system. e.g., the contents of android.os.Build.ID in Android, or the contents of sysctl "kern.osversion" in iOS. */
            operatingSystemBuild?: string;
            /** Platform where the application is running. */
            platform?: string;
        }
        interface GoogleTypeLatLng {
            /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
            latitude?: number;
            /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
            longitude?: number;
        }
        interface V3Resource {
            /**
             * Logs new events when playable locations are displayed, and when they are interacted with. Impressions are not partially saved; either all impressions are saved and this request
             * succeeds, or no impressions are saved, and this request fails.
             */
            logImpressions(request: {
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
                resource: GoogleMapsPlayablelocationsV3LogImpressionsRequest;
            }): Request<{}>;
            logImpressions(request: {
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
            body: GoogleMapsPlayablelocationsV3LogImpressionsRequest): Request<{}>;
            /**
             * Logs bad playable location reports submitted by players. Reports are not partially saved; either all reports are saved and this request succeeds, or no reports are saved, and this
             * request fails.
             */
            logPlayerReports(request: {
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
                resource: GoogleMapsPlayablelocationsV3LogPlayerReportsRequest;
            }): Request<{}>;
            logPlayerReports(request: {
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
            body: GoogleMapsPlayablelocationsV3LogPlayerReportsRequest): Request<{}>;
            /**
             * Returns a set of playable locations that lie within a specified area, that satisfy optional filter criteria. Note: Identical `SamplePlayableLocations` requests can return different
             * results as the state of the world changes over time.
             */
            samplePlayableLocations(request: {
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
                resource: GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest;
            }): Request<GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse>;
            samplePlayableLocations(request: {
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
            body: GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest): Request<GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse>;
        }

        const v3: V3Resource;
    }
}
