/* This is stub file for gapi.client.script definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201016

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('script', 'v1', () => {
        /** now we can use gapi.client.script */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Read, compose, send, and permanently delete all your email from Gmail */
            'https://mail.google.com/',
            /** See, edit, share, and permanently delete all the calendars you can access using Google Calendar */
            'https://www.google.com/calendar/feeds',
            /** See, edit, download, and permanently delete your contacts */
            'https://www.google.com/m8/feeds',
            /** View and manage the provisioning of groups on your domain */
            'https://www.googleapis.com/auth/admin.directory.group',
            /** View and manage the provisioning of users on your domain */
            'https://www.googleapis.com/auth/admin.directory.user',
            /** View and manage your Google Docs documents */
            'https://www.googleapis.com/auth/documents',
            /** See, edit, create, and delete all of your Google Drive files */
            'https://www.googleapis.com/auth/drive',
            /** View and manage your forms in Google Drive */
            'https://www.googleapis.com/auth/forms',
            /** View and manage forms that this application has been installed in */
            'https://www.googleapis.com/auth/forms.currentonly',
            /** View and manage your Google Groups */
            'https://www.googleapis.com/auth/groups',
            /** Create and update Google Apps Script deployments */
            'https://www.googleapis.com/auth/script.deployments',
            /** View Google Apps Script deployments */
            'https://www.googleapis.com/auth/script.deployments.readonly',
            /** View Google Apps Script project's metrics */
            'https://www.googleapis.com/auth/script.metrics',
            /** View Google Apps Script processes */
            'https://www.googleapis.com/auth/script.processes',
            /** Create and update Google Apps Script projects */
            'https://www.googleapis.com/auth/script.projects',
            /** View Google Apps Script projects */
            'https://www.googleapis.com/auth/script.projects.readonly',
            /** See, edit, create, and delete your spreadsheets in Google Drive */
            'https://www.googleapis.com/auth/spreadsheets',
            /** View your email address */
            'https://www.googleapis.com/auth/userinfo.email',
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
        /** List information about processes made by or on behalf of a user, such as process type and current status. */
        await gapi.client.script.processes.list({
            pageSize: 42,
            pageToken: "Test string",
            "userProcessFilter.deploymentId": "Test string",
            "userProcessFilter.endTime": "Test string",
            "userProcessFilter.functionName": "Test string",
            "userProcessFilter.projectName": "Test string",
            "userProcessFilter.scriptId": "Test string",
            "userProcessFilter.startTime": "Test string",
            "userProcessFilter.statuses": "Test string",
            "userProcessFilter.types": "Test string",
            "userProcessFilter.userAccessLevels": "Test string",
        });
        /** List information about a script's executed processes, such as process type and current status. */
        await gapi.client.script.processes.listScriptProcesses({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
            "scriptProcessFilter.deploymentId": "Test string",
            "scriptProcessFilter.endTime": "Test string",
            "scriptProcessFilter.functionName": "Test string",
            "scriptProcessFilter.startTime": "Test string",
            "scriptProcessFilter.statuses": "Test string",
            "scriptProcessFilter.types": "Test string",
            "scriptProcessFilter.userAccessLevels": "Test string",
        });
        /** Creates a new, empty script project with no script files and a base manifest file. */
        await gapi.client.script.projects.create({
        }, {
            parentId: "Test string",
            title: "Test string",
        });
        /** Creates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.create({
            scriptId: "Test string",
        }, {
            description: "Test string",
            manifestFileName: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Deletes a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.delete({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Gets a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.get({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Lists the deployments of an Apps Script project. */
        await gapi.client.script.projects.deployments.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /** Updates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.update({
            deploymentId: "Test string",
            scriptId: "Test string",
        }, {
            deploymentConfig: {
                description: "Test string",
                manifestFileName: "Test string",
                scriptId: "Test string",
                versionNumber: 42,
            },
        });
        /** Creates a new immutable version using the current code, with a unique version number. */
        await gapi.client.script.projects.versions.create({
            scriptId: "Test string",
        }, {
            createTime: "Test string",
            description: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Gets a version of a script project. */
        await gapi.client.script.projects.versions.get({
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** List the versions of a script project. */
        await gapi.client.script.projects.versions.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /** Gets a script project's metadata. */
        await gapi.client.script.projects.get({
            scriptId: "Test string",
        });
        /** Creates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.create({
            scriptId: "Test string",
        }, {
            description: "Test string",
            manifestFileName: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Deletes a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.delete({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Gets a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.get({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Lists the deployments of an Apps Script project. */
        await gapi.client.script.projects.deployments.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /** Updates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.update({
            deploymentId: "Test string",
            scriptId: "Test string",
        }, {
            deploymentConfig: {
                description: "Test string",
                manifestFileName: "Test string",
                scriptId: "Test string",
                versionNumber: 42,
            },
        });
        /** Creates a new immutable version using the current code, with a unique version number. */
        await gapi.client.script.projects.versions.create({
            scriptId: "Test string",
        }, {
            createTime: "Test string",
            description: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Gets a version of a script project. */
        await gapi.client.script.projects.versions.get({
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** List the versions of a script project. */
        await gapi.client.script.projects.versions.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /** Gets the content of the script project, including the code source and metadata for each script file. */
        await gapi.client.script.projects.getContent({
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Creates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.create({
            scriptId: "Test string",
        }, {
            description: "Test string",
            manifestFileName: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Deletes a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.delete({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Gets a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.get({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Lists the deployments of an Apps Script project. */
        await gapi.client.script.projects.deployments.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /** Updates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.update({
            deploymentId: "Test string",
            scriptId: "Test string",
        }, {
            deploymentConfig: {
                description: "Test string",
                manifestFileName: "Test string",
                scriptId: "Test string",
                versionNumber: 42,
            },
        });
        /** Creates a new immutable version using the current code, with a unique version number. */
        await gapi.client.script.projects.versions.create({
            scriptId: "Test string",
        }, {
            createTime: "Test string",
            description: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Gets a version of a script project. */
        await gapi.client.script.projects.versions.get({
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** List the versions of a script project. */
        await gapi.client.script.projects.versions.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /** Get metrics data for scripts, such as number of executions and active users. */
        await gapi.client.script.projects.getMetrics({
            "metricsFilter.deploymentId": "Test string",
            metricsGranularity: "Test string",
            scriptId: "Test string",
        });
        /** Creates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.create({
            scriptId: "Test string",
        }, {
            description: "Test string",
            manifestFileName: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Deletes a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.delete({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Gets a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.get({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Lists the deployments of an Apps Script project. */
        await gapi.client.script.projects.deployments.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /** Updates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.update({
            deploymentId: "Test string",
            scriptId: "Test string",
        }, {
            deploymentConfig: {
                description: "Test string",
                manifestFileName: "Test string",
                scriptId: "Test string",
                versionNumber: 42,
            },
        });
        /** Creates a new immutable version using the current code, with a unique version number. */
        await gapi.client.script.projects.versions.create({
            scriptId: "Test string",
        }, {
            createTime: "Test string",
            description: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Gets a version of a script project. */
        await gapi.client.script.projects.versions.get({
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** List the versions of a script project. */
        await gapi.client.script.projects.versions.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /**
         * Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on
         * preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
         */
        await gapi.client.script.projects.updateContent({
            scriptId: "Test string",
        }, {
            files: [
                {
                    createTime: "Test string",
                    functionSet: {
                        values: [
                            {
                                name: "Test string",
                            }                        ],
                    },
                    lastModifyUser: {
                        domain: "Test string",
                        email: "Test string",
                        name: "Test string",
                        photoUrl: "Test string",
                    },
                    name: "Test string",
                    source: "Test string",
                    type: "Test string",
                    updateTime: "Test string",
                }            ],
            scriptId: "Test string",
        });
        /** Creates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.create({
            scriptId: "Test string",
        }, {
            description: "Test string",
            manifestFileName: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Deletes a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.delete({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Gets a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.get({
            deploymentId: "Test string",
            scriptId: "Test string",
        });
        /** Lists the deployments of an Apps Script project. */
        await gapi.client.script.projects.deployments.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /** Updates a deployment of an Apps Script project. */
        await gapi.client.script.projects.deployments.update({
            deploymentId: "Test string",
            scriptId: "Test string",
        }, {
            deploymentConfig: {
                description: "Test string",
                manifestFileName: "Test string",
                scriptId: "Test string",
                versionNumber: 42,
            },
        });
        /** Creates a new immutable version using the current code, with a unique version number. */
        await gapi.client.script.projects.versions.create({
            scriptId: "Test string",
        }, {
            createTime: "Test string",
            description: "Test string",
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** Gets a version of a script project. */
        await gapi.client.script.projects.versions.get({
            scriptId: "Test string",
            versionNumber: 42,
        });
        /** List the versions of a script project. */
        await gapi.client.script.projects.versions.list({
            pageSize: 42,
            pageToken: "Test string",
            scriptId: "Test string",
        });
        /**
         * Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project.
         * This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the [Authorization](#authorization-scopes) section; script projects that do
         * not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the project in the script editor, then select
         * **File > Project properties** and click the **Scopes** tab. The error `403, PERMISSION_DENIED: The caller does not have permission` indicates that the Cloud Platform project used to
         * authorize the request is not the same as the one used by the script.
         */
        await gapi.client.script.scripts.run({
            scriptId: "Test string",
        }, {
            devMode: true,
            function: "Test string",
            parameters: [
                42            ],
            sessionState: "Test string",
        });
    }
});
