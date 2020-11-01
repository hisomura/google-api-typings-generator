/* Type definitions for non-npm package Cloud Billing Budget API v1 1.0 */
// Project: https://cloud.google.com/billing/docs/how-to/budget-api-overview
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Google API Typings Generator <https://github.com/google-api-typings-generator>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://billingbudgets.googleapis.com/$discovery/rest?version=v1
// Revision: 20201026

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Cloud Billing Budget API v1 */
    function load(name: "billingbudgets", version: "v1"): PromiseLike<void>;
    function load(name: "billingbudgets", version: "v1", callback: () => any): void;

    namespace billingbudgets {
        interface GoogleCloudBillingBudgetsV1Budget {
            /** Required. Budgeted amount. */
            amount?: GoogleCloudBillingBudgetsV1BudgetAmount;
            /** Optional. Filters that define which resources are used to compute the actual spend against the budget. */
            budgetFilter?: GoogleCloudBillingBudgetsV1Filter;
            /** User data for display name in UI. The name must be less than or equal to 60 characters. */
            displayName?: string;
            /** Optional. Etag to validate that the object is unchanged for a read-modify-write operation. An empty etag will cause an update to overwrite other changes. */
            etag?: string;
            /** Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. */
            name?: string;
            /** Optional. Rules to apply to notifications sent based on budget spend and thresholds. */
            notificationsRule?: GoogleCloudBillingBudgetsV1NotificationsRule;
            /** Optional. Rules that trigger alerts (notifications of thresholds being crossed) when spend exceeds the specified percentages of the budget. */
            thresholdRules?: GoogleCloudBillingBudgetsV1ThresholdRule[];
        }
        interface GoogleCloudBillingBudgetsV1BudgetAmount {
            /** Use the last period's actual spend as the budget for the present period. */
            lastPeriodAmount?: any;
            /** A specified amount to use as the budget. `currency_code` is optional. If specified, it must match the currency of the billing account. The `currency_code` is provided on output. */
            specifiedAmount?: GoogleTypeMoney;
        }
        interface GoogleCloudBillingBudgetsV1Filter {
            /**
             * Optional. A list of credit types to be subtracted from gross cost to determine the spend for threshold calculations if and only if credit_types_treatment is
             * INCLUDE_SPECIFIED_CREDITS. If credit_types_treatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty. See credits.type on
             * https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#data-schema for a list of acceptable credit type values in this field.
             */
            creditTypes?: string[];
            /** Optional. If not set, default behavior is `INCLUDE_ALL_CREDITS`. */
            creditTypesTreatment?: string;
            /**
             * Optional. A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. Currently, multiple entries or multiple
             * values per entry are not allowed. If omitted, the report will include all labeled and unlabeled usage.
             */
            labels?: { [P in string]: any[] };
            /**
             * Optional. A set of projects of the form `projects/{project}`, specifying that usage from only this set of projects should be included in the budget. If omitted, the report will
             * include all usage for the billing account, regardless of which project the usage occurred on. Only zero or one project can be specified currently.
             */
            projects?: string[];
            /**
             * Optional. A set of services of the form `services/{service_id}`, specifying that usage from only this set of services should be included in the budget. If omitted, the report will
             * include usage for all the services. The service names are available through the Catalog API: https://cloud.google.com/billing/v1/how-tos/catalog-api.
             */
            services?: string[];
            /**
             * Optional. A set of subaccounts of the form `billingAccounts/{account_id}`, specifying that usage from only this set of subaccounts should be included in the budget. If a subaccount
             * is set to the name of the parent account, usage from the parent account will be included. If the field is omitted, the report will include usage from the parent account and all
             * subaccounts, if they exist.
             */
            subaccounts?: string[];
        }
        // tslint:disable-next-line:no-empty-interface
        interface GoogleCloudBillingBudgetsV1LastPeriodAmount {
        }
        interface GoogleCloudBillingBudgetsV1ListBudgetsResponse {
            /** List of the budgets owned by the requested billing account. */
            budgets?: GoogleCloudBillingBudgetsV1Budget[];
            /** If not empty, indicates that there may be more budgets that match the request; this value should be passed in a new `ListBudgetsRequest`. */
            nextPageToken?: string;
        }
        interface GoogleCloudBillingBudgetsV1NotificationsRule {
            /**
             * Optional. When set to true, disables default notifications sent when a threshold is exceeded. Default notifications are sent to those with Billing Account Administrator and Billing
             * Account User IAM roles for the target account.
             */
            disableDefaultIamRecipients?: boolean;
            /**
             * Optional. Targets to send notifications to when a threshold is exceeded. This is in addition to default recipients who have billing account IAM roles. The value is the full REST
             * resource name of a monitoring notification channel with the form `projects/{project_id}/notificationChannels/{channel_id}`. A maximum of 5 channels are allowed. See
             * https://cloud.google.com/billing/docs/how-to/budgets-notification-recipients for more details.
             */
            monitoringNotificationChannels?: string[];
            /**
             * Optional. The name of the Pub/Sub topic where budget related messages will be published, in the form `projects/{project_id}/topics/{topic_id}`. Updates are sent at regular intervals
             * to the topic. The topic needs to be created before the budget is created; see https://cloud.google.com/billing/docs/how-to/budgets#manage-notifications for more details. Caller is
             * expected to have `pubsub.topics.setIamPolicy` permission on the topic when it's set for a budget, otherwise, the API call will fail with PERMISSION_DENIED. See
             * https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications for more details on Pub/Sub roles and permissions.
             */
            pubsubTopic?: string;
            /**
             * Optional. The schema version of the notification sent to `pubsub_topic`. Only "1.0" is accepted. It represents the JSON schema as defined in
             * https://cloud.google.com/billing/docs/how-to/budgets-programmatic-notifications#notification_format
             */
            schemaVersion?: string;
        }
        interface GoogleCloudBillingBudgetsV1ThresholdRule {
            /** Optional. The type of basis used to determine if spend has passed the threshold. Behavior defaults to CURRENT_SPEND if not set. */
            spendBasis?: string;
            /** Required. Send an alert when this threshold is exceeded. This is a 1.0-based percentage, so 0.5 = 50%. Validation: non-negative number. */
            thresholdPercent?: number;
        }
        // tslint:disable-next-line:no-empty-interface
        interface GoogleProtobufEmpty {
        }
        interface GoogleTypeMoney {
            /** The three-letter currency code defined in ISO 4217. */
            currencyCode?: string;
            /**
             * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units`
             * is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and
             * `nanos`=-750,000,000.
             */
            nanos?: number;
            /** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
            units?: string;
        }
        interface BudgetsResource {
            /** Creates a new budget. See [Quotas and limits](https://cloud.google.com/billing/quotas) for more information on the limits of the number of budgets you can create. */
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
                /** Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId}`. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: GoogleCloudBillingBudgetsV1Budget;
            }): Request<GoogleCloudBillingBudgetsV1Budget>;
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
                /** Required. The name of the billing account to create the budget in. Values are of the form `billingAccounts/{billingAccountId}`. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: GoogleCloudBillingBudgetsV1Budget): Request<GoogleCloudBillingBudgetsV1Budget>;
            /** Deletes a budget. Returns successfully if already deleted. */
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
                /** Required. Name of the budget to delete. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. */
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
            }): Request<{}>;
            /**
             * Returns a budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you will not see these fields in
             * the return value, though they may have been set in the Cloud Console.
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
                /** Required. Name of budget to get. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. */
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
            }): Request<GoogleCloudBillingBudgetsV1Budget>;
            /**
             * Returns a list of budgets for a billing account. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. When reading from the API, you
             * will not see these fields in the return value, though they may have been set in the Cloud Console.
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
                /** Optional. The maximum number of budgets to return per page. The default and maximum value are 100. */
                pageSize?: number;
                /**
                 * Optional. The value returned by the last `ListBudgetsResponse` which indicates that this is a continuation of a prior `ListBudgets` call, and that the system should return the
                 * next page of data.
                 */
                pageToken?: string;
                /** Required. Name of billing account to list budgets under. Values are of the form `billingAccounts/{billingAccountId}`. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<GoogleCloudBillingBudgetsV1ListBudgetsResponse>;
            /**
             * Updates a budget and returns the updated budget. WARNING: There are some fields exposed on the Google Cloud Console that aren't available on this API. Budget fields that are not
             * exposed in this API will not be changed by this method.
             */
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
                /** Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Optional. Indicates which fields in the provided budget to update. Read-only fields (such as `name`) cannot be changed. If this is not provided, then only fields with
                 * non-default values from the request are updated. See https://developers.google.com/protocol-buffers/docs/proto3#default for more details about default values.
                 */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: GoogleCloudBillingBudgetsV1Budget;
            }): Request<GoogleCloudBillingBudgetsV1Budget>;
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
                /** Output only. Resource name of the budget. The resource name implies the scope of a budget. Values are of the form `billingAccounts/{billingAccountId}/budgets/{budgetId}`. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * Optional. Indicates which fields in the provided budget to update. Read-only fields (such as `name`) cannot be changed. If this is not provided, then only fields with
                 * non-default values from the request are updated. See https://developers.google.com/protocol-buffers/docs/proto3#default for more details about default values.
                 */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: GoogleCloudBillingBudgetsV1Budget): Request<GoogleCloudBillingBudgetsV1Budget>;
        }
        interface BillingAccountsResource {
            budgets: BudgetsResource;
        }

        const billingAccounts: BillingAccountsResource;
    }
}
