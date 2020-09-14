/* This is stub file for gapi.client.libraryagent definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Maxim-Mazurok/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Maxim-Mazurok/google-api-typings-generator
**/

// Revision: 20200912

gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('libraryagent', 'v1', () => {
        /** now we can use gapi.client.libraryagent */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
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
        /** Gets a shelf. Returns NOT_FOUND if the shelf does not exist. */
        await gapi.client.libraryagent.shelves.get({
            name: "Test string",
        });
        /**
         * Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount
         * of books borrowed exceeds allocation quota in any dimensions.
         */
        await gapi.client.libraryagent.shelves.books.borrow({
            name: "Test string",
        });
        /** Gets a book. Returns NOT_FOUND if the book does not exist. */
        await gapi.client.libraryagent.shelves.books.get({
            name: "Test string",
        });
        /**
         * Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not
         * exist.
         */
        await gapi.client.libraryagent.shelves.books.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before. */
        await gapi.client.libraryagent.shelves.books.return({
            name: "Test string",
        });
        /** Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list. */
        await gapi.client.libraryagent.shelves.list({
            pageSize: 42,
            pageToken: "Test string",
        });
        /**
         * Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount
         * of books borrowed exceeds allocation quota in any dimensions.
         */
        await gapi.client.libraryagent.shelves.books.borrow({
            name: "Test string",
        });
        /** Gets a book. Returns NOT_FOUND if the book does not exist. */
        await gapi.client.libraryagent.shelves.books.get({
            name: "Test string",
        });
        /**
         * Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not
         * exist.
         */
        await gapi.client.libraryagent.shelves.books.list({
            pageSize: 42,
            pageToken: "Test string",
            parent: "Test string",
        });
        /** Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before. */
        await gapi.client.libraryagent.shelves.books.return({
            name: "Test string",
        });
    }
});
