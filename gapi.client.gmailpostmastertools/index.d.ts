// Type definitions for non-npm package Gmail Postmaster Tools API v1beta1 1.0
// Project: https://developers.google.com/gmail/postmaster
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://gmailpostmastertools.googleapis.com/$discovery/rest?version=v1beta1
// Revision: 20200929

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Gmail Postmaster Tools API v1beta1 */
    function load(name: "gmailpostmastertools", version: "v1beta1"): PromiseLike<void>;
    function load(name: "gmailpostmastertools", version: "v1beta1", callback: () => any): void;

    namespace gmailpostmastertools {
        interface DeliveryError {
            /** The class of delivery error. */
            errorClass?: string;
            /** The ratio of messages where the error occurred vs all authenticated traffic. */
            errorRatio?: number;
            /** The type of delivery error. */
            errorType?: string;
        }
        interface Domain {
            /** Timestamp when the user registered this domain. Assigned by the server. */
            createTime?: string;
            /** The resource name of the Domain. Domain names have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com). */
            name?: string;
            /** User’s permission for this domain. Assigned by the server. */
            permission?: string;
        }
        interface FeedbackLoop {
            /** Feedback loop identifier that uniquely identifies individual campaigns. */
            id?: string;
            /** The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier. */
            spamRatio?: number;
        }
        // tslint:disable-next-line:interface-name
        interface IpReputation {
            /** Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). */
            numIps?: string;
            /** The reputation category this IP reputation represents. */
            reputation?: string;
            /** A sample of IPs in this reputation category. */
            sampleIps?: string[];
        }
        interface ListDomainsResponse {
            /** The list of domains. */
            domains?: Domain[];
            /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
            nextPageToken?: string;
        }
        interface ListTrafficStatsResponse {
            /** Token to retrieve the next page of results, or empty if there are no more results in the list. */
            nextPageToken?: string;
            /** The list of TrafficStats. */
            trafficStats?: TrafficStats[];
        }
        interface TrafficStats {
            /** Delivery errors for the domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). */
            deliveryErrors?: DeliveryError[];
            /** The ratio of mail that successfully authenticated with DKIM vs. all mail that attempted to authenticate with [DKIM](http://www.dkim.org/). Spoofed mail is excluded. */
            dkimSuccessRatio?: number;
            /**
             * The ratio of mail that passed [DMARC](https://dmarc.org/) alignment checks vs all mail received from the domain that successfully authenticated with either of
             * [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
             */
            dmarcSuccessRatio?: number;
            /** Reputation of the domain. */
            domainReputation?: string;
            /**
             * The ratio of incoming mail (to Gmail), that passed secure transport (TLS) vs all mail received from that domain. This metric only pertains to traffic that passed
             * [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).
             */
            inboundEncryptionRatio?: number;
            /**
             * Reputation information pertaining to the IP addresses of the email servers for the domain. There is exactly one entry for each reputation category except
             * REPUTATION_CATEGORY_UNSPECIFIED.
             */
            ipReputations?: IpReputation[];
            /**
             * The resource name of the traffic statistics. Traffic statistic names have the form `domains/{domain}/trafficStats/{date}`, where domain_name is the fully qualified domain name
             * (i.e., mymail.mydomain.com) of the domain this traffic statistics pertains to and date is the date in yyyymmdd format that these statistics corresponds to. For example:
             * domains/mymail.mydomain.com/trafficStats/20160807
             */
            name?: string;
            /** The ratio of outgoing mail (from Gmail) that was accepted over secure transport (TLS). */
            outboundEncryptionRatio?: number;
            /**
             * Spammy [Feedback loop identifiers] (https://support.google.com/mail/answer/6254652) with their individual spam rates. This metric only pertains to traffic that is authenticated by
             * [DKIM](http://www.dkim.org/).
             */
            spammyFeedbackLoops?: FeedbackLoop[];
            /** The ratio of mail that successfully authenticated with SPF vs. all mail that attempted to authenticate with [SPF](http://www.openspf.org/). Spoofed mail is excluded. */
            spfSuccessRatio?: number;
            /** The ratio of user-report spam vs. email that was sent to the inbox. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/). */
            userReportedSpamRatio?: number;
        }
        interface TrafficStatsResource {
            /** Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain. */
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
                /** The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807. */
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
            }): Request<TrafficStats>;
            /** List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain. */
            list(request?: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** JSONP */
                callback?: string;
                /** Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant. */
                "endDate.day"?: number;
                /** Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day. */
                "endDate.month"?: number;
                /** Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year. */
                "endDate.year"?: number;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default. */
                pageSize?: number;
                /**
                 * The next_page_token value returned from a previous List request, if any. This is the value of ListTrafficStatsResponse.next_page_token returned from the previous call to
                 * `ListTrafficStats` method.
                 */
                pageToken?: string;
                /**
                 * The resource name of the domain whose traffic statistics we'd like to list. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain
                 * name.
                 */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a year by itself or a year and month where the day is not significant. */
                "startDate.day"?: number;
                /** Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day. */
                "startDate.month"?: number;
                /** Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year. */
                "startDate.year"?: number;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<ListTrafficStatsResponse>;
        }
        interface DomainsResource {
            /** Gets a specific domain registered by the client. Returns NOT_FOUND if the domain does not exist. */
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
                /** The resource name of the domain. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name. */
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
            }): Request<Domain>;
            /**
             * Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be
             * added to the end of this list.
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
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default. */
                pageSize?: number;
                /**
                 * The next_page_token value returned from a previous List request, if any. This is the value of ListDomainsResponse.next_page_token returned from the previous call to
                 * `ListDomains` method.
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
            }): Request<ListDomainsResponse>;
            trafficStats: TrafficStatsResource;
        }

        const domains: DomainsResource;
    }
}
