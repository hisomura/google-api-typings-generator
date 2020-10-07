// Type definitions for non-npm package Local Services API v1 1.0
// Project: https://ads.google.com/local-services-ads/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://localservices.googleapis.com/$discovery/rest?version=v1
// Revision: 20201006

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Local Services API v1 */
    function load(name: "localservices", version: "v1"): PromiseLike<void>;
    function load(name: "localservices", version: "v1", callback: () => any): void;

    namespace localservices {
        interface GoogleAdsHomeservicesLocalservicesV1AccountReport {
            /** Unique identifier of the GLS account. */
            accountId?: string;
            /** Average review rating score from 1-5 stars. */
            averageFiveStarRating?: number;
            /** Average weekly budget in the currency code of the account. */
            averageWeeklyBudget?: number;
            /** Business name of the account. */
            businessName?: string;
            /** Currency code of the account. */
            currencyCode?: string;
            /** Number of charged leads the account received in current specified period. */
            currentPeriodChargedLeads?: string;
            /** Number of connected phone calls (duration over 30s) in current specified period. */
            currentPeriodConnectedPhoneCalls?: string;
            /** Number of phone calls in current specified period, including both connected and unconnected calls. */
            currentPeriodPhoneCalls?: string;
            /** Total cost of the account in current specified period in the account's specified currency. */
            currentPeriodTotalCost?: number;
            /**
             * Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing
             * by the total number of calls received.
             */
            phoneLeadResponsiveness?: number;
            /** Number of charged leads the account received in previous specified period. */
            previousPeriodChargedLeads?: string;
            /** Number of connected phone calls (duration over 30s) in previous specified period. */
            previousPeriodConnectedPhoneCalls?: string;
            /** Number of phone calls in previous specified period, including both connected and unconnected calls. */
            previousPeriodPhoneCalls?: string;
            /** Total cost of the account in previous specified period in the account's specified currency. */
            previousPeriodTotalCost?: number;
            /** Total number of reviews the account has up to current date. */
            totalReview?: number;
        }
        interface GoogleAdsHomeservicesLocalservicesV1AggregatorInfo {
            /** Provider id (listed in aggregator system) which maps to a account id in GLS system. */
            aggregatorProviderId?: string;
        }
        interface GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport {
            /** Identifies account that received the lead. */
            accountId?: string;
            /** Aggregator specific information related to the lead. */
            aggregatorInfo?: GoogleAdsHomeservicesLocalservicesV1AggregatorInfo;
            /** Business name associated to the account. */
            businessName?: string;
            /** Whether the lead has been charged. */
            chargeStatus?: string;
            /** Currency code. */
            currencyCode?: string;
            /** Dispute status related to the lead. */
            disputeStatus?: string;
            /** Location of the associated account's home city. */
            geo?: string;
            /** Lead category (e.g. hvac, plumber) */
            leadCategory?: string;
            /** Timestamp of when the lead was created. */
            leadCreationTimestamp?: string;
            /** Unique identifier of a Detailed Lead Report. */
            leadId?: string;
            /** Price of the lead (available only after it has been charged). */
            leadPrice?: number;
            /** Lead type. */
            leadType?: string;
            /** More information associated to only message leads. */
            messageLead?: GoogleAdsHomeservicesLocalservicesV1MessageLead;
            /** More information associated to only phone leads. */
            phoneLead?: GoogleAdsHomeservicesLocalservicesV1PhoneLead;
            /** Timezone of the particular provider associated to a lead. */
            timezone?: GoogleTypeTimeZone;
        }
        interface GoogleAdsHomeservicesLocalservicesV1MessageLead {
            /** Consumer phone number associated with the message lead. */
            consumerPhoneNumber?: string;
            /** Name of the customer who created the lead. */
            customerName?: string;
            /** The job type of the specified lead. */
            jobType?: string;
            /** The postal code of the customer who created the lead. */
            postalCode?: string;
        }
        interface GoogleAdsHomeservicesLocalservicesV1PhoneLead {
            /** Timestamp of the phone call which resulted in a charged phone lead. */
            chargedCallTimestamp?: string;
            /** Duration of the charged phone call in seconds. */
            chargedConnectedCallDurationSeconds?: string;
            /** Consumer phone number associated with the phone lead. */
            consumerPhoneNumber?: string;
        }
        interface GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse {
            /** List of account reports which maps 1:1 to a particular linked GLS account. */
            accountReports?: GoogleAdsHomeservicesLocalservicesV1AccountReport[];
            /** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
            nextPageToken?: string;
        }
        interface GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse {
            /** List of detailed lead reports uniquely identified by external lead id. */
            detailedLeadReports?: GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport[];
            /** Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set. */
            nextPageToken?: string;
        }
        interface GoogleTypeTimeZone {
            /** IANA Time Zone Database time zone, e.g. "America/New_York". */
            id?: string;
            /** Optional. IANA Time Zone Database version number, e.g. "2019a". */
            version?: string;
        }
        interface AccountReportsResource {
            /**
             * Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows
             * them read permissions on their linked accounts.
             */
            search(request?: {
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
                /** The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. */
                pageSize?: number;
                /** The `next_page_token` value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked
                 * accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| |
                 * manager_customer_id:123 | Get Account Report for Manager with id 123. | Required.
                 */
                query?: string;
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
            }): Request<GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse>;
        }
        interface DetailedLeadReportsResource {
            /**
             * Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential
             * that allows them read permissions on their linked accounts.
             */
            search(request?: {
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
                /** The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. */
                pageSize?: number;
                /** The `next_page_token` value returned from a previous request to SearchDetailedLeadReports that indicates where listing should continue. Optional. */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /**
                 * A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked
                 * accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| |
                 * manager_customer_id:123 | Get Detailed Lead Report for Manager with id | | | 123. | Required.
                 */
                query?: string;
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
            }): Request<GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse>;
        }

        const accountReports: AccountReportsResource;

        const detailedLeadReports: DetailedLeadReportsResource;
    }
}
