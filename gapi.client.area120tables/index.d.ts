/* Type definitions for non-npm package Area120 Tables API v1alpha1 1.0 */
// Project: https://tables.area120.google.com
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
//                 Nick Amoscato <https://github.com/namoscato>
//                 Declan Vong <https://github.com/declanvong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://area120tables.googleapis.com/$discovery/rest?version=v1alpha1
// Revision: 20201118

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Area120 Tables API v1alpha1 */
    function load(name: "area120tables", version: "v1alpha1"): PromiseLike<void>;
    function load(name: "area120tables", version: "v1alpha1", callback: () => any): void;

    namespace area120tables {
        interface BatchCreateRowsRequest {
            /** Required. The request message specifying the rows to create. A maximum of 500 rows can be created in a single batch. */
            requests?: CreateRowRequest[];
        }
        interface BatchCreateRowsResponse {
            /** The created rows. */
            rows?: Row[];
        }
        interface BatchUpdateRowsRequest {
            /** Required. The request messages specifying the rows to update. A maximum of 500 rows can be modified in a single batch. */
            requests?: UpdateRowRequest[];
        }
        interface BatchUpdateRowsResponse {
            /** The updated rows. */
            rows?: Row[];
        }
        interface ColumnDescription {
            /**
             * Data type of the column Supported types are auto_id, boolean, boolean_list, creator, create_timestamp, date, dropdown, location, integer, integer_list, number, number_list, person,
             * person_list, tags, check_list, text, text_list, update_timestamp, updater, relationship, file_attachment_list. These types directly map to the column types supported on Tables
             * website.
             */
            dataType?: string;
            /** Internal id for a column. */
            id?: string;
            /**
             * Optional. Range of labeled values for the column. Some columns like tags and drop-downs limit the values to a set of possible values. We return the range of values in such cases to
             * help clients implement better user data validation.
             */
            labels?: LabeledItem[];
            /**
             * Optional. Indicates that this is a lookup column whose value is derived from the relationship column specified in the details. Lookup columns can not be updated directly. To change
             * the value you must update the associated relationship column.
             */
            lookupDetails?: LookupDetails;
            /** column name */
            name?: string;
            /** Optional. Additional details about a relationship column. Specified when data_type is relationship. */
            relationshipDetails?: RelationshipDetails;
        }
        interface CreateRowRequest {
            /** Required. The parent table where this row will be created. Format: tables/{table} */
            parent?: string;
            /** Required. The row to create. */
            row?: Row;
            /** Optional. Column key to use for values in the row. Defaults to user entered name. */
            view?: string;
        }
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        interface LabeledItem {
            /** Internal id associated with the item. */
            id?: string;
            /** Display string as entered by user. */
            name?: string;
        }
        interface ListRowsResponse {
            /** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
            nextPageToken?: string;
            /** The rows from the specified table. */
            rows?: Row[];
        }
        interface ListTablesResponse {
            /** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
            nextPageToken?: string;
            /** The list of tables. */
            tables?: Table[];
        }
        interface ListWorkspacesResponse {
            /** A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages. */
            nextPageToken?: string;
            /** The list of workspaces. */
            workspaces?: Workspace[];
        }
        interface LookupDetails {
            /** The name of the relationship column associated with the lookup. */
            relationshipColumn?: string;
            /** The id of the relationship column. */
            relationshipColumnId?: string;
        }
        interface RelationshipDetails {
            /** The name of the table this relationship is linked to. */
            linkedTable?: string;
        }
        interface Row {
            /** The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row. */
            name?: string;
            /** The values of the row. This is a map of column key to value. Key is user entered name(default) or the internal column id based on the view in the request. */
            values?: { [P in string]: any };
        }
        interface Table {
            /** List of columns in this table. Order of columns matches the display order. */
            columns?: ColumnDescription[];
            /** The human readable title of the table. */
            displayName?: string;
            /** The resource name of the table. Table names have the form `tables/{table}`. */
            name?: string;
        }
        interface UpdateRowRequest {
            /** Required. The row to update. */
            row?: Row;
            /** The list of fields to update. */
            updateMask?: string;
            /** Optional. Column key to use for values in the row. Defaults to user entered name. */
            view?: string;
        }
        interface Workspace {
            /** The human readable title of the workspace. */
            displayName?: string;
            /** The resource name of the workspace. Workspace names have the form `workspaces/{workspace}`. */
            name?: string;
            /** The list of tables in the workspace. */
            tables?: Table[];
        }
        interface RowsResource {
            /** Creates multiple rows. */
            batchCreate(request: {
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
                /** Required. The parent table where the rows will be created. Format: tables/{table} */
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
                resource: BatchCreateRowsRequest;
            }): Request<BatchCreateRowsResponse>;
            batchCreate(request: {
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
                /** Required. The parent table where the rows will be created. Format: tables/{table} */
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
            body: BatchCreateRowsRequest): Request<BatchCreateRowsResponse>;
            /** Updates multiple rows. */
            batchUpdate(request: {
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
                /** Required. The parent table shared by all rows being updated. Format: tables/{table} */
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
                resource: BatchUpdateRowsRequest;
            }): Request<BatchUpdateRowsResponse>;
            batchUpdate(request: {
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
                /** Required. The parent table shared by all rows being updated. Format: tables/{table} */
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
            body: BatchUpdateRowsRequest): Request<BatchUpdateRowsResponse>;
            /** Creates a row. */
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
                /** Required. The parent table where this row will be created. Format: tables/{table} */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Optional. Column key to use for values in the row. Defaults to user entered name. */
                view?: string;
                /** Request body */
                resource: Row;
            }): Request<Row>;
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
                /** Required. The parent table where this row will be created. Format: tables/{table} */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Optional. Column key to use for values in the row. Defaults to user entered name. */
                view?: string;
            },
            body: Row): Request<Row>;
            /** Deletes a row. */
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
                /** Required. The name of the row to delete. Format: tables/{table}/rows/{row} */
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
            /** Gets a row. Returns NOT_FOUND if the row does not exist in the table. */
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
                /** Required. The name of the row to retrieve. Format: tables/{table}/rows/{row} */
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
                /** Optional. Column key to use for values in the row. Defaults to user entered name. */
                view?: string;
            }): Request<Row>;
            /** Lists rows in a table. Returns NOT_FOUND if the table does not exist. */
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
                /**
                 * The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000
                 * are coerced to 1,000.
                 */
                pageSize?: number;
                /**
                 * A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the
                 * call that provided the page token.
                 */
                pageToken?: string;
                /** Required. The parent table. Format: tables/{table} */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Optional. Column key to use for values in the row. Defaults to user entered name. */
                view?: string;
            }): Request<ListRowsResponse>;
            /** Updates a row. */
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
                /** The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** The list of fields to update. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Optional. Column key to use for values in the row. Defaults to user entered name. */
                view?: string;
                /** Request body */
                resource: Row;
            }): Request<Row>;
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
                /** The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** The list of fields to update. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Optional. Column key to use for values in the row. Defaults to user entered name. */
                view?: string;
            },
            body: Row): Request<Row>;
        }
        interface TablesResource {
            /** Gets a table. Returns NOT_FOUND if the table does not exist. */
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
                /** Required. The name of the table to retrieve. Format: tables/{table} */
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
            }): Request<Table>;
            /** Lists tables for the user. */
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
                /**
                 * The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 20 tables are returned. The maximum value is 100; values above 100
                 * are coerced to 100.
                 */
                pageSize?: number;
                /**
                 * A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match
                 * the call that provided the page token.
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
            }): Request<ListTablesResponse>;
            rows: RowsResource;
        }
        interface WorkspacesResource {
            /** Gets a workspace. Returns NOT_FOUND if the workspace does not exist. */
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
                /** Required. The name of the workspace to retrieve. Format: workspaces/{workspace} */
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
            }): Request<Workspace>;
            /** Lists workspaces for the user. */
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
                /**
                 * The maximum number of workspaces to return. The service may return fewer than this value. If unspecified, at most 10 workspaces are returned. The maximum value is 25; values
                 * above 25 are coerced to 25.
                 */
                pageSize?: number;
                /**
                 * A page token, received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces`
                 * must match the call that provided the page token.
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
            }): Request<ListWorkspacesResponse>;
        }

        const tables: TablesResource;

        const workspaces: WorkspacesResource;
    }
}
