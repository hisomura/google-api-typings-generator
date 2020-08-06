// Type definitions for non-npm package Cloud OS Login API v1 1.0
// Project: https://cloud.google.com/compute/docs/oslogin/
// Definitions by: Maxim Mazurok <https://github.com/Maxim-Mazurok>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
// Generated from: https://oslogin.googleapis.com/$discovery/rest?version=v1
// Revision: 20200801

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Cloud OS Login API v1 */
    function load(name: "oslogin", version: "v1"): PromiseLike<void>;
    function load(name: "oslogin", version: "v1", callback: () => any): void;

    namespace oslogin {
        // tslint:disable-next-line:no-empty-interface
        interface Empty {
        }
        // tslint:disable-next-line:interface-name
        interface ImportSshPublicKeyResponse {
            /** The login profile information for the user. */
            loginProfile?: LoginProfile;
        }
        interface LoginProfile {
            /** Required. A unique user ID. */
            name?: string;
            /** The list of POSIX accounts associated with the user. */
            posixAccounts?: PosixAccount[];
            /** A map from SSH public key fingerprint to the associated key object. */
            sshPublicKeys?: { [P in string]: SshPublicKey };
        }
        interface PosixAccount {
            /** Output only. A POSIX account identifier. */
            accountId?: string;
            /** The GECOS (user information) entry for this account. */
            gecos?: string;
            /** The default group ID. */
            gid?: string;
            /** The path to the home directory for this account. */
            homeDirectory?: string;
            /** Output only. The canonical resource name. */
            name?: string;
            /** The operating system type where this account applies. */
            operatingSystemType?: string;
            /** Only one POSIX account can be marked as primary. */
            primary?: boolean;
            /** The path to the logic shell for this account. */
            shell?: string;
            /** System identifier for which account the username or uid applies to. By default, the empty value is used. */
            systemId?: string;
            /** The user ID. */
            uid?: string;
            /** The username of the POSIX account. */
            username?: string;
        }
        interface SshPublicKey {
            /** An expiration time in microseconds since epoch. */
            expirationTimeUsec?: string;
            /** Output only. The SHA-256 fingerprint of the SSH public key. */
            fingerprint?: string;
            /** Public key text in SSH format, defined by RFC4253 section 6.6. */
            key?: string;
            /** Output only. The canonical resource name. */
            name?: string;
        }
        interface ProjectsResource {
            /** Deletes a POSIX account. */
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
                /**
                 * Required. A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the
                 * POSIX account is in format `users/{user}/projects/{project}`.
                 */
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
        }
        interface SshPublicKeysResource {
            /** Deletes an SSH public key. */
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
                /**
                 * Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in
                 * format `users/{user}/sshPublicKeys/{fingerprint}`.
                 */
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
            /** Retrieves an SSH public key. */
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
                /**
                 * Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is
                 * in format `users/{user}/sshPublicKeys/{fingerprint}`.
                 */
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
            }): Request<SshPublicKey>;
            /** Updates an SSH public key and returns the profile information. This method supports patch semantics. */
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
                /**
                 * Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in
                 * format `users/{user}/sshPublicKeys/{fingerprint}`.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Mask to control which fields get updated. Updates all if not present. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: SshPublicKey;
            }): Request<SshPublicKey>;
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
                /**
                 * Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in
                 * format `users/{user}/sshPublicKeys/{fingerprint}`.
                 */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Mask to control which fields get updated. Updates all if not present. */
                updateMask?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: SshPublicKey): Request<SshPublicKey>;
        }
        interface UsersResource {
            /** Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine. */
            getLoginProfile(request?: {
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
                /** Required. The unique ID for the user in format `users/{user}`. */
                name: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project ID of the Google Cloud Platform project. */
                projectId?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** A system ID for filtering the results of the request. */
                systemId?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            }): Request<LoginProfile>;
            /**
             * Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the
             * login profile.
             */
            importSshPublicKey(request: {
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
                /** Required. The unique ID for the user in format `users/{user}`. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project ID of the Google Cloud Platform project. */
                projectId?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Request body */
                resource: SshPublicKey;
            }): Request<ImportSshPublicKeyResponse>;
            importSshPublicKey(request: {
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
                /** Required. The unique ID for the user in format `users/{user}`. */
                parent: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** The project ID of the Google Cloud Platform project. */
                projectId?: string;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
            },
            body: SshPublicKey): Request<ImportSshPublicKeyResponse>;
            projects: ProjectsResource;
            sshPublicKeys: SshPublicKeysResource;
        }

        const users: UsersResource;
    }
}
