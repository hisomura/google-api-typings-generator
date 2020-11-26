/* This is stub file for gapi.client.androidenterprise definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201125

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('androidenterprise', 'v1', () => {
        /** now we can use gapi.client.androidenterprise */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Manage corporate Android devices */
            'https://www.googleapis.com/auth/androidenterprise',
        ];
        const immediate = false;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle successful authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
    });

    async function run() {
        /**
         * Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you
         * exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
         */
        await gapi.client.androidenterprise.devices.forceReportUpload({
            deviceId: "Test string",
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /** Retrieves the details of a device. */
        await gapi.client.androidenterprise.devices.get({
            deviceId: "Test string",
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /**
         * Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google
         * Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
         */
        await gapi.client.androidenterprise.devices.getState({
            deviceId: "Test string",
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /** Retrieves the IDs of all of a user's devices. */
        await gapi.client.androidenterprise.devices.list({
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /**
         * Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin
         * Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
         */
        await gapi.client.androidenterprise.devices.setState({
            deviceId: "Test string",
            enterpriseId: "Test string",
            userId: "Test string",
        }, {
            accountState: "Test string",
        });
        /**
         * Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed
         * configuration for the Google Play package. See restrict accounts in Google Play.
         */
        await gapi.client.androidenterprise.devices.update({
            deviceId: "Test string",
            enterpriseId: "Test string",
            updateMask: "Test string",
            userId: "Test string",
        }, {
            androidId: "Test string",
            managementType: "Test string",
            policy: {
                autoUpdatePolicy: "Test string",
                deviceReportPolicy: "Test string",
                maintenanceWindow: {
                    durationMs: "Test string",
                    startTimeAfterMidnightMs: "Test string",
                },
                productAvailabilityPolicy: "Test string",
                productPolicy: [
                    {
                        autoInstallPolicy: {
                            autoInstallConstraint: [
                                {
                                    chargingStateConstraint: "Test string",
                                    deviceIdleStateConstraint: "Test string",
                                    networkTypeConstraint: "Test string",
                                }                            ],
                            autoInstallMode: "Test string",
                            autoInstallPriority: 42,
                            minimumVersionCode: 42,
                        },
                        autoUpdateMode: "Test string",
                        managedConfiguration: {
                            configurationVariables: {
                                mcmId: "Test string",
                                variableSet: [
                                    {
                                        placeholder: "Test string",
                                        userValue: "Test string",
                                    }                                ],
                            },
                            kind: "Test string",
                            managedProperty: [
                                {
                                    key: "Test string",
                                    valueBool: true,
                                    valueBundle: {
                                        managedProperty: undefined,
                                    },
                                    valueBundleArray: [
                                        {
                                            managedProperty: undefined,
                                        }                                    ],
                                    valueInteger: 42,
                                    valueString: "Test string",
                                    valueStringArray: [
                                        "Test string"                                    ],
                                }                            ],
                            productId: "Test string",
                        },
                        productId: "Test string",
                        trackIds: [
                            "Test string"                        ],
                        tracks: [
                            "Test string"                        ],
                    }                ],
            },
            report: {
                appState: [
                    {
                        keyedAppState: [
                            {
                                data: "Test string",
                                key: "Test string",
                                message: "Test string",
                                severity: "Test string",
                                stateTimestampMillis: "Test string",
                            }                        ],
                        packageName: "Test string",
                    }                ],
                lastUpdatedTimestampMillis: "Test string",
            },
        });
        /** Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications. */
        await gapi.client.androidenterprise.enterprises.acknowledgeNotificationSet({
            notificationSetId: "Test string",
        });
        /** Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token. */
        await gapi.client.androidenterprise.enterprises.completeSignup({
            completionToken: "Test string",
            enterpriseToken: "Test string",
        });
        /**
         * Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one
         * UI session. See the javascript API documentation for further information.
         */
        await gapi.client.androidenterprise.enterprises.createWebToken({
            enterpriseId: "Test string",
        }, {
            managedConfigurations: {
                enabled: true,
            },
            parent: "Test string",
            permission: [
                "Test string"            ],
            playSearch: {
                approveApps: true,
                enabled: true,
            },
            privateApps: {
                enabled: true,
            },
            storeBuilder: {
                enabled: true,
            },
            webApps: {
                enabled: true,
            },
        });
        /** Enrolls an enterprise with the calling EMM. */
        await gapi.client.androidenterprise.enterprises.enroll({
            token: "Test string",
        }, {
            administrator: [
                {
                    email: "Test string",
                }            ],
            id: "Test string",
            name: "Test string",
            primaryDomain: "Test string",
        });
        /** Generates a sign-up URL. */
        await gapi.client.androidenterprise.enterprises.generateSignupUrl({
            callbackUrl: "Test string",
        });
        /** Retrieves the name and domain of an enterprise. */
        await gapi.client.androidenterprise.enterprises.get({
            enterpriseId: "Test string",
        });
        /**
         * Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will
         * be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or
         * Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials,
         * and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource.
         */
        await gapi.client.androidenterprise.enterprises.getServiceAccount({
            enterpriseId: "Test string",
            keyType: "Test string",
        });
        /** Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage. */
        await gapi.client.androidenterprise.enterprises.getStoreLayout({
            enterpriseId: "Test string",
        });
        /**
         * Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via
         * the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
         */
        await gapi.client.androidenterprise.enterprises.list({
            domain: "Test string",
        });
        /**
         * Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are
         * pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications
         * that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will
         * ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the
         * pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may
         * return more notifications once they become available.
         */
        await gapi.client.androidenterprise.enterprises.pullNotificationSet({
            requestMode: "Test string",
        });
        /** Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise. */
        await gapi.client.androidenterprise.enterprises.sendTestPushNotification({
            enterpriseId: "Test string",
        });
        /** Sets the account that will be used to authenticate to the API as the enterprise. */
        await gapi.client.androidenterprise.enterprises.setAccount({
            enterpriseId: "Test string",
        }, {
            accountEmail: "Test string",
        });
        /**
         * Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin,
         * and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a
         * custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
         */
        await gapi.client.androidenterprise.enterprises.setStoreLayout({
            enterpriseId: "Test string",
        }, {
            homepageId: "Test string",
            storeLayoutType: "Test string",
        });
        /** Unenrolls an enterprise from the calling EMM. */
        await gapi.client.androidenterprise.enterprises.unenroll({
            enterpriseId: "Test string",
        });
        /** Removes an entitlement to an app for a user. */
        await gapi.client.androidenterprise.entitlements.delete({
            enterpriseId: "Test string",
            entitlementId: "Test string",
            userId: "Test string",
        });
        /** Retrieves details of an entitlement. */
        await gapi.client.androidenterprise.entitlements.get({
            enterpriseId: "Test string",
            entitlementId: "Test string",
            userId: "Test string",
        });
        /** Lists all entitlements for the specified user. Only the ID is set. */
        await gapi.client.androidenterprise.entitlements.list({
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /** Adds or updates an entitlement to an app for a user. */
        await gapi.client.androidenterprise.entitlements.update({
            enterpriseId: "Test string",
            entitlementId: "Test string",
            install: true,
            userId: "Test string",
        }, {
            productId: "Test string",
            reason: "Test string",
        });
        /** Retrieves details of an enterprise's group license for a product. */
        await gapi.client.androidenterprise.grouplicenses.get({
            enterpriseId: "Test string",
            groupLicenseId: "Test string",
        });
        /** Retrieves IDs of all products for which the enterprise has a group license. */
        await gapi.client.androidenterprise.grouplicenses.list({
            enterpriseId: "Test string",
        });
        /** Retrieves the IDs of the users who have been granted entitlements under the license. */
        await gapi.client.androidenterprise.grouplicenseusers.list({
            enterpriseId: "Test string",
            groupLicenseId: "Test string",
        });
        /** Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed. */
        await gapi.client.androidenterprise.installs.delete({
            deviceId: "Test string",
            enterpriseId: "Test string",
            installId: "Test string",
            userId: "Test string",
        });
        /** Retrieves details of an installation of an app on a device. */
        await gapi.client.androidenterprise.installs.get({
            deviceId: "Test string",
            enterpriseId: "Test string",
            installId: "Test string",
            userId: "Test string",
        });
        /** Retrieves the details of all apps installed on the specified device. */
        await gapi.client.androidenterprise.installs.list({
            deviceId: "Test string",
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /** Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary. */
        await gapi.client.androidenterprise.installs.update({
            deviceId: "Test string",
            enterpriseId: "Test string",
            installId: "Test string",
            userId: "Test string",
        }, {
            installState: "Test string",
            productId: "Test string",
            versionCode: 42,
        });
        /** Removes a per-device managed configuration for an app for the specified device. */
        await gapi.client.androidenterprise.managedconfigurationsfordevice.delete({
            deviceId: "Test string",
            enterpriseId: "Test string",
            managedConfigurationForDeviceId: "Test string",
            userId: "Test string",
        });
        /** Retrieves details of a per-device managed configuration. */
        await gapi.client.androidenterprise.managedconfigurationsfordevice.get({
            deviceId: "Test string",
            enterpriseId: "Test string",
            managedConfigurationForDeviceId: "Test string",
            userId: "Test string",
        });
        /** Lists all the per-device managed configurations for the specified device. Only the ID is set. */
        await gapi.client.androidenterprise.managedconfigurationsfordevice.list({
            deviceId: "Test string",
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /** Adds or updates a per-device managed configuration for an app for the specified device. */
        await gapi.client.androidenterprise.managedconfigurationsfordevice.update({
            deviceId: "Test string",
            enterpriseId: "Test string",
            managedConfigurationForDeviceId: "Test string",
            userId: "Test string",
        }, {
            configurationVariables: {
                mcmId: "Test string",
                variableSet: [
                    {
                        placeholder: "Test string",
                        userValue: "Test string",
                    }                ],
            },
            kind: "Test string",
            managedProperty: [
                {
                    key: "Test string",
                    valueBool: true,
                    valueBundle: {
                        managedProperty: undefined,
                    },
                    valueBundleArray: [
                        {
                            managedProperty: undefined,
                        }                    ],
                    valueInteger: 42,
                    valueString: "Test string",
                    valueStringArray: [
                        "Test string"                    ],
                }            ],
            productId: "Test string",
        });
        /** Removes a per-user managed configuration for an app for the specified user. */
        await gapi.client.androidenterprise.managedconfigurationsforuser.delete({
            enterpriseId: "Test string",
            managedConfigurationForUserId: "Test string",
            userId: "Test string",
        });
        /** Retrieves details of a per-user managed configuration for an app for the specified user. */
        await gapi.client.androidenterprise.managedconfigurationsforuser.get({
            enterpriseId: "Test string",
            managedConfigurationForUserId: "Test string",
            userId: "Test string",
        });
        /** Lists all the per-user managed configurations for the specified user. Only the ID is set. */
        await gapi.client.androidenterprise.managedconfigurationsforuser.list({
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /**
         * Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by
         * specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.
         */
        await gapi.client.androidenterprise.managedconfigurationsforuser.update({
            enterpriseId: "Test string",
            managedConfigurationForUserId: "Test string",
            userId: "Test string",
        }, {
            configurationVariables: {
                mcmId: "Test string",
                variableSet: [
                    {
                        placeholder: "Test string",
                        userValue: "Test string",
                    }                ],
            },
            kind: "Test string",
            managedProperty: [
                {
                    key: "Test string",
                    valueBool: true,
                    valueBundle: {
                        managedProperty: undefined,
                    },
                    valueBundleArray: [
                        {
                            managedProperty: undefined,
                        }                    ],
                    valueInteger: 42,
                    valueString: "Test string",
                    valueStringArray: [
                        "Test string"                    ],
                }            ],
            productId: "Test string",
        });
        /** Lists all the managed configurations settings for the specified app. */
        await gapi.client.androidenterprise.managedconfigurationssettings.list({
            enterpriseId: "Test string",
            productId: "Test string",
        });
        /** Retrieves details of an Android app permission for display to an enterprise admin. */
        await gapi.client.androidenterprise.permissions.get({
            language: "Test string",
            permissionId: "Test string",
        });
        /**
         * Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use
         * managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design.
         */
        await gapi.client.androidenterprise.products.approve({
            enterpriseId: "Test string",
            productId: "Test string",
        }, {
            approvalUrlInfo: {
                approvalUrl: "Test string",
            },
            approvedPermissions: "Test string",
        });
        /**
         * Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their
         * organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger
         * the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day.
         */
        await gapi.client.androidenterprise.products.generateApprovalUrl({
            enterpriseId: "Test string",
            languageCode: "Test string",
            productId: "Test string",
        });
        /** Retrieves details of a product for display to an enterprise admin. */
        await gapi.client.androidenterprise.products.get({
            enterpriseId: "Test string",
            language: "Test string",
            productId: "Test string",
        });
        /**
         * Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined.
         * This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed
         * Configurations through Play.
         */
        await gapi.client.androidenterprise.products.getAppRestrictionsSchema({
            enterpriseId: "Test string",
            language: "Test string",
            productId: "Test string",
        });
        /** Retrieves the Android app permissions required by this app. */
        await gapi.client.androidenterprise.products.getPermissions({
            enterpriseId: "Test string",
            productId: "Test string",
        });
        /** Finds approved products that match a query, or all approved products if there is no query. */
        await gapi.client.androidenterprise.products.list({
            approved: true,
            enterpriseId: "Test string",
            language: "Test string",
            maxResults: 42,
            query: "Test string",
            token: "Test string",
        });
        /** Unapproves the specified product (and the relevant app permissions, if any) */
        await gapi.client.androidenterprise.products.unapprove({
            enterpriseId: "Test string",
            productId: "Test string",
        });
        /**
         * Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling
         * Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
         */
        await gapi.client.androidenterprise.serviceaccountkeys.delete({
            enterpriseId: "Test string",
            keyId: "Test string",
        });
        /**
         * Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must
         * have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.
         */
        await gapi.client.androidenterprise.serviceaccountkeys.insert({
            enterpriseId: "Test string",
        }, {
            data: "Test string",
            id: "Test string",
            publicData: "Test string",
            type: "Test string",
        });
        /**
         * Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by
         * calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
         */
        await gapi.client.androidenterprise.serviceaccountkeys.list({
            enterpriseId: "Test string",
        });
        /** Deletes a cluster. */
        await gapi.client.androidenterprise.storelayoutclusters.delete({
            clusterId: "Test string",
            enterpriseId: "Test string",
            pageId: "Test string",
        });
        /** Retrieves details of a cluster. */
        await gapi.client.androidenterprise.storelayoutclusters.get({
            clusterId: "Test string",
            enterpriseId: "Test string",
            pageId: "Test string",
        });
        /** Inserts a new cluster in a page. */
        await gapi.client.androidenterprise.storelayoutclusters.insert({
            enterpriseId: "Test string",
            pageId: "Test string",
        }, {
            id: "Test string",
            name: [
                {
                    locale: "Test string",
                    text: "Test string",
                }            ],
            orderInPage: "Test string",
            productId: [
                "Test string"            ],
        });
        /** Retrieves the details of all clusters on the specified page. */
        await gapi.client.androidenterprise.storelayoutclusters.list({
            enterpriseId: "Test string",
            pageId: "Test string",
        });
        /** Updates a cluster. */
        await gapi.client.androidenterprise.storelayoutclusters.update({
            clusterId: "Test string",
            enterpriseId: "Test string",
            pageId: "Test string",
        }, {
            id: "Test string",
            name: [
                {
                    locale: "Test string",
                    text: "Test string",
                }            ],
            orderInPage: "Test string",
            productId: [
                "Test string"            ],
        });
        /** Deletes a store page. */
        await gapi.client.androidenterprise.storelayoutpages.delete({
            enterpriseId: "Test string",
            pageId: "Test string",
        });
        /** Retrieves details of a store page. */
        await gapi.client.androidenterprise.storelayoutpages.get({
            enterpriseId: "Test string",
            pageId: "Test string",
        });
        /** Inserts a new store page. */
        await gapi.client.androidenterprise.storelayoutpages.insert({
            enterpriseId: "Test string",
        }, {
            id: "Test string",
            link: [
                "Test string"            ],
            name: [
                {
                    locale: "Test string",
                    text: "Test string",
                }            ],
        });
        /** Retrieves the details of all pages in the store. */
        await gapi.client.androidenterprise.storelayoutpages.list({
            enterpriseId: "Test string",
        });
        /** Updates the content of a store page. */
        await gapi.client.androidenterprise.storelayoutpages.update({
            enterpriseId: "Test string",
            pageId: "Test string",
        }, {
            id: "Test string",
            link: [
                "Test string"            ],
            name: [
                {
                    locale: "Test string",
                    text: "Test string",
                }            ],
        });
        /** Deleted an EMM-managed user. */
        await gapi.client.androidenterprise.users.delete({
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /**
         * Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after
         * a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.
         */
        await gapi.client.androidenterprise.users.generateAuthenticationToken({
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /** Retrieves a user's details. */
        await gapi.client.androidenterprise.users.get({
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /** Retrieves the set of products a user is entitled to access. */
        await gapi.client.androidenterprise.users.getAvailableProductSet({
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /**
         * Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with
         * the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
         */
        await gapi.client.androidenterprise.users.insert({
            enterpriseId: "Test string",
        }, {
            accountIdentifier: "Test string",
            accountType: "Test string",
            displayName: "Test string",
            id: "Test string",
            managementType: "Test string",
            primaryEmail: "Test string",
        });
        /**
         * Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the
         * result of the Users.insert call.
         */
        await gapi.client.androidenterprise.users.list({
            email: "Test string",
            enterpriseId: "Test string",
        });
        /**
         * Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with
         * EMM-managed accounts.
         */
        await gapi.client.androidenterprise.users.revokeDeviceAccess({
            enterpriseId: "Test string",
            userId: "Test string",
        });
        /**
         * Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved
         * (products with revoked approval) can be whitelisted.
         */
        await gapi.client.androidenterprise.users.setAvailableProductSet({
            enterpriseId: "Test string",
            userId: "Test string",
        }, {
            productId: [
                "Test string"            ],
            productSetBehavior: "Test string",
            productVisibility: [
                {
                    productId: "Test string",
                    trackIds: [
                        "Test string"                    ],
                    tracks: [
                        "Test string"                    ],
                }            ],
        });
        /**
         * Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the
         * displayName field can be changed. Other fields must either be unset or have the currently active value.
         */
        await gapi.client.androidenterprise.users.update({
            enterpriseId: "Test string",
            userId: "Test string",
        }, {
            accountIdentifier: "Test string",
            accountType: "Test string",
            displayName: "Test string",
            id: "Test string",
            managementType: "Test string",
            primaryEmail: "Test string",
        });
        /** Deletes an existing web app. */
        await gapi.client.androidenterprise.webapps.delete({
            enterpriseId: "Test string",
            webAppId: "Test string",
        });
        /** Gets an existing web app. */
        await gapi.client.androidenterprise.webapps.get({
            enterpriseId: "Test string",
            webAppId: "Test string",
        });
        /** Creates a new web app for the enterprise. */
        await gapi.client.androidenterprise.webapps.insert({
            enterpriseId: "Test string",
        }, {
            displayMode: "Test string",
            icons: [
                {
                    imageData: "Test string",
                }            ],
            isPublished: true,
            startUrl: "Test string",
            title: "Test string",
            versionCode: "Test string",
            webAppId: "Test string",
        });
        /** Retrieves the details of all web apps for a given enterprise. */
        await gapi.client.androidenterprise.webapps.list({
            enterpriseId: "Test string",
        });
        /** Updates an existing web app. */
        await gapi.client.androidenterprise.webapps.update({
            enterpriseId: "Test string",
            webAppId: "Test string",
        }, {
            displayMode: "Test string",
            icons: [
                {
                    imageData: "Test string",
                }            ],
            isPublished: true,
            startUrl: "Test string",
            title: "Test string",
            versionCode: "Test string",
            webAppId: "Test string",
        });
    }
});
