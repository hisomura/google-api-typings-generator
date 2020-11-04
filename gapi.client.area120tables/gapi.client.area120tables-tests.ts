/* This is stub file for gapi.client.area120tables definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20201104

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('area120tables', 'v1alpha1', () => {
        /** now we can use gapi.client.area120tables */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** See, edit, create, and delete all of your Google Drive files */
            'https://www.googleapis.com/auth/drive',
            /** View and manage Google Drive files and folders that you have opened or created with this app */
            'https://www.googleapis.com/auth/drive.file',
            /** See and download all your Google Drive files */
            'https://www.googleapis.com/auth/drive.readonly',
            /** See, edit, create, and delete your spreadsheets in Google Drive */
            'https://www.googleapis.com/auth/spreadsheets',
            /** View your Google Spreadsheets */
            'https://www.googleapis.com/auth/spreadsheets.readonly',
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
        /** Gets a table. Returns NOT_FOUND if the table does not exist. */
        await gapi.client.area120tables.tables.get({
            name: "Test string",
        });
        /** Creates multiple rows. */
        await gapi.client.area120tables.tables.rows.batchCreate({
            parent: "Test string",
        }, {
            requests: [
                {
                    parent: "Test string",
                    row: {
                        name: "Test string",
                        values: {
                            A: 42                        },
                    },
                    view: "Test string",
                }            ],
        });
        /** Updates multiple rows. */
        await gapi.client.area120tables.tables.rows.batchUpdate({
            parent: "Test string",
        }, {
            requests: [
                {
                    row: {
                        name: "Test string",
                        values: {
                            A: 42                        },
                    },
                    updateMask: "Test string",
                    view: "Test string",
                }            ],
        });
        /** Creates a row. */
        await gapi.client.area120tables.tables.rows.create({
            parent: "Test string",
            view: "Test string",
        }, {
            name: "Test string",
            values: {
                A: 42            },
        });
        /** Deletes a row. */
        await gapi.client.area120tables.tables.rows.delete({
            name: "Test string",
        });
        /** Gets a row. Returns NOT_FOUND if the row does not exist in the table. */
        await gapi.client.area120tables.tables.rows.get({
            name: "Test string",
            view: "Test string",
        });
        /** Lists rows in a table. Returns NOT_FOUND if the table does not exist. */
        await gapi.client.area120tables.tables.rows.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            view: "Test string",
        });
        /** Updates a row. */
        await gapi.client.area120tables.tables.rows.patch({
            name: "Test string",
            updateMask: "Test string",
            view: "Test string",
        }, {
            name: "Test string",
            values: {
                A: 42            },
        });
        /** Lists tables for the user. */
        await gapi.client.area120tables.tables.list({
            pageSize: 42,
            pageToken: "Test string",
        });
        /** Creates multiple rows. */
        await gapi.client.area120tables.tables.rows.batchCreate({
            parent: "Test string",
        }, {
            requests: [
                {
                    parent: "Test string",
                    row: {
                        name: "Test string",
                        values: {
                            A: 42                        },
                    },
                    view: "Test string",
                }            ],
        });
        /** Updates multiple rows. */
        await gapi.client.area120tables.tables.rows.batchUpdate({
            parent: "Test string",
        }, {
            requests: [
                {
                    row: {
                        name: "Test string",
                        values: {
                            A: 42                        },
                    },
                    updateMask: "Test string",
                    view: "Test string",
                }            ],
        });
        /** Creates a row. */
        await gapi.client.area120tables.tables.rows.create({
            parent: "Test string",
            view: "Test string",
        }, {
            name: "Test string",
            values: {
                A: 42            },
        });
        /** Deletes a row. */
        await gapi.client.area120tables.tables.rows.delete({
            name: "Test string",
        });
        /** Gets a row. Returns NOT_FOUND if the row does not exist in the table. */
        await gapi.client.area120tables.tables.rows.get({
            name: "Test string",
            view: "Test string",
        });
        /** Lists rows in a table. Returns NOT_FOUND if the table does not exist. */
        await gapi.client.area120tables.tables.rows.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
            view: "Test string",
        });
        /** Updates a row. */
        await gapi.client.area120tables.tables.rows.patch({
            name: "Test string",
            updateMask: "Test string",
            view: "Test string",
        }, {
            name: "Test string",
            values: {
                A: 42            },
        });
    }
});
