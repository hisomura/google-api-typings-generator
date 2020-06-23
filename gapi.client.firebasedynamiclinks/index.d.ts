// Type definitions for non-npm package Firebase Dynamic Links API v1 1.0
// Project: https://firebase.google.com/docs/dynamic-links/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://firebasedynamiclinks.googleapis.com/$discovery/rest?version=v1
// Revision: 20200622

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Firebase Dynamic Links API v1 */
    function load(name: "firebasedynamiclinks", version: "v1"): PromiseLike<void>;
    function load(name: "firebasedynamiclinks", version: "v1", callback: () => any): void;

    namespace firebasedynamiclinks {
        interface AnalyticsInfo {
            /** Google Play Campaign Measurements. */
            googlePlayAnalytics?: GooglePlayAnalytics;
            /** iTunes Connect App Analytics. */
            itunesConnectAnalytics?: ITunesConnectAnalytics;
        }
        interface AndroidInfo {
            /** Link to open on Android if the app is not installed. */
            androidFallbackLink?: string;
            /** If specified, this overrides the ‘link’ parameter on Android. */
            androidLink?: string;
            /**
             * Minimum version code for the Android app. If the installed app’s version
             * code is lower, then the user is taken to the Play Store.
             */
            androidMinPackageVersionCode?: string;
            /** Android package name of the app. */
            androidPackageName?: string;
        }
        interface CreateManagedShortLinkRequest {
            /**
             * Information about the Dynamic Link to be shortened.
             * [Learn
             * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
             */
            dynamicLinkInfo?: DynamicLinkInfo;
            /**
             * Full long Dynamic Link URL with desired query parameters specified.
             * For example,
             * "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample",
             * [Learn
             * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
             */
            longDynamicLink?: string;
            /**
             * Link name to associate with the link. It's used for marketer to identify
             * manually-created links in the Firebase console
             * (https://console.firebase.google.com/).
             * Links must be named to be tracked.
             */
            name?: string;
            /** Google SDK version. Version takes the form "$major.$minor.$patch" */
            sdkVersion?: string;
            /** Short Dynamic Link suffix. Optional. */
            suffix?: Suffix;
        }
        interface CreateManagedShortLinkResponse {
            /** Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz */
            managedShortLink?: ManagedShortLink;
            /** Preview link to show the link flow chart. (debug info.) */
            previewLink?: string;
            /** Information about potential warnings on link creation. */
            warning?: DynamicLinkWarning[];
        }
        interface CreateShortDynamicLinkRequest {
            /**
             * Information about the Dynamic Link to be shortened.
             * [Learn
             * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
             */
            dynamicLinkInfo?: DynamicLinkInfo;
            /**
             * Full long Dynamic Link URL with desired query parameters specified.
             * For example,
             * "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample",
             * [Learn
             * more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
             */
            longDynamicLink?: string;
            /** Google SDK version. Version takes the form "$major.$minor.$patch" */
            sdkVersion?: string;
            /** Short Dynamic Link suffix. Optional. */
            suffix?: Suffix;
        }
        interface CreateShortDynamicLinkResponse {
            /** Preview link to show the link flow chart. (debug info.) */
            previewLink?: string;
            /** Short Dynamic Link value. e.g. https://abcd.app.goo.gl/wxyz */
            shortLink?: string;
            /** Information about potential warnings on link creation. */
            warning?: DynamicLinkWarning[];
        }
        interface DesktopInfo {
            /** Link to open on desktop. */
            desktopFallbackLink?: string;
        }
        interface DeviceInfo {
            /** Device model name. */
            deviceModelName?: string;
            /** Device language code setting. */
            languageCode?: string;
            /**
             * Device language code setting obtained by executing JavaScript code in
             * WebView.
             */
            languageCodeFromWebview?: string;
            /**
             * Device language code raw setting.
             * iOS does returns language code in different format than iOS WebView.
             * For example WebView returns en_US, but iOS returns en-US.
             * Field below will return raw value returned by iOS.
             */
            languageCodeRaw?: string;
            /** Device display resolution height. */
            screenResolutionHeight?: string;
            /** Device display resolution width. */
            screenResolutionWidth?: string;
            /** Device timezone setting. */
            timezone?: string;
        }
        interface DynamicLinkEventStat {
            /** The number of times this event occurred. */
            count?: string;
            /** Link event. */
            event?: string;
            /** Requested platform. */
            platform?: string;
        }
        interface DynamicLinkInfo {
            /**
             * Parameters used for tracking. See all tracking parameters in the
             * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
             */
            analyticsInfo?: AnalyticsInfo;
            /**
             * Android related information. See Android related parameters in the
             * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
             */
            androidInfo?: AndroidInfo;
            /**
             * Desktop related information. See desktop related parameters in the
             * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
             */
            desktopInfo?: DesktopInfo;
            /**
             * E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps
             * More examples can be found in description of getNormalizedUriPrefix in
             * j/c/g/firebase/dynamiclinks/uri/DdlDomain.java
             *
             * Will fallback to dynamic_link_domain is this field is missing
             */
            domainUriPrefix?: string;
            /**
             * Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl
             * [Learn
             * more](https://firebase.google.com/docs/dynamic-links/android/receive) on
             * how to set up Dynamic Link domain associated with your Firebase project.
             *
             * Required if missing domain_uri_prefix.
             */
            dynamicLinkDomain?: string;
            /**
             * iOS related information. See iOS related parameters in the
             * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
             */
            iosInfo?: IosInfo;
            /**
             * The link your app will open, You can specify any URL your app can handle.
             * This link must be a well-formatted URL, be properly URL-encoded, and use
             * the HTTP or HTTPS scheme. See 'link' parameters in the
             * [documentation](https://firebase.google.com/docs/dynamic-links/create-manually).
             *
             * Required.
             */
            link?: string;
            /** Information of navigation behavior of a Firebase Dynamic Links. */
            navigationInfo?: NavigationInfo;
            /**
             * Parameters for social meta tag params.
             * Used to set meta tag data for link previews on social sites.
             */
            socialMetaTagInfo?: SocialMetaTagInfo;
        }
        interface DynamicLinkStats {
            /** Dynamic Link event stats. */
            linkEventStats?: DynamicLinkEventStat[];
        }
        interface DynamicLinkWarning {
            /** The warning code. */
            warningCode?: string;
            /** The document describing the warning, and helps resolve. */
            warningDocumentLink?: string;
            /** The warning message to help developers improve their requests. */
            warningMessage?: string;
        }
        interface GetIosPostInstallAttributionRequest {
            /**
             * App installation epoch time (https://en.wikipedia.org/wiki/Unix_time).
             * This is a client signal for a more accurate weak match.
             */
            appInstallationTime?: string;
            /** APP bundle ID. */
            bundleId?: string;
            /** Device information. */
            device?: DeviceInfo;
            /**
             * iOS version, ie: 9.3.5.
             * Consider adding "build".
             */
            iosVersion?: string;
            /**
             * App post install attribution retrieval information. Disambiguates
             * mechanism (iSDK or developer invoked) to retrieve payload from
             * clicked link.
             */
            retrievalMethod?: string;
            /** Google SDK version. Version takes the form "$major.$minor.$patch" */
            sdkVersion?: string;
            /**
             * Possible unique matched link that server need to check before performing
             * fingerprint match. If passed link is short server need to expand the link.
             * If link is long server need to vslidate the link.
             */
            uniqueMatchLinkToCheck?: string;
            /**
             * Strong match page information. Disambiguates between default UI and
             * custom page to present when strong match succeeds/fails to find cookie.
             */
            visualStyle?: string;
        }
        interface GetIosPostInstallAttributionResponse {
            /**
             * The minimum version for app, specified by dev through ?imv= parameter.
             * Return to iSDK to allow app to evaluate if current version meets this.
             */
            appMinimumVersion?: string;
            /** The confidence of the returned attribution. */
            attributionConfidence?: string;
            /**
             * The deep-link attributed post-install via one of several techniques
             * (fingerprint, copy unique).
             */
            deepLink?: string;
            /**
             * User-agent specific custom-scheme URIs for iSDK to open. This will be set
             * according to the user-agent tha the click was originally made in. There is
             * no Safari-equivalent custom-scheme open URLs.
             * ie: googlechrome://www.example.com
             * ie: firefox://open-url?url=http://www.example.com
             * ie: opera-http://example.com
             */
            externalBrowserDestinationLink?: string;
            /**
             * The link to navigate to update the app if min version is not met.
             * This is either (in order): 1) fallback link (from ?ifl= parameter, if
             * specified by developer) or 2) AppStore URL (from ?isi= parameter, if
             * specified), or 3) the payload link (from required link= parameter).
             */
            fallbackLink?: string;
            /**
             * Invitation ID attributed post-install via one of several techniques
             * (fingerprint, copy unique).
             */
            invitationId?: string;
            /**
             * Instruction for iSDK to attemmpt to perform strong match. For instance,
             * if browser does not support/allow cookie or outside of support browsers,
             * this will be false.
             */
            isStrongMatchExecutable?: boolean;
            /**
             * Describes why match failed, ie: "discarded due to low confidence".
             * This message will be publicly visible.
             */
            matchMessage?: string;
            /**
             * Entire FDL (short or long) attributed post-install via one of several
             * techniques (fingerprint, copy unique).
             */
            requestedLink?: string;
            /** Which IP version the request was made from. */
            requestIpVersion?: string;
            /**
             * The entire FDL, expanded from a short link. It is the same as the
             * requested_link, if it is long. Parameters from this should not be
             * used directly (ie: server can default utm_[campaign|medium|source]
             * to a value when requested_link lack them, server determine the best
             * fallback_link when requested_link specifies >1 fallback links).
             */
            resolvedLink?: string;
            /** Scion campaign value to be propagated by iSDK to Scion at post-install. */
            utmCampaign?: string;
            /** Scion content value to be propagated by iSDK to Scion at app-reopen. */
            utmContent?: string;
            /** Scion medium value to be propagated by iSDK to Scion at post-install. */
            utmMedium?: string;
            /** Scion source value to be propagated by iSDK to Scion at post-install. */
            utmSource?: string;
            /** Scion term value to be propagated by iSDK to Scion at app-reopen. */
            utmTerm?: string;
        }
        interface GetIosReopenAttributionRequest {
            /** APP bundle ID. */
            bundleId?: string;
            /**
             * FDL link to be verified from an app universal link open.
             * The FDL link can be one of:
             * 1) short FDL.
             * e.g. <app_code>.page.link/<ddl_id>, or
             * 2) long FDL.
             * e.g. <app_code>.page.link/?{query params}, or
             * 3) Invite FDL.
             * e.g. <app_code>.page.link/i/<invite_id_or_alias>
             */
            requestedLink?: string;
            /** Google SDK version. Version takes the form "$major.$minor.$patch" */
            sdkVersion?: string;
        }
        interface GetIosReopenAttributionResponse {
            /**
             * The deep-link attributed the app universal link open. For both regular
             * FDL links and invite FDL links.
             */
            deepLink?: string;
            /** Optional invitation ID, for only invite typed requested FDL links. */
            invitationId?: string;
            /**
             * FDL input value of the "&imv=" parameter, minimum app version to be
             * returned to Google Firebase SDK running on iOS-9.
             */
            iosMinAppVersion?: string;
            /**
             * The entire FDL, expanded from a short link. It is the same as the
             * requested_link, if it is long.
             */
            resolvedLink?: string;
            /** Scion campaign value to be propagated by iSDK to Scion at app-reopen. */
            utmCampaign?: string;
            /** Scion content value to be propagated by iSDK to Scion at app-reopen. */
            utmContent?: string;
            /** Scion medium value to be propagated by iSDK to Scion at app-reopen. */
            utmMedium?: string;
            /** Scion source value to be propagated by iSDK to Scion at app-reopen. */
            utmSource?: string;
            /** Scion term value to be propagated by iSDK to Scion at app-reopen. */
            utmTerm?: string;
        }
        interface GooglePlayAnalytics {
            /**
             * [AdWords autotagging
             * parameter](https://support.google.com/analytics/answer/1033981?hl=en); used
             * to measure Google AdWords ads. This value is generated dynamically and
             * should never be modified.
             */
            gclid?: string;
            /**
             * Campaign name; used for keyword analysis to identify a specific product
             * promotion or strategic campaign.
             */
            utmCampaign?: string;
            /**
             * Campaign content; used for A/B testing and content-targeted ads to
             * differentiate ads or links that point to the same URL.
             */
            utmContent?: string;
            /** Campaign medium; used to identify a medium such as email or cost-per-click. */
            utmMedium?: string;
            /**
             * Campaign source; used to identify a search engine, newsletter, or other
             * source.
             */
            utmSource?: string;
            /** Campaign term; used with paid search to supply the keywords for ads. */
            utmTerm?: string;
        }
        // tslint:disable-next-line:interface-name
        interface IosInfo {
            /** iOS App Store ID. */
            iosAppStoreId?: string;
            /** iOS bundle ID of the app. */
            iosBundleId?: string;
            /**
             * Custom (destination) scheme to use for iOS. By default, we’ll use the
             * bundle ID as the custom scheme. Developer can override this behavior using
             * this param.
             */
            iosCustomScheme?: string;
            /** Link to open on iOS if the app is not installed. */
            iosFallbackLink?: string;
            /** iPad bundle ID of the app. */
            iosIpadBundleId?: string;
            /** If specified, this overrides the ios_fallback_link value on iPads. */
            iosIpadFallbackLink?: string;
            /** iOS minimum version. */
            iosMinimumVersion?: string;
        }
        // tslint:disable-next-line:interface-name
        interface ITunesConnectAnalytics {
            /** Affiliate token used to create affiliate-coded links. */
            at?: string;
            /**
             * Campaign text that developers can optionally add to any link in order to
             * track sales from a specific marketing campaign.
             */
            ct?: string;
            /** iTune media types, including music, podcasts, audiobooks and so on. */
            mt?: string;
            /**
             * Provider token that enables analytics for Dynamic Links from within iTunes
             * Connect.
             */
            pt?: string;
        }
        interface ManagedShortLink {
            /** Creation timestamp of the short link. */
            creationTime?: string;
            /** Attributes that have been flagged about this short url. */
            flaggedAttribute?: string[];
            /** Full Dyamic Link info */
            info?: DynamicLinkInfo;
            /**
             * Short durable link url, for example, "https://sample.app.goo.gl/xyz123".
             *
             * Required.
             */
            link?: string;
            /**
             * Link name defined by the creator.
             *
             * Required.
             */
            linkName?: string;
            /** Visibility status of link. */
            visibility?: string;
        }
        interface NavigationInfo {
            /**
             * If this option is on, FDL click will be forced to redirect rather than
             * show an interstitial page.
             */
            enableForcedRedirect?: boolean;
        }
        interface SocialMetaTagInfo {
            /** A short description of the link. Optional. */
            socialDescription?: string;
            /** An image url string. Optional. */
            socialImageLink?: string;
            /** Title to be displayed. Optional. */
            socialTitle?: string;
        }
        interface Suffix {
            /** Only applies to Option.CUSTOM. */
            customSuffix?: string;
            /** Suffix option. */
            option?: string;
        }
        interface ManagedShortLinksResource {
            /**
             * Creates a managed short Dynamic Link given either a valid long Dynamic Link
             * or details such as Dynamic Link domain, Android and iOS app information.
             * The created short Dynamic Link will not expire.
             *
             * This differs from CreateShortDynamicLink in the following ways:
             * - The request will also contain a name for the link (non unique name
             * for the front end).
             * - The response must be authenticated with an auth token (generated with
             * the admin service account).
             * - The link will appear in the FDL list of links in the console front end.
             *
             * The Dynamic Link domain in the request must be owned by requester's
             * Firebase project.
             */
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
                resource: CreateManagedShortLinkRequest;
            }): Request<CreateManagedShortLinkResponse>;
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
            body: CreateManagedShortLinkRequest): Request<CreateManagedShortLinkResponse>;
        }
        interface ShortLinksResource {
            /**
             * Creates a short Dynamic Link given either a valid long Dynamic Link or
             * details such as Dynamic Link domain, Android and iOS app information.
             * The created short Dynamic Link will not expire.
             *
             * Repeated calls with the same long Dynamic Link or Dynamic Link information
             * will produce the same short Dynamic Link.
             *
             * The Dynamic Link domain in the request must be owned by requester's
             * Firebase project.
             */
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
                resource: CreateShortDynamicLinkRequest;
            }): Request<CreateShortDynamicLinkResponse>;
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
            body: CreateShortDynamicLinkRequest): Request<CreateShortDynamicLinkResponse>;
        }
        interface V1Resource {
            /**
             * Fetches analytics stats of a short Dynamic Link for a given
             * duration. Metrics include number of clicks, redirects, installs,
             * app first opens, and app reopens.
             */
            getLinkStats(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** The span of time requested in days. */
                durationDays?: string;
                /** Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz */
                dynamicLink: string;
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
                /** Google SDK version. Version takes the form "$major.$minor.$patch" */
                sdkVersion?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<DynamicLinkStats>;
            /** Get iOS strong/weak-match info for post-install attribution. */
            installAttribution(request: {
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
                resource: GetIosPostInstallAttributionRequest;
            }): Request<GetIosPostInstallAttributionResponse>;
            installAttribution(request: {
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
            body: GetIosPostInstallAttributionRequest): Request<GetIosPostInstallAttributionResponse>;
            /** Get iOS reopen attribution for app universal link open deeplinking. */
            reopenAttribution(request: {
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
                resource: GetIosReopenAttributionRequest;
            }): Request<GetIosReopenAttributionResponse>;
            reopenAttribution(request: {
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
            body: GetIosReopenAttributionRequest): Request<GetIosReopenAttributionResponse>;
        }

        const managedShortLinks: ManagedShortLinksResource;

        const shortLinks: ShortLinksResource;

        const v1: V1Resource;
    }
}
